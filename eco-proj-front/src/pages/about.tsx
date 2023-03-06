import Head from 'next/head';
import { FC } from 'react';

import Layout from '@/components/Layout';

const about: FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          about
        </main>
      </Layout>
    </>
  );
};

export default about;