import Layout from '../components/Layout';
import styles from '../styles/access.module.scss';
import util from '../styles/util.module.scss';

export default function Home() {
  return (
    <Layout
      pageDescription="2021年5月に行われる栄光祭の公式ホームページです"
      pageTitle="アクセス"
      pageUrl="access_"
      pageType="access"
    >
      <div className={util.container}>
        <div className={util.main}>
          <div className={util.section}>
            <h1 className={util.title}>ACCESS</h1>
            <section className={`${util.section} ${styles.way}`}>
              <h2>アクセス</h2>
              <ul>
                <li>🚶‍♂️徒歩：JR横須賀線・東海道線・京浜東北線 西口15分</li>
                <li>
                  🚍バス：大船駅西口ターミナル3番乗り場から「大船駅西口～清泉女学院循環系統【船35】」で10分「栄光学園前」で下車
                </li>
              </ul>
            </section>

            <figure className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.978795191583!2d139.51787065025636!3d35.35617255524212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60184ff05950d1f7%3A0xe6ab2a2c04d88a84!2sEikogakuenchugakukoto%20School!5e0!3m2!1sen!2sjp!4v1610095699171!5m2!1sen!2sjp"
                width="600"
                height="450"
                aria-hidden="false"
              ></iframe>
            </figure>

            <section className={`${util.section} ${styles.way}`}>
              <h2>注意事項</h2>
              <p>
                栄光坂は工事の影響で一方通行が行われています。地域住民に配慮した通行をよろしくお願いします。
              </p>
              <p>
                バスの詳細に関しては
                <a href="https://www.kanachu.co.jp/dia/news/detail?tbl=3&tid=659">
                  神奈中バスホームページ
                </a>
                をご確認ください。
              </p>
              <p>*お車での来航はご遠慮ください</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
