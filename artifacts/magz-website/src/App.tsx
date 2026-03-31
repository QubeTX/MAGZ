import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect, useState, useCallback } from "react";
import Lenis from "lenis";
import Home from "@/pages/Home";
import CareersPage from "@/pages/CareersPage";
import NotFound from "@/pages/not-found";
import { LoadingScreen } from "@/components/LoadingScreen";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/careers" component={CareersPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Let native momentum scrolling handle touch — Lenis only smooths mouse wheel
      touchMultiplier: 0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    (window as any).__lenis = lenis;

    return () => {
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </>
  );
}

export default App;
