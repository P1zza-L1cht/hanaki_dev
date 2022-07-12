import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

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
      <About />
      <Footer />
    </div>
  )
}
