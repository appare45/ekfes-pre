import Head from 'next/head';

export const globalTitle: string = '2021年 XX祭（仮）';
export const fesTheme: string = 'Highlight'; // 文化祭テーマ
export const pre: boolean = true; // 公開モード
export const globalIcon: string = '/images/icon.png';
export const fes_theme = 'highlight';
export function PageHeading({
  pageTitle,
  pageOgp,
  pageDescription,
  pageUrl,
  top,
}: {
  pageTitle?: string;
  pageOgp?: string;
  pageDescription: string;
  pageUrl?: string;
  top?: boolean;
}) {
  return (
    <>
      <Head>
        <title>{top ? `${globalTitle} ~${fes_theme}~` : pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {pre && <meta name="robots" content="noindex, nofollow" />}
        <meta property="og:title" content={`${globalTitle} ~${fes_theme}~`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:site_name" content={globalTitle} />
        <meta property="og:locale" content="ja_JP" />
        <meta name="msapplication-TileImage" content={globalIcon} />
      </Head>
    </>
  );
}
