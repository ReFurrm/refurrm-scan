
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Rescue from "./pages/Rescue";
import Stories from "./pages/Stories";
import Scanner from "./pages/Scanner";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Admin from "./pages/Admin";
import Analytics from "./pages/Analytics";
import Community from "./pages/Community";
import FacilityPortal from "./pages/FacilityPortal";
import ImpactDashboard from "./pages/ImpactDashboard";
import Marketplace from "./pages/Marketplace";
import MobileCamper from "./pages/MobileCamper";
import Resources from "./pages/Resources";
import Shop from "./pages/Shop";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/rescue" element={<Rescue />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/scanner" element={<ProtectedRoute><Scanner /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
              <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
              <Route path="/community" element={<Community />} />
              <Route path="/facility" element={<ProtectedRoute><FacilityPortal /></ProtectedRoute>} />
              <Route path="/impact" element={<ImpactDashboard />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/camper" element={<MobileCamper />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;

