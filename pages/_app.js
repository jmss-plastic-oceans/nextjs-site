import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width' />
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
