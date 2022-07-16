import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";

export default function InformationForm() {
  const {data: session} = useSession();
  const [ title, setTitle ] = useState("");
  const [ content, setContent ] = useState("");
  const [loading, setLoading] = useState(false);

  const sendPost = async () => {
    if(loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "news"), {
      id: session.user.uid,
      title: title,
      content: content,
      timestamp: serverTimestamp(),
      username: session.user.username,
    });

    setTitle("");
    setContent("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col ">
      {session.user.username === "油井陽輝" && (
      <>
        <div className='flex items-center mb-6'>
          <h2 className="text-2xl font-bold">インフォメーション</h2>
          <FontAwesomeIcon icon={faCircleInfo} className="text-2xl text-blue-600 font-bold pl-2"/>
        </div>
        <form>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              タイトル
            </label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
            <textarea
              type="textarea"
              rows="4"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              className="
                bg-gray-50 border border-gray-300
                text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block w-full p-2.5"
              />
          </div>
          <button
            type="button"
            onClick={ sendPost }
            disabled={!title.trim() && !content.trim()}
            className="
            text-white bg-blue-700 hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              送信
          </button>
        </form>
        </>
      )}
    </div>
  )
}
