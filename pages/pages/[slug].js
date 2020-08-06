
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client';
import Head from 'next/head'
import styles from '../../styles/Page.module.css';
import Link from 'next/link';

function Home(props) {

  const {title = "404 - Page not found." , body, description = "404 - Page not found."} = props;
  
  return (
    <div class="nextContent">
    <Head>
        
      <title>{`${title} | Plastic Oceans JMSS`}</title>
      <meta name="keywords" content="Conservation,Activism,Environment,Pollution,School,Student,Health,Social" />
      <link rel="icon" href="../favicon.png" />

      <meta property="og:title" content={`${title} | Plastic Oceans JMSS`} />
      <meta property="og:site_name" content="Plastic Oceans JMSS" />
      <meta property="og:url" content="https://jmss-plastic-oceans.vercel.app" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="../images/poalogo.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Plastic Oceans JMSS`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content="Plastic Oceans JMSS" />
      <meta name="twitter:image" content="../images/poalogo.png" />

    </Head>

    <div className={styles.content}>

    <header className={styles.header}>

      <img className={styles.mobileLogo} src="../images/ps.png" />

      <nav className={styles.nav}>

        <Link href="/"><a>Home</a></Link>
        <Link href="/pages/mission"><a>Our Mission</a></Link>
        <Link href="/articles"><a>Articles</a></Link>
        <img src="../images/ps.png"/>
        <Link href="/pages/get-involved"><a>Get Involved</a></Link>
        <Link href="/pages/quiz"><a>Quiz</a></Link>
        <Link href="/pages/contact"><a>Contact</a></Link>

      </nav>

    </header>

    <div className={styles.contentContainer}>
      <div className={styles.pageContent}>
        <BlockContent
          blocks={body}
          imageOptions={{ w: 900, fit: 'max' }}
          {...client.config()}
        />
      </div>
    </div>

    </div>

    <footer className={styles.footer}>
      <p className={styles.social}>
        Join the conversation on <a href="https://instagram.com/poa_students">Instagram</a> and <a href="https://facebook.com/poa_students/">Facebook</a>
      </p>

      <pre>Created by the <a href="https://github.com/jmss-plastic-oceans/jmss-plastic-oceans.github.io/graphs/contributors">media team</a>.</pre>
    </footer>
    
    </div>
  )
}

const query = groq`*[_type == "page" && location == $slug ][0]{
  title,
  body,
  description
}`

Home.getInitialProps = async function(context) {
  const { slug = "" } = context.query;
  console.log(slug);
  let sanityResult = await client.fetch(query, {slug});
  return {...sanityResult};
}

export default Home;
