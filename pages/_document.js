import Document, { Html, Head, Main, NextScript } from 'next/document'
import QRCode from 'qrcode.react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-AU">

        <Head>

            <meta charSet='utf-8' />

            <meta property="og:title" content="Plastic Oceans JMSS" />
            <meta property="og:site_name" content="Plastic Oceans JMSS" />
            <meta property="og:url" content="https://jmss-plastic-oceans.vercel.app" />
            <meta property="og:description" content="We are the Plastic Oceans environmentalist team at John Monash Science School." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="images/poalogo.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content="We are the Plastic Oceans environmentalist team at John Monash Science School." />
            <meta name="twitter:title" content="Plastic Oceans JMSS" />
            <meta name="twitter:image" content="images/poalogo.png" />


        </Head>

        <body>
          
          <Main />
          <NextScript />

        </body>

      </Html>
    )
  }
}

export default MyDocument