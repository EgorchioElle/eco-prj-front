import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Styles from '../../styles/MainSubpages.module.scss';
import menuIcon from '../../svg/menu-icon.svg';

const payments: FC = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={Styles.main}>
                <Link title="Back to Menu" href="/main" className={Styles.menu}>
                    <Image width={20} height={20} src={menuIcon} alt="menu, меню, главная" />
                </Link>
                <section className={Styles.content}>
                    <div className={Styles.info}>
                        <h1 className={Styles.title}>Payments</h1>
                    </div>
                </section>
            </main>
        </>
    );
};

export default payments;