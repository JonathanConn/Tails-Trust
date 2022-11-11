import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trust</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          TailsTrust
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Make your own trust</code>
        </p>

        <div className={styles.grid}>

          <Link href={{pathname: "/forms"}}>
            <h2 className={styles.card}> Basic </h2>
          </Link>
          <Link href={{pathname: "/forms", query: {formType: "revocable"}}}>
            <h2 className={styles.card}> Revocable</h2>
          </Link>
          <Link href={{pathname: "/forms", query: {formType: "tontine"}}}>
            <h2 className={styles.card}>Tontine</h2>
          </Link>

        </div>
      </main>
    </div>
  )
}