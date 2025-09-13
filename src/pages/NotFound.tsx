import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="bg-gradient-card rounded-3xl p-12 border border-border/50 shadow-elevated">
          <h1 className="mb-6 text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent">404</h1>
          <h2 className="mb-4 text-2xl md:text-3xl font-semibold text-foreground">Oops! Page not found</h2>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best content creators sometimes need to find their way back home.
          </p>
          <a 
            href="/" 
            className="inline-block bg-gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-glow hover:shadow-elevated hover:scale-105 transition-all duration-300"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
