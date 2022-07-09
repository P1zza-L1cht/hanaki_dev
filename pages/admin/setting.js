import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InformationForm from "../../components/InformationForm";
import MerchandiseForm from "../../components/MerchandiseForm";
import { useState } from 'react';
import { getProviders, useSession, signIn } from "next-auth/react";

export default function setting({providers}) {
  const {data: session} = useSession();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formSelect, setFormSelect] = useState(true);

  return (
    <div className='w-full'>
      <Head>
        <meta charSet='utf-8'/>
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
      <div className="w-[80%] min-h-[100vh] mx-auto my-6">
        {!session && (
          <>
            <div className="flex justify-center w-[50%] mx-auto">
              <h2 className="font-bold text-2xl">ログイン</h2>
            </div>
            <div className="w-[80%] min-h-[100vh] mx-auto my-6">
              <div className="w-full lg:w-[50%] md:mx-auto ">
                {Object.values(providers).map((provider) => (
                  <div key={provider.name} className="flex flex-col items-center">
                    <button
                      onClick={()=> signIn(provider.id, {callbackUrl: "/admin/setting"})}
                      className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
                    >
                      Sign in with {provider.name}
                  </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {session && (
          <>
            <div className='flex items-center mb-16'>
              <div
                className={`hoverEffect mr-2 ${formSelect && "bg-pink-300 text-white"}`}
                onClick={() => setFormSelect(true)}
              >
                インフォメーション登録
              </div>
              <div
                className={`hoverEffect mr-2 ${!formSelect && "bg-pink-300 text-white"}`}
                onClick={() => setFormSelect(false)}
              >
                商品・CD登録
              </div>
            </div>
            <div className="w-[80%] min-h-[100vh] mx-auto my-6">
              <div className={`w-full lg:w-[50%] md:mx-auto ${!formSelect && "hidden"}`}>
                <InformationForm />
              </div>
              <div className={`w-full lg:w-[50%] md:mx-auto ${formSelect && "hidden"}`}>
                <MerchandiseForm />
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  }
}
