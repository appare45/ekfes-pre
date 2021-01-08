import Head from 'next/head';
import Link from 'next/link';
import styles from './../styles/layout.module.scss';
import Menu from './Menu';
import { pageType } from './../types';

export const globalTitle: string = '2021年 栄光祭（仮）';
export const fesTheme: string = 'Highlight'; // 文化祭テーマ
export const pre: boolean = true; // 公開モード
export const domain: string = 'eikofes.com';
export const globalIcon: string = '/images/icon.png';
export const fes_theme = 'highlight';

export default function Layout({
  children,
  pageTitle,
  pageOgp,
  pageDescription,
  pageUrl,
  top,
  pageType,
}: {
  readonly children: JSX.Element;
  readonly pageTitle?: string;
  readonly pageOgp?: string;
  readonly pageDescription: string;
  readonly pageUrl?: string;
  readonly top?: boolean;
  readonly pageType?: pageType;
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{top ? globalTitle : `${pageTitle} | 2021年栄光祭`}</title>
        <meta name="description" content={pageDescription} />
        {pre && <meta name="robots" content="noindex, nofollow" />}
        <meta property="og:url" content={`https://${domain}/${pageOgp}`} />
        <meta property="og:title" content={`${globalTitle} ~${fes_theme}~`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`https://${domain}/${pageUrl}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@EikoFestival" />
        <meta property="og:site_name" content={globalTitle} />
        <meta property="og:locale" content="ja_JP" />
        <meta name="msapplication-TileImage" content={globalIcon} />
      </Head>

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <a className={styles.credit} href="https://ekh.jp/foruse/index.html">
          サイトご利用に当たって
        </a>

        <br />
        <small>&copy; 2021 Eiko Festival Committee</small>
      </footer>
      <Menu pageTitle={pageType} />
    </>
  );
}
