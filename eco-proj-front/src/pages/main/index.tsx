import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import lockIcon from '../../svg/lock-icon.svg';
import paymentsIcon from '../../svg/payments-icon.svg';
import sberIcon from '../../svg/sberbank-icon.svg';
import Styles from '../../styles/Main.module.scss';

import { courseType } from '@/utils/types';
import { months } from '@/utils/enums';
import Valute from '@/components/Valute';
import { RootState } from '@/store';





interface mainProps {
    course: courseType;
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();

    return {
        props: {
            course: data
        }
    };
};

const main: FC<mainProps> = ({ course }) => {
    const { USD, EUR, CNY } = course.Valute || {};
    const isAuth = useSelector((state: RootState) => state.auth);

    return isAuth ? (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={Styles.main}>
                <nav className={Styles.content}>                
                    <Link href="main/profile" className={Styles.item}>
                        {/* тут надо будет получать аватарку пользователя */}
                        <h2 className={Styles.avatar}>ES</h2>
                        <p>Profile</p>
                    </Link>
                  
                    <div className={Styles.item}>
                        <Valute valute={USD} />
                        <Valute valute={EUR} />
                        <Valute valute={CNY} />   
                    </div>

                    <Link href="main/transactions" className={Styles.item}>
                        <h3 className={Styles.title}>Your transactions</h3>
                        <h4 className={Styles.subtitle}>Spending in {months[new Date().getMonth()]}</h4>
                        <p className={Styles.subtitle}>500₽</p>
                        <div className={Styles['transactions-lines']}>
                            {/* тут надо будет расчитать для каждой категории процент от всех трат */}
                            <span style={{width: '60%'}} className={Styles['supermarkets']}></span>
                            <span style={{width: '15%'}} className={Styles['other']}></span>
                            <span style={{width: '25%'}} className={Styles['clothes']}></span>
                        </div>
                    </Link>

                    <Link href="main/payments" className={Styles.item}>
                        <Image className={Styles.icon} src={paymentsIcon} alt="переводы, payment, money transfer, withdraw cash"/>
                        <h3 className={Styles.title}>Payments</h3>
                        <h3 className={Styles.subtitle}>Transfer money or withdraw cash</h3>
                    </Link>

                    <Link href="main/balance" className={Styles.item}>
                        <Image className={Styles.icon} src={sberIcon} alt="сбербанк, сбер, sberbank, sber"/>
                        {/* тут нужно будет получать текущий баланс и карту */}
                        <h3 className={Styles.title}>514.50₽</h3>
                        <h3 className={Styles.subtitle}>СберКарта Мир</h3>
                    </Link>
                </nav>
            </main>
        </>
    )
    :
    (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={Styles.main}>
                <nav className={Styles['not-auth__content']}>
                    <Image priority={true} src={lockIcon} alt="lock, замок, войти"/>
                    <h2 style={{marginBottom: '8px'}} className={Styles.title}>Looks like you are not logged in</h2>
                    <Link className={Styles.subtitle + ' ' + 'transition-all hover:text-primary-200'} href="/log-in">*click me*</Link>
                </nav>
            </main>
        </>
    );
};

export default main;