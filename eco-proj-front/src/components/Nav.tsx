import { FC } from 'react';
import Link from 'next/link';

import Styles from '../styles/Nav.module.scss';

import {publicRoutes} from '../routes';



const Nav: FC = () => {
  const routes = publicRoutes;

  return (
    <nav className={Styles.nav}>
      {routes.map(({id, path, title}) => {
        return <Link className={Styles.link} key={id} href={path}>{title}</Link>;
      })}
    </nav>
  );
};

export default Nav;