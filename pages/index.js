import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function Home({movieLists}) {
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
      <Main movieLists={movieLists} />
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const movieLists = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL8ZgeeHTO61CDsP5_Pe3qJxsxTgtZLczc&maxResults=20&key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`
  ).then((res) => res.json());

  return{
    props: {
      movieLists,
    },
  };
}

