// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; 
import { HelmetProvider } from "react-helmet-async"; // ✅ Added

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YoutubeServices from "./pages/YoutubeServices";
import Copywriting from "./pages/Copywriting";
import OtherServices from "./pages/OtherServices";
import Contact from "./pages/Contact";
import PricingPage from "./pages/PricingPage";
import OurWork from "./pages/OurWork";
import Faq from "./pages/Faq";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen dark app-bg">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/youtube-services" element={<YoutubeServices />} />
                <Route path="/copywriting" element={<Copywriting />} />
                <Route path="/other-services" element={<OtherServices />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/our-work" element={<OurWork />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>

        {/* ✅ Vercel Analytics */}
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
