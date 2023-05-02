import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About UO Razor Scripts</title>
        <meta name="description" content="About UO Razor Scripts" />
        <link rel="icon" href="/favicon.ico" />
		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3223044608738585" crossOrigin="anonymous"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About UO Razor Scripts
        </h1>
        <h2 className={styles.title}>
            Select a server:  
            <a href="https://outlands.uorazorscripts.com/">UO Outlands</a> | 
            <a href="https://unchained.uorazorscripts.com/">UO Unchained</a> 
          </h2>
        <p className={styles.description}>
          We launched this website with the first brand being <a href="https://outlands.uorazorscripts.com/history">Outlands on January 30th 2022</a>, we launched our second server for <a href="https://unchained.uorazorscripts.com/history">UO Unchained May 1st 2023</a>.  
          If you want your server on our list, make sure to reach out to Jaseowns on Discord.
        </p>
      </main>

      <footer className={styles.footer}>
         UORazorScripts.com is provided by <code className={styles.code}><a href="https://uo.jaseowns.com/">Jaseowns</a></code> and aims to be a collaboration of UO Razor Scripts by the players for the players.{' '}
      </footer>
    </div>
  )
}
