# Platform Setup Guide for refurrm.app

## Quick Start (Vercel, ~5 minutes)

### Prerequisites
- GitHub account with the ReFURRM repository
- Domain `refurrm.app` purchased and accessible
- Supabase project running
- Stripe account set up (only if you need payments)

---

## Option A: Vercel (recommended)

### 1. Deploy the project

**A. Connect the repository**
```
1. Visit https://vercel.com/new
2. Click "Import Git Repository"
3. Select your ReFURRM repo
4. Click "Import"
```

**B. Build settings (Vite)**
- Framework Preset: **Vite** (auto-detected)
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**C. Deploy**
- Click **"Deploy"**
- Wait ~90 seconds
- You will get a temporary URL like: `refurrm.vercel.app`

### 2. Add environment variables

Go to: **Dashboard -> Your Project -> Settings -> Environment Variables**

Add these:

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_SUPABASE_URL` | `https://lpfiiycqgykyuzjbwikt.supabase.co` | Production, Preview, Development |
| `VITE_SUPABASE_ANON_KEY` | `sb_publishable_9lSqpifpi9ulkMMkuVGa3w_xQBM0d5k` | Production, Preview, Development |
| `VITE_STRIPE_PUBLISHABLE_KEY` | `pk_live_YOUR_KEY` | Production |
| `VITE_STRIPE_PUBLISHABLE_KEY` | `pk_test_YOUR_KEY` | Preview, Development |

Notes:
- Use the same variable name for Stripe; Vercel lets you set different values per environment.
- Click **Save** after each variable.

Redeploy after adding variables:
- Go to **Deployments**
- Click the "..." menu on the latest deployment
- Select **Redeploy**

### 3. Connect your custom domain

**A. Add domain in Vercel**
```
1. Go to Settings -> Domains
2. Click "Add"
3. Enter: refurrm.app
4. Click "Add"
5. Also add: www.refurrm.app
```

**B. Configure DNS at your registrar**

For apex domain (`refurrm.app`):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

For `www`:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**C. Wait for DNS propagation**
- Usually 10-30 minutes (up to 48 hours)
- Check status: https://www.whatsmydns.net/#A/refurrm.app

**D. SSL**
- Vercel provisions SSL automatically
- Your site will be live at `https://refurrm.app`

---

## Option B: Netlify (alternative)

### 1. Deploy to Netlify

**Option A: GitHub integration**
```
1. Go to https://app.netlify.com/start
2. Click "Import from Git"
3. Choose GitHub
4. Select ReFURRM repository
5. Build settings:
   - Build command: npm run build
   - Publish directory: dist
6. Click "Deploy site"
```

**Option B: Manual deploy**
```bash
# Build locally
npm run build

# Go to https://app.netlify.com/drop
# Drag and drop the 'dist' folder
```

### 2. Environment variables

Go to: **Site settings -> Environment variables**

Add the same variables listed in the Vercel section.

### 3. Custom domain on Netlify

```
1. Go to Site settings -> Domain management
2. Click "Add custom domain"
3. Enter: refurrm.app
4. Netlify provides nameservers:
   - dns1.p01.nsone.net
   - dns2.p01.nsone.net
   - dns3.p01.nsone.net
   - dns4.p01.nsone.net
5. Update nameservers at your domain registrar
6. Wait 2-24 hours for propagation
```

---

## Supabase Edge Functions (only if you use subscriptions)

### 1. Install Supabase CLI

**macOS/Linux:**
```bash
brew install supabase/tap/supabase
```

**Windows:**
```bash
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

**npm (all platforms):**
```bash
npm install -g supabase
```

### 2. Login and link the project

```bash
supabase login
supabase link --project-ref lpfiiycqgykyuzjbwikt
```

### 3. Create Edge Functions

Create these files:

**supabase/functions/create-pro-subscription/index.ts**
```typescript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import Stripe from 'https://esm.sh/stripe@12.0.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

serve(async (req) => {
  try {
    const { userId, email } = await req.json()
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'ReFURRM Pro Subscription',
            description: 'Monthly Pro membership with advanced features',
          },
          unit_amount: 2900,
          recurring: { interval: 'month' },
        },
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: `https://refurrm.app/profile?payment=success`,
      cancel_url: `https://refurrm.app/profile?payment=canceled`,
      client_reference_id: userId,
      customer_email: email,
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
```

**supabase/functions/stripe-webhook/index.ts**
```typescript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import Stripe from 'https://esm.sh/stripe@12.0.0?target=deno'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') || '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
)

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')
  const body = await req.text()
  
  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature!,
      Deno.env.get('STRIPE_WEBHOOK_SECRET') || ''
    )

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object
      const userId = session.client_reference_id

      await supabase
        .from('profiles')
        .update({ subscription_tier: 'pro' })
        .eq('id', userId)
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
```

### 4. Deploy Functions

```bash
supabase functions deploy create-pro-subscription
supabase functions deploy stripe-webhook
```

### 5. Set Secrets

```bash
supabase secrets set STRIPE_SECRET_KEY=sk_live_YOUR_SECRET_KEY
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET
```

---

## Stripe Webhook Configuration

### 1. Get Webhook URL
```
https://lpfiiycqgykyuzjbwikt.supabase.co/functions/v1/stripe-webhook
```

### 2. Add Webhook in Stripe

```
1. Go to: https://dashboard.stripe.com/webhooks
2. Click "+ Add endpoint"
3. Endpoint URL: [paste URL above]
4. Description: ReFURRM Production Webhook
5. Events to send:
   - checkout.session.completed
   - customer.subscription.created
   - customer.subscription.updated
   - customer.subscription.deleted
   - invoice.payment_succeeded
   - invoice.payment_failed
6. Click "Add endpoint"
7. Copy the "Signing secret" (whsec_...)
8. Add to Supabase secrets (see step 5 above)
```

---

## Launch Checklist

- [ ] Vercel deployment successful
- [ ] Environment variables configured
- [ ] refurrm.app domain connected
- [ ] SSL certificate active (https works)
- [ ] Supabase Edge Functions deployed
- [ ] Stripe webhook configured
- [ ] Test signup/login
- [ ] Test donation payment
- [ ] Test Pro subscription upgrade
- [ ] Verify webhook receives events
- [ ] Check all pages load correctly

---

**Your ReFURRM platform is now live at https://refurrm.app.**
