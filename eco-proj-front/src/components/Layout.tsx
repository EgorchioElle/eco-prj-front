import React, { ReactNode, FC } from 'react';

import { Inter } from '@next/font/google';

import Nav from './Nav';

const inter = Inter({ subsets: ['latin'] });

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className={inter.className}>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;