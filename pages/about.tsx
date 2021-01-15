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
      <p lang="en" dir="ltr">
        the bar is low, 2021
      </p>
      &mdash; Twitter (@Twitter){' '}
      <a href="https://twitter.com/Twitter/status/1345021162959503360?ref_src=twsrc%5Etfw">
        January 1, 2021
      </a>
    </blockquote>
  );
};

export default function Home() {
  return (
    <Layout
      pageDescription="2021年X月に行われるXX祭の公式ホームページです"
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
              src="https://www.youtube-nocookie.com/embed/aGtK8GJfH5Q"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className={util.embed}
            ></iframe>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FfacebookappJapan%2Fposts%2F10158471235474024"
              className={util.embed}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            <Twemb />
          </div>
        </div>
      </div>
    </Layout>
  );
}
