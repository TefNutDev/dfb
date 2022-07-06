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
        
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-233681715-1">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-233681715-1');
</script>
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
