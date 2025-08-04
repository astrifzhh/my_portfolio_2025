import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext, DocumentInitialProps } from "next/document";
// import ReactGA from "react-ga4";

// ReactGA.initialize("G-TGVYZJ597D");

// // Send pageview with a custom path
// ReactGA.send({ hitType: "pageview", page: "/my-path" });

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-LGQHZQC701"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-LGQHZQC701');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
