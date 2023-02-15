import Head from 'next/head';

import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { test } from '@/store/AuthReducer';

const login: FC = () => {
    // удалите при необходимости
    const dispatch = useDispatch();

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p onClick={() => dispatch(test())}>Login</p>
            </main>
        </>
    );
};

export default login;