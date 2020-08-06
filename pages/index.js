import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Plastic Oceans JMSS</title>

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

      <main className={styles.main}>

        <img className={styles.image} src="https://github.com/jmss-plastic-oceans/jmss-plastic-oceans.github.io/raw/master/images/intro1.webp"/>

        <h1 className={styles.title}>
          Welcome to Plastic Oceans JMSS
        </h1>

        <p className={styles.description}>
          We are a student-led environmentalist group in John Monash Science School, Victoria, Australia.
        </p>

        <h2><Link href="articles/"><a>Check out what we've written.</a></Link></h2>

      </main>
    </div>
  )
}
