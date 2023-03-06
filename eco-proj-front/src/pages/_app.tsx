import { Provider } from 'react-redux';
import { FC } from 'react';

import type { AppProps } from 'next/app';

import { store } from '@/store';
import '../styles/globals.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  );
};

export default App;
