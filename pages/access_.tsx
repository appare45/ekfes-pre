import Layout from '../components/Layout';
import styles from '../styles/access.module.scss';
import util from '../styles/util.module.scss';

export default function Home() {
  return (
    <Layout
      pageDescription="2021年X月に行われるXX祭の公式ホームページです"
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
                <li>🚶‍♂️徒歩：JR XX線・XX線・XXX線 出口15分</li>
                <li>
                  🚍バス：XX駅ターミナルC乗り場から「XX駅～XX循環系統」で10分「XX前」で下車
                </li>
              </ul>
            </section>

            <figure className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4583.283383876721!2d139.7639432048173!3d35.68018412365903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sjp!4v1610714719998!5m2!1sen!2sjp"
                width="600"
                height="450"
                aria-hidden="false"
              ></iframe>
            </figure>

            <section className={`${util.section} ${styles.way}`}>
              <h2>注意事項</h2>
              <p>
                工事の影響で一方通行が行われています。地域住民に配慮した通行をよろしくお願いします。
              </p>
              <p>
                バスの詳細に関しては
                <a href="">バスホームページ</a>
                をご確認ください。
              </p>
              <p>*お車での来校はご遠慮ください</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
