import { ChangeEvent, FC } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';

import Styles from '../../styles/MainSubpages.module.scss';
import menuIcon from '../../svg/menu-icon.svg';

import { RootState } from '@/store';
import { setUsername } from '@/store/UsernameReducer';
import { toInitials, userColors } from '@/utils/consts';
import { setUserColor } from '@/store/UserColorReducer';


const profile: FC = () => {
    const username = useSelector((state: RootState) => state.username);
    const userColor = useSelector((state: RootState) => state.userColor);
    const dispatch = useDispatch();

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUsername(e.target.value));
    };

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
                        <input type="text" onChange={onChangeHandle} className={Styles.title} value={username} />
                        <h3 className={Styles.subtitle}>egorchioelle@gmail.com</h3>
                        <div style={{ backgroundColor: userColor }} className={Styles.avatar}>{toInitials(username)}</div>
                        <div className={Styles.circles}>
                            {userColors.map((color, index) => {
                                return (
                                <button 
                                    key={index} 
                                    onClick={() => dispatch(setUserColor(color))} 
                                    style={{ backgroundColor: color, boxShadow: userColor === color ? `0 0 5px ${color}` : 'none' }} 
                                    className={userColor === color ? Styles.circle + ' ' + Styles.circle_active : Styles.circle}>
                                </button>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default profile;