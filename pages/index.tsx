import Head from 'next/head'
import styles from '../styles/Home.module.css'

import HeatMap from '../components/HeatMap'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Insta</title>
        <a href="https://metrika.yandex.com/stat/?id=72603163&amp;from=informer"
           target="_blank" rel="nofollow" style={{ position: 'absolute' }}>
          <img src="https://informer.yandex.ru/informer/72603163/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
               style={{ width:88, height:31, border:0,}}
               alt="Яндекс.Метрика"
               title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
               className="ym-advanced-informer"
               data-cid="72603163"
               data-lang="ru" />
        </a>

        <script src="/static/yandexmetrika.js" type="text/javascript"></script>
        <noscript><div><img src="https://mc.yandex.ru/watch/72603163" style={{position:'absolute', left:'-9999px',}} alt="" /></div></noscript>
      </Head>

      <main className={styles.main}>
        <HeatMap/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
