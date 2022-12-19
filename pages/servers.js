import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Servers() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Server List</title>
        <meta name="description" content="Server List" />
        <link rel="icon" href="/favicon.ico" />
		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3223044608738585" crossOrigin="anonymous"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Server List
        </h1>
        <h2 className={styles.title}>Select a server:  <a href="https://outlands.uorazorscripts.com">UO Outlands</a></h2>
        <p className={styles.description}>
        At the time of this launch, right now the only server supported is Outlands but the idea will be to have a seperate database for each server.
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
