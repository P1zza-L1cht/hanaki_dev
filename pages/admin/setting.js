import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InformationForm from "../../components/InformationForm";
import MerchandiseForm from "../../components/MerchandiseForm";
import { useState } from 'react';

export default function setting() {
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
        {formSelect && (
          <div className="w-full lg:w-[50%] md:mx-auto">
            <InformationForm />
          </div>
        )}
        {!formSelect && (
          <div className="w-full lg:w-[50%] md:mx-auto">
            <MerchandiseForm />
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
