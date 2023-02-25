import { FC } from 'react';

import Styles from '../styles/Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={Styles.footer}>
            <nav className={Styles.nav}>
                <ul>
                    <li><h3 className={Styles.subtitle}>Developers</h3></li>
                    <li className={Styles.item}>-</li>
                    <li className={Styles.item}>-</li>
                    <li className={Styles.item}>-</li>
                </ul>
                <ul>
                    <li><h3 className={Styles.subtitle}>Links</h3></li>
                    <li className={Styles.item}>-</li>
                    <li className={Styles.item}>-</li>
                    <li className={Styles.item}>-</li>
                </ul>
                <ul>
                    <li><h3 className={Styles.subtitle}>Docs</h3></li>
                    <li className={Styles.item}>-</li>
                    <li className={Styles.item}>-</li>
                    <li className={Styles.item}>-</li>
                </ul>
            </nav>
            <h4 className={Styles.company}>© . . . 2023</h4>
        </footer>
    );
};

export default Footer;