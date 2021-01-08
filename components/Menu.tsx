import React, { useState } from 'react';
import styles from './../styles/Menu.module.scss';
import Link from 'next/link';
import { pageType } from '../types';

export default function Menu({ pageTitle }: { readonly pageTitle?: pageType }) {
  const [menuIsOpen, changeMenuIsOpen] = useState<boolean>(true);
  return (
    <>
      <nav className={`${styles.navigation} ${!menuIsOpen && styles.open}`}>
        <ul className={styles.social}>
          <li>
            <a href="https://twitter.com/EikoFestival">Tw</a>
          </li>
          <li>
            <a href="https://www.facebook.com/eiko.fes">Fb</a>
          </li>
        </ul>
        <ul className={styles.pages}>
          <li className={pageTitle == 'home' && styles.page}>
            <Link href="./">
              <a>HOME</a>
            </Link>
          </li>
          <li className={pageTitle == 'events' && styles.page}>
            <Link href="./events">
              <a>EVENTS</a>
            </Link>
          </li>
          <li className={pageTitle == 'access' && styles.page}>
            <Link href="./access_">
              <a>ACCESS</a>
            </Link>
          </li>
          <li className={pageTitle == 'about' && styles.page}>
            <Link href="./about">
              <a>ABOUT</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className={styles.menu}
        onClick={() => changeMenuIsOpen(!menuIsOpen)}
      >
        <div className={styles.hamburger}></div>
        <p>{menuIsOpen ? 'MENU' : 'CLOSE'}</p>
      </button>
    </>
  );
}
