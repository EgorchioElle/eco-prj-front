import React, { ReactNode, FC } from 'react';

import { Inter } from '@next/font/google';

import Nav from './Nav';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

interface layoutProps {
    children: ReactNode
}

const Layout: FC<layoutProps> = ({children}) => {
  return (
    <div className={inter.className}>
        <Nav />
        {children}
        <Footer />
    </div>
  );
};

export default Layout;