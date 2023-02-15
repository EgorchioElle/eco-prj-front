import Head from 'next/head';
import { FC } from 'react';

import Styles from '../styles/Home.module.scss';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={Styles.main}>
        Home
      </main>
    </>
  );
};

export default Home;
