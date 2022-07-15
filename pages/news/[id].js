import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function InfoPage() {
  const router = useRouter();
  const { id } = router.query;
  const [info, setInfo] = useState();
  const [dataInfo, setDataInfo] = useState({
    title: "",
    content: "",
  });
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {data: session} = useSession();

  useEffect(() =>
    onSnapshot(doc(db, "news", `${id}`), (snapshot) => setInfo(snapshot))
  ,[id])

  useEffect(() => {
    setDataInfo({
      title: info?._document.data.value.mapValue.fields.title.stringValue,
      content: info?._document.data.value.mapValue.fields.content.stringValue
    })
  }, [info])

  const updateInfo = () => {
    if(session.user.username === "油井陽輝") {
      updateDoc(doc(db, "news", `${id}`), {
        title: dataInfo.title,
        content: dataInfo.content
      })
    }
    router.push("/");
  };

  async function deleteInfo() {
    if(window.confirm('投稿を消去してもよろしいですか？')){
      deleteDoc(doc(db, "news", `${id}`))
      router.push("/");
    }
  }

  return (
    <>
    <Header />
    <div className="w-[80%] md:w-[50%] mx-auto min-h-[100vh]">
      <div className="font-bold text-2xl flex justify-center my-6">
        <h3>インフォメーション編集</h3>
      </div>
      <form onSubmit={ handleSubmit(updateInfo) }>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            タイトル
          </label>
          {errors.title && (
              <p className="text-red-600">タイトルがありません</p>
            )}
          <input
            {...register("title", {required: true})}
            type="text"
            onChange={(e) => setDataInfo({title: e.target.value})}
            value={dataInfo.title}
            className="
              bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
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
            onChange={(e) => setDataInfo({content: e.target.value})}
            value={dataInfo.content}
            className="
              bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block w-full p-2.5"
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
      <div
        onClick={deleteInfo}
        className="
          hoverEffect mt-6 w-[10%] flex justify-center items-center 
          border border-red-700 hover:bg-red-700 hover:text-white"
        >
        <FontAwesomeIcon icon={faTrashCan} className="mr-1" />
        削除
      </div>
    </div>
    <Footer />
    </>
  )
}
