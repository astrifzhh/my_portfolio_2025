import { ThemeProvider } from "@/components/ThemeProvider";
import "../app/globals.css"; // Ensure the path is correct
import type { AppProps } from "next/app"; // Import the correct type from Next.js
import { useEffect } from "react";
import { useRouter } from "next/router";

// Replace with your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-LGQHZQC701";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Track page view on route change
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("config", GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the event listener
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
