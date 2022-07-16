import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { db } from "../../firebase";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

export default function MerchPage() {
  const {data: session} = useSession();
  const router = useRouter();
  const { id } = router.query;
  const [merch, setMerch] = useState();
  const [dataMerch, setDataMerch] = useState({
    title: "",
    content: "",
    site: "",
    iamge: "",
  });
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() =>
    onSnapshot(doc(db, "merchandises", `${id}`), (snapshot) => setMerch(snapshot))
  ,[id]);

  useEffect(() => {
    setDataMerch({
      title: merch?._document.data.value.mapValue.fields.title.stringValue,
      content: merch?._document.data.value.mapValue.fields.content.stringValue,
      site: merch?._document.data.value.mapValue.fields.site.stringValue,
    })
  }, [merch])

  const updateMerch = () => {
    if(session.user.username === "油井陽輝") {
      updateDoc(doc(db, "merchandises", `${id}`), {
        title: dataMerch.title,
        content: dataMerch.content,
        site: dataMerch.site,
        id: session.user.uid
      })
    }
    router.push("/");
  };

  return (
    <>
    <Header />
    <div className="w-[80%] md:w-[50%] mx-auto min-h-[100vh]">
      <div className="my-4 font-bold text-2xl flex justify-center">
        <h3>商品・CD編集</h3>
      </div>
      <form onSubmit={handleSubmit(updateMerch)}>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          タイトル
        </label>
        {errors.title && (
              <p className="text-red-600">タイトルを入れてください</p>
            )}
        <input
          {...register("title", {required: true})}
          type="text"
          onChange={(e) => setDataMerch({...dataMerch, title: e.target.value})}
          value={dataMerch.title}
          className="
            bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-6"
        />
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            内容
          </label>
          {errors.content && (
              <p className="text-red-600">内容を入れてください</p>
            )}
          <textarea
            {...register("content", {required: true})}
            type="textarea"
            rows="4"
            onChange={(e) => setDataMerch({...dataMerch, content: e.target.value})}
            value={dataMerch.content}
            className="
              bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block w-full p-2.5"
            />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            サイトURL
          </label>
          {errors.site && (
              <p className="text-red-600">サイトURLを入れてください</p>
            )}
          <input
            {...register("site", {required: true})}
            type="text"
            onChange={(e) => setDataMerch({...dataMerch, site: e.target.value})}
            value={dataMerch.site}
            className="
              bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="URL"
          />
        </div>
        <button
          type="submit"
          className="
          text-white bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
             font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            送信
        </button>
      </form>
    </div>
    <Footer />
    </>
  )
}
