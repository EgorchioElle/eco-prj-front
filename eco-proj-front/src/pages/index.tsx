import Head from 'next/head';
import { FC } from 'react';

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
          Home
        </main>
      </Layout>
    </>
  );
};

export default home;
