import Head from 'next/head'
import styles from '../styles/Home.module.css'

import BasicForm from '../components/forms/basicForm'

import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
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

          <Link href={{pathname: "/forms", query: {formType: "basic"}}}>
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
