import Head from 'next/head';
import Link from 'next/link';

import React, { ChangeEvent, FC, useState } from 'react';

import Styles from '../styles/Auth.module.scss';

const signup: FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmitHandle = () => {
        // создать аккаунт ...  
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
                <div className={Styles.login}>
                    <h2>Create a New Account!</h2>
                    <form method="post" action="/log-in">

                        <section className={Styles.box}>
                            <input onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} type="text" required />
                            <label>Username</label>
                        </section>

                        <section className={Styles.box}>
                            <input onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type="text" required />
                            <label>Email</label>
                        </section>

                        <section className={Styles.box}>
                            <input onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} type="password" required />
                            <label>Password</label>
                        </section>

                        <p className="text-sm mb-5">Already have an account? <Link className="text-blue-500 hover:underline" href="/log-in">Log in!</Link></p>
                        <button onSubmit={onSubmitHandle} type="submit" className={Styles.submit}>Sign Up</button>
                        
                    </form>
                </div>
            </main>
        </>
    );
};

export default signup;