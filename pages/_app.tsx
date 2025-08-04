import type { AppProps } from "next/app"; // Import the correct type from Next.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../app/globals.css"; // Ensure the path is correct
// import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  <>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {/* <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-P29VHTL0M4"
      />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P29VHTL0M4');
        `}
      </Script> */}

      <Component {...pageProps} />
    </ThemeProvider>
  </>;
}

export default MyApp;
