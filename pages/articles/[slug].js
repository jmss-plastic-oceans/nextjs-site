// [slug].js

import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client';
import styles from '../../styles/Article.module.css';
import Head from 'next/head';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Article = (props) => {
  const { 
    title = 'Plastic Oceans Article',
    image,
    shortdescription = "This is an article written by Plastic Oceans jMSS",
    body,
    categories = ['article'],
    authors = ['POA Team'],
    aslug
  } = props;

  return (
    <>

    <Head>

    <title>{`${title} | Plastic Oceans JMSS`}</title>
    <meta name="title" content={`${title} | Plastic Oceans JMSS`} />
    <meta name="description" content={shortdescription} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={"https://jmss-plastic-oceans.vercel.app/articles/" + aslug} />
    <meta property="og:title" content={`${title} | Plastic Oceans JMSS`} />
    <meta property="og:description" content={shortdescription} />
    <meta property="og:image" content={urlFor(image).url()} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={"https://jmss-plastic-oceans.vercel.app/articles/" + aslug} />
    <meta property="twitter:title" content={`${title} | Plastic Oceans JMSS`} />
    <meta property="twitter:description" content={shortdescription} />
    <meta property="twitter:image" content={urlFor(image).url()} />

    </Head>

    <main className={styles.wrapper}>
      <article className={styles.article}>
        <h1 className={styles.bigTitle} >{title}</h1>

        <span className={styles.authors} >Written by {authors.join(", ")}</span><br/>

        <img
          className={styles.mainImg}
          src={urlFor(image).url()}
        />

        <ul className={styles.cats} aria-label="Categories">
          {

            categories.map((e, i) => (
              <li key={i} className={styles.category}>
                {e}
              </li>
            ))
          }
        </ul>

        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
        />

      </article>
    </main>

    </>
  )
}

const query = groq`*[_type == "post" && $slug == slug.current ][0]{
  title,
  "authors": author[]->name,
  "image": mainImage,
  "shortdescription": description,
  "categories": categories[]->title,
  body,
  "aslug": slug
}`

Article.getInitialProps = async function(context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug })
}

export default Article