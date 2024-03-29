import Head from 'next/head';
import Image from 'next/image';
import { Suspense, useState } from 'react';
import { DataLoader } from '../src/components/DataLoader';
import { NoSSR } from '../src/components/NoSSR';
import { RenderingNotifier } from '../src/components/RenderingNotifier';
import { fetchData1, Loadable } from '../src/utils';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [data1, setData1] = useState(() => new Loadable(fetchData1()));
  const [data2, setData2] = useState(() => new Loadable(fetchData1()));
  const [data3, setData3] = useState(() => new Loadable(fetchData1()));

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <NoSSR>
          <RenderingNotifier name="outside-Suspense" />
          <Suspense fallback={<p>Loading ...</p>}>
            <DataLoader data={data1} />
          </Suspense>
          <Suspense fallback={<p>Loading ...</p>}>
            <DataLoader data={data2} />
          </Suspense>
          <Suspense fallback={<p>Loading ...</p>}>
            <DataLoader data={data3} />
          </Suspense>
        </NoSSR>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
