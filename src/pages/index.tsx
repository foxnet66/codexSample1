import Head from 'next/head';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import { siteMetadata } from '@/lib/siteMetadata';

const inter = Inter({ subsets: ['latin'] });

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Head>
      <Layout>
        <div className={`flex flex-col items-center gap-8 py-20 ${inter.className}`}>
          <Header title={siteMetadata.title} subtitle={siteMetadata.description} />
          <section className="max-w-2xl text-center text-base leading-relaxed text-slate-200">
            <p>
              Edit <code className="rounded bg-slate-900 px-2 py-1">src/pages/index.tsx</code> to start building your
              Next.js + Tailwind CSS application.
            </p>
            <p className="mt-4">
              Tailwind is configured inside <code className="rounded bg-slate-900 px-2 py-1">tailwind.config.ts</code> and
              global styles live in <code className="rounded bg-slate-900 px-2 py-1">src/styles/globals.css</code>.
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
