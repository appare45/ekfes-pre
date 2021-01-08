import Layout from '../components/Layout';
import React from 'react';
import styles from '../styles/access.module.scss';
import util from '../styles/util.module.scss';

let isLoadwidgets = false;
export const Twemb = () => {
  React.useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement('script');
      s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);
  return (
    <blockquote className="twitter-tweet">
      <p lang="ja" dir="ltr">
        5月11日、12日に開催する第72回栄光祭の公式アカウントです。 <br />
        今年もTwitterを使い、準備の様子やHPの更新など、今どうなってるかをみなさんにお知らせします！{' '}
        <br />
        栄光祭まであと57日です！これからよろしくお願いいたします！
      </p>
      &mdash; 第72回栄光祭@5.11-12 (@EikoFestival){' '}
      <a href="https://twitter.com/EikoFestival/status/1106539569820766213?ref_src=twsrc%5Etfw">
        March 15, 2019
      </a>
    </blockquote>
  );
};

export default function Home() {
  return (
    <Layout
      pageDescription="2021年5月に行われる栄光祭の公式ホームページです"
      pageTitle="アクセス"
      pageUrl="about"
      pageType="about"
    >
      <div className={util.container}>
        <div className={util.main}>
          <div className={util.section}>
            <h1 className={util.title}>ABOUT</h1>
            <iframe
              height="360"
              src="https://www.youtube-nocookie.com/embed/0Zn-5SLSoFM"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className={util.embed}
            ></iframe>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Feikogakuen%2Fposts%2F1780587705448508&width=600&show_text=false&height=800&appId"
              className={util.embed}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf-xwpXr0gpTCBWuFVFcXYPTW71aKvG3dm50QEan2ekegoTrQ/viewform?embedded=true"
              className={util.embed}
            >
              読み込んでいます…
            </iframe>
            <Twemb />
          </div>
        </div>
      </div>
    </Layout>
  );
}
