import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/posts/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {

  const [articlesToShow, setArticlesToShow] = useState([]);
  const [next, setNext] = useState(0);

  const perPgae = 5;
  const articlesRef = useRef(null); // Ref for articles section
  const router = useRouter();
  const currentPage = parseInt(router.query.page) || 1;

  useEffect(() => {
    const start = (currentPage - 1) * perPgae;
    const end = start + perPgae;
    setArticlesToShow(articles.slice(start, end))
    setNext(end);
  }, [router.query.page]);

  const loadMore = () => {
    const newPage = (next / perPgae) + 1;
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: newPage },
      },
      undefined,
      { scroll: false }
    ).then(() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    );
  };// eslint-disable-line react-hooks/exhaustive-deps

  const noMoreArticles = articlesToShow.length;

  return (
    <>
      <Head>
        <title>Articles - Elsayed Kamal</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Writing on web development, as well as some personal stuff..."
        intro="My posts are a mix of coding tutorials, tips & tricks for Laravel, past musings on different subjects, and whatever other assorted rants and ramblings make it through."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40" ref={articlesRef}>
          <div className="flex max-w-3xl flex-col space-y-16">
            {articlesToShow.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>

          {!noMoreArticles ? (
            <button
              onClick={loadMore}
              className="mt-12 mb-6 py-2 px-5 text-sm bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
            >
              Load more
            </button>
          ) : (
            <p style={{
              marginTop: '5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'gray'
              }}>
                That&apos;s all folks! 🚀
            </p>
          )}
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
