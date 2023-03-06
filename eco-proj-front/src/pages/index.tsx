import Head from 'next/head';
import { FC } from 'react';
import Link from 'next/link';

import Styles from '../styles/Home.module.scss';

import Layout from '@/components/Layout';

const home: FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={Styles.main}>
          <section className={Styles.content}>
            
            <h1 className={Styles.intro}>Track your spending
              <span className="text-orange-400"> efficiently</span> and
              <span className="text-red-400"> quickly</span> with
              <span className="text-zinc-600"> MoneyWheel</span>
            </h1>

            <Link href="/log-in" className={Styles.button}>Let`s Start</Link>
            <div className={Styles['image-1']}></div>
            <div className={Styles['image-2']}></div>
            <div className={Styles['image-3']}></div>

          </section>
        </main>
      </Layout>
    </>
  );
};

export default home;
