import { ThemeProvider } from "@/components/ThemeProvider";
import "../app/globals.css"; // Ensure the path is correct
import type { AppProps } from "next/app"; // Import the correct type from Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
