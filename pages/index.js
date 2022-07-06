import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>DF Building Services</title>
        <meta name="description" content="Highly skilled Builder, +30 years of experience, no job too big or too small!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="QAzgWW-CBbX21AcELussICXPhiEcVpfhO1KUP61wdnk" />
      </Head>
        <Navbar />
        <Main />
        <About />
        <Services />
        <Gallery />
        <Contact />
    </div>
  )
}
