import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YoutubeServices from "./pages/YoutubeServices";
import Copywriting from "./pages/Copywriting";
import OtherServices from "./pages/OtherServices";
import Contact from "./pages/Contact";  // 👈 import Contact page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/youtube-services" element={<YoutubeServices />} />
          <Route path="/copywriting" element={<Copywriting />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="/contact" element={<Contact />} /> {/* 👈 new contact route */}
          
          {/* keep this last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
