import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UO Razor Scripts</title>
        <meta name="description" content="The purpose of this site is to have one spot for players to share their UO Razor Scripts with each other." />
        <link rel="icon" href="/favicon.ico" />
		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3223044608738585" crossOrigin="anonymous"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/about">Ultima Online Razor Scripts!</Link>
        </h1>
        <h2 className={styles.title}>
        Select a server:  <a href="https://outlands.uorazorscripts.com/">UO Outlands</a> | <a href="https://unchained.uorazorscripts.com/">UO Unchained</a> 
          </h2>
        <p className={styles.description}>
        The purpose of this site is to have one spot for players to share their UO Razor Scripts with each other.
        </p>
        <div className={styles.grid}>
          <Link href="/servers" passHref>
            <div className={styles.card}>
            <h2>Browse by Server &rarr;</h2>
            <p>Since each server has the potential of a different syntax or style, select the server you play.</p>
            </div>
          </Link>

          <Link href="/share" passHref>
            <div className={styles.card}>
            <h2>Share &rarr;</h2>
            <p>Got something working that you would like to share? Add it directly to the site and help others</p>
            </div>
          </Link>

          <Link href="/donate" passHref>
            <div className={styles.card}>
            <h2>Donate &rarr;</h2>
            <p>Want to help support this project? Donate to the creator to help keep the site running</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
         UORazorScripts.com is provided by <code className={styles.code}><a href="https://uo.jaseowns.com/">Jaseowns</a></code> and aims to be a collaboration of UO Razor Scripts by the players for the players.{' '}
      </footer>
    </div>
  )
}
