import Head from 'next/head';
import { Inter } from 'next/font/google';

import type { GetStaticProps } from 'next';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import { getAllPosts } from '@/lib/content';
import { siteMetadata } from '@/lib/siteMetadata';
import type { PostSummary } from '@/types/content';

const inter = Inter({ subsets: ['latin'] });

type HomePageProps = {
  posts: PostSummary[];
};

const HomePage = ({ posts }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Head>
      <Layout>
        <div className={`flex flex-col items-center gap-12 py-20 ${inter.className}`}>
          <Header title={siteMetadata.title} subtitle={siteMetadata.description} />
          <section className="flex w-full max-w-3xl flex-col gap-6 text-left text-base leading-relaxed text-slate-200">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 shadow-md">
                <header className="flex flex-col gap-1">
                  <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}{' '}
                    · {post.author}
                  </p>
                </header>
                <p className="mt-4 text-slate-300">{post.excerpt}</p>
              </article>
            ))}
            {posts.length === 0 && (
              <p className="rounded-lg border border-dashed border-slate-800 bg-slate-900/40 p-6 text-center text-slate-400">
                No posts found. Add Markdown files to <code>content/posts</code> to see them here.
              </p>
            )}
          </section>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<{ posts: PostSummary[] }> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
