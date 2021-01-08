import Layout from '../components/Layout';
import { fesTheme } from '../components/Meta';
import styles from '../styles/Home.module.scss';
import util from '../styles/util.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function Home() {
  return (
    <Layout
      top
      pageDescription="2021年5月に行われる栄光祭の公式ホームページです"
      pageType="home"
    >
      <div className={util.container}>
        <div className={styles.top}>
          <div className={`${styles.back}`}>{}</div>
          <div className={`${styles.half}`}>
            <div>
              <h1 className={`${styles.theme}`}>{fesTheme}</h1>
              <ul className={`${styles.time}`}>
                <li>
                  <time>'20/05/12</time>
                </li>
                <li>
                  <time>'20/05/13</time>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={util.main}>
          <section className={styles.description}>
            <p>コロナウイルスの世界的感染拡大の中で行う初めての文化祭</p>
            <p>例え困難な状況の中でも最高のパフォーマンスを発揮する</p>
            <p>
              これまでに無い体験を全栄光生で作り上げる
              2021年栄光祭をお楽しみください！
            </p>
          </section>
          <section className={`${styles.Outline} ${util.section}`}>
            <h2 className={util.title}>Outline</h2>
            <div className={styles.days}>
              <div className={styles.day}>
                <h3>Day1</h3>
                <ul>
                  <li>5月12日</li>
                  <li>9:00~15:30</li>
                </ul>
              </div>
              <div className={styles.day}>
                <h3>Day2</h3>
                <ul>
                  <li>5月13日</li>
                  <li>9:00~16:00</li>
                </ul>
              </div>
            </div>
          </section>
          <section className={`${styles.news} ${util.section}`}>
            <h2 className={util.title}>News</h2>
            <ul className={styles.items}>
              <li className={styles.item}>
                <img
                  src="./images/blog.webp"
                  alt="ウェブサイト公開"
                  className={styles.image}
                />
                <div className={styles.meta}>
                  <h3>ウェブサイト公開</h3>
                  <p className={styles.type}>お知らせ</p>
                </div>
              </li>
              <li className={styles.item}>
                <img
                  src="./images/blog.webp"
                  alt="ウェブサイト公開"
                  className={styles.image}
                />
                <div className={styles.meta}>
                  <h3>ウェブサイト公開</h3>
                  <p className={styles.type}>お知らせ</p>
                </div>
              </li>
              <li className={styles.item}>
                <img
                  src="./images/blog.webp"
                  alt="ウェブサイト公開"
                  className={styles.image}
                />
                <div className={styles.meta}>
                  <h3>ウェブサイト公開</h3>
                  <p className={styles.type}>お知らせ</p>
                </div>
              </li>
            </ul>
          </section>
          <section className={`${util.section} ${styles.messages}`}>
            <h2 className={util.title}>Messages</h2>
            <div className={styles.messages_flex}>
              <div className={styles.message}>
                <p>
                  全ての栄光生がそれぞれの色に、輝くことができる、そんな栄光祭にむけて準備を進めてきました。
                </p>
                <p>
                  例年とは違った形ですが、例年と違うからこそ、新しい楽しみ方を感じて頂ければ幸いです。
                </p>
              </div>
              <div className={styles.message}>
                <p>
                  全ての栄光生がそれぞれの色に、輝くことができる、そんな栄光祭にむけて準備を進めてきました。
                </p>
                <p>
                  例年とは違った形ですが、例年と違うからこそ、新しい楽しみ方を感じて頂ければ幸いです。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
