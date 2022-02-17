import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Share() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sharing a Script</title>
        <meta name="description" content="Sharing a Script" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sharing a Script
        </h1>
        <h2 className={styles.title}>Select a server:  <a href="https://outlands.uorazorscripts.com/script/new">UO Outlands</a></h2>
        <p className={styles.description}>
          At the time of this launch, right now the only server supported is Outlands.
        </p>
      </main>

      <footer className={styles.footer}>
         UORazorScripts.com is provided by <code className={styles.code}><a href="https://uo.jaseowns.com/">Jaseowns</a></code> and aims to be a collaboration of UO Razor Scripts by the players for the players.{' '}
      </footer>
    </div>
  )
}
