import Head from 'next/head'
import styles from '../styles/Home.module.css'

import HeatMap from '../components/HeatMap'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Insta</title>
      </Head>

      <main className={styles.main}>
        <HeatMap/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
