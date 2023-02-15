
import { Provider } from 'react-redux';

import { FC } from 'react';

import { store } from '@/store';

import type { AppProps } from 'next/app';


const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
