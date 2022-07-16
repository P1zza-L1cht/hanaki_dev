import { deleteDoc, doc } from "firebase/firestore";
import Router, { useRouter } from "next/router"
import { db } from "../../../firebase";

export default function DeleteInfo() {
  const router = useRouter();
  const {id} = router.query;

  console.log(id);

  async function deleteData() {
    if(window.confirm('投稿を消去してもよろしいですか？')){
      deleteDoc(doc(db, "news", id))
      router.push("/");
    }
  }

  return (
    <div className="w-[80%] md:w-[50%] mx-auto flex flex-col my-20 items-center">
      <h2 className="text-2xl font-bold">データを削除しますか？</h2>
      <div className="mt-6">
        <button onClick={() => Router.push("/")} className="hoverEffect bg-green-200 hover:bg-green-500 hover:text-white mx-4 px-3">ホームへ戻る</button>
        <button onClick={deleteData} className="hoverEffect bg-red-200 hover:bg-red-500 hover:text-white mx-4 px-3">削除します</button>
      </div>
    </div>
  )
}
