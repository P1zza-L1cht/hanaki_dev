import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";


export default function News() {
  const [news, setNews] = useState([]);
  const {data: session} = useSession();
  const router = useRouter();

  useEffect(() => onSnapshot(
    query(collection(db, "news"), orderBy("timestamp", "desc")),
    (snapshot) => {
      setNews(snapshot.docs);
    }
  ), []);

  async function deleteInfo(info) {
    if(window.confirm('投稿を消去してもよろしいですか？')){
      deleteDoc(doc(db, "news", info.id))
      router.push("/");
    }
  }

  return (
    <div className="h-[500px] lg:h-[800px] w-full bg-emerald-200 px-3 py-2">
      <div className="flex items-center justify-center my-2">
        <h2 className="text-2xl font-bold">
          Information
        </h2>
        <FontAwesomeIcon icon={faCircleInfo} className="text-emerald-600 px-2"/>
      </div>
      <div className="w-full h-full overflow-y-auto">

        {/* info card */}
        {news.map((info) => (
          <div className="flex mt-4" key={info.id}>
            <div className="h-16 w-16 rounded-full ml-2 bg-green-400">
              <img src="/images/hanaki_def.png" alt="花木リン キャラ" />
            </div>
            <div className="w-[80%] h-auto px-3 py-2 bg-white rounded-[10px] ml-6 relative ">
            {/* talk bubble */}
            <div
              className="
                absolute w-0 h-0
                border-t-[13px] border-t-transparent
                border-b-[13px] border-b-transparent
                border-r-[18px] border-r-white
                right-[100%] top-[30%]"
            />
              <div className="flex items-baseline">
                <h3 className="text-lg font-semibold mr-3">
                  {info?.data()?.title}
                </h3>
                <Moment format="YYYY/MM/DD" className="text-sm font-semibold">{info?.data()?.timestamp?.toDate()}</Moment>
              </div>
              <div className="">
                <p>{info?.data()?.content}</p>
              </div>
              {session?.user.uid === info?.data().id && (
                <div className='flex ml-3 my-3'>
                  <div
                  className="mr-3 cursor-pointer text-green-500 py-1 px-4 rounded-lg hover:bg-green-500 hover:text-white" onClick={() => router.push(`/news/${info.id}`)}><FontAwesomeIcon icon={faPenToSquare} />編集</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
