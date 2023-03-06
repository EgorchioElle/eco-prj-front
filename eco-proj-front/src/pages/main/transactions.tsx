import Head from 'next/head';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import Styles from '../../styles/MainSubpages.module.scss';
import menuIcon from '../../svg/menu-icon.svg';

import { months } from '@/utils/enums';
import { RootState } from '@/store';

const transactions: FC = () => {
    const spendings = useSelector((state: RootState) => state.spendings);
    let allSpendingsValue: number = 0;
    spendings.forEach(({ value }) => allSpendingsValue += value);

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
                        <h1 className={Styles.title}>Your transactions</h1>
                        <h2 className={Styles.subtitle}>Spending in {months[new Date().getMonth()]}: {allSpendingsValue}₽</h2>
                        <section className={Styles['transactions-lines']}>
                            {spendings.map(({ category, value }, index) => {
                                return <span key={index} style={{ width: value / allSpendingsValue * 100 + '%' }} className={Styles[category]}></span>;
                            })}
                        </section>
                        <section className={Styles['transactions-categories']}>
                            {spendings.map(({ category, value }, index) => {
                                return(
                                <p key={index} >
                                    <span className={Styles[category] + ' rounded-full px-2.5 mr-2'}></span>
                                    {category} - {value}₽
                                </p>);
                            })}
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
};

export default transactions;