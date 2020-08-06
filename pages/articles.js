// index.js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/AllArticles.module.css';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const Articles = (props) => {
    const { articles = [] } = props
    return (
        <>

        <Head>

            <title>{`Articles | Plastic Oceans JMSS`}</title>
            <meta name="title" content={`Articles | Plastic Oceans JMSS`} />
            <meta name="description" content={"These are the articles by the Plastic Oceans JMSS team."} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={"https://plastic-oceans-jmss.netlify.app/articles"} />
            <meta property="og:title" content={`Articles | Plastic Oceans JMSS`} />
            <meta property="og:description" content={"These are the articles by the Plastic Oceans JMSS team."} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={"https://plastic-oceans-jmss.netlify.app/articles"} />
            <meta property="twitter:title" content={`Articles | Plastic Oceans JMSS`} />
            <meta property="twitter:description" content={"These are the articles by the Plastic Oceans JMSS team."} />

        </Head>

        <main className={styles.main}>
            <article>
                <h1 className={styles.bigTitle}>Articles</h1>

                <div className={styles.container}>
                    {articles.map(
                    ({ _id, title = '', slug = '', _updatedAt = '', mainImage, description  }) =>
                        slug && (
                            <Link key={_id} href="/articles/[slug]" as={`/articles/${slug.current}`} passHref={true}>
                                <a className={styles.project}>
                                    { mainImage && <img src={urlFor(mainImage).height(300).url()}/> }
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </a>
                            </Link>
                        )
                    )}
                </div>
            </article>
        </main>
        </>
    )
}

Articles.getInitialProps = async () => ({
    articles: await client.fetch(groq`
      *[_type == "post"]
    `)
})

export default Articles