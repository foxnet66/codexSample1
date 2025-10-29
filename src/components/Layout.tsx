import Head from 'next/head';
import type { FC, PropsWithChildren } from 'react';

import { siteMetadata } from '@/lib/siteMetadata';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Head>
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <main className="mx-auto flex w-full max-w-4xl flex-col px-6">{children}</main>
      <footer className="py-10 text-center text-sm text-slate-500">
        <p>
          Deploy on <strong>Vercel</strong> or <strong>Netlify</strong> by connecting this repository via GitHub.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
