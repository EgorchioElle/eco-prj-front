import { FC } from 'react';
import Link from 'next/link';

import Styles from '../styles/Nav.module.scss';

import { publicRoutes } from '../routes';

const Nav: FC = () => {
  const routes = publicRoutes;

  return (
    <>
      <nav className={Styles.nav}>

        <Link href="/" className={Styles.logo}>
          <h1>Money</h1>
          <h1>Wheel</h1>
        </Link>

        <div className={Styles['links-container']}>
          {routes.map(({ id, path, title }) => {
            return <Link className={Styles.link} key={id} href={path}>{title}</Link>;
          })}
        </div>
        
      </nav>
    </>
  );
};

export default Nav;