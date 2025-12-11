import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client using environment variables
// These are loaded from .env.local during development
// and from your hosting platform's environment settings in production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env.local file.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };

