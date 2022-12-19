import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Share() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Donate</title>
        <meta name="description" content="Sharing a Script" />
        <link rel="icon" href="/favicon.ico" />
		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3223044608738585" crossOrigin="anonymous"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
			Showing Support / Donate
        </h1>
        <h2 className={styles.title}>Select a service:  <a href="https://www.patreon.com/jaseowns">Patreon</a> | <a href="https://www.youtube.com/@Jaseowns/membership">YouTube</a> | <a href="https://paypal.me/jaseowns">PayPal</a></h2>
        <p className={styles.description}>
          Thank you for showing your support.  Donations are not required but much appreciated.
        </p>
		<p className={styles.description}>
			<Link href="/">Back Home</Link>
        </p>
      </main>

      <footer className={styles.footer}>
         UORazorScripts.com is provided by <code className={styles.code}><a href="https://uo.jaseowns.com/">Jaseowns</a></code> and aims to be a collaboration of UO Razor Scripts by the players for the players.{' '}
      </footer>
    </div>
  )
}
