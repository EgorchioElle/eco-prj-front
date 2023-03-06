
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';

import Styles from '../styles/Error.module.scss';

const error: FC = () => {

  return (
    <main className={Styles.main}>

      <svg className={Styles.svg} width="380px" height="500px" viewBox="0 0 837 1045" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" className={Styles.Polygon_1} stroke="#007FB2" strokeWidth="6"></path>
          <path d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" className={Styles.Polygon_2} stroke="#17ff67" fill="#17ff67" strokeWidth="6"></path>
          <path d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" className={Styles.Polygon_3} stroke="#EF4A5B" fill="#EF4A5B" strokeWidth="6"></path>
          <path d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" className={Styles.Polygon_4} stroke="#795D9C" strokeWidth="6"></path>
          <path d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" className={Styles.Polygon_5} stroke="#ff1753" strokeWidth="6"></path>
        </g>
      </svg>

      <section className={Styles.message}>
        <h2><span style={{ color: '#17dbef' }}>wait</span>  - compiling...</h2>
        <h2><span style={{ color: '#EF4A5B' }}>error</span> - ./404/page.not.found</h2>
        <h2><span style={{ color: '#E8A87C' }}>warn</span> - you want to <Link href="/" style={{ color: '#fff', textDecoration: 'underline' }}>go home</Link>?</h2>
        <span>▯</span>
      </section>

    </main>
  );
};

export default error;
