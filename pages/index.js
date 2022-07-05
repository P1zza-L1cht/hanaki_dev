import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import News from '../components/News';
import Youtube from '../components/Youtube';
import Twitter from '../components/Twitter';
import Merch from '../components/Merch';


export default function Home() {
  return (
    <div className='w-full'>
      <Head>
        <meta charSet='utf-8' />
        <title>Hanaki Official website</title>
        <meta
          name="description"
          content="Vtuber,Vsinger 花木リンのオフィシャルサイトになります。普段から情報を発信しています。"
        />
        <meta
          name="robots"
          content="noindex, nofollow"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        {/* News */}
        <News />

        {/* YouTube channels */}
        <Youtube />

        {/* Twitter */}
        <Twitter />

        {/* Merch */}
        <Merch />
      </main>
      <Footer />
    </div>
  )
}
