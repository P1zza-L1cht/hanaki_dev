import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoFilm, faParachuteBox } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useState, useRef } from 'react';
import { db, storage } from "../firebase";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, uploadString, ref } from 'firebase/storage';
import { useSession } from "next-auth/react";


export default function MerchandiseForm() {
  const {data: session} = useSession();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);

  const sendData = async () => {
    if(loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "merchandise"), {
      id: session.user.uid,
      title: title,
      content: content,
      site: siteUrl,
      timestamp: serverTimestamp(),
      username: session.user.username,
    });

    const imageRef = ref(storage, `merchandise/${docRef.id}/image`);
    if(photoFile){
      await uploadString(imageRef, photoFile, "data_url").then(async()=>{
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "merchandise", docRef.id), {
          image: downloadURL,
        })
      })
    }

    setTitle("");
    setContent("");
    setSiteUrl("");
    setPhotoFile(null);
    setLoading(false);
  };

  const addImageChecker = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setPhotoFile(readerEvent.target.result);
    };
  };

  return (
    <div className="flex flex-col">
      <div className='flex items-center mb-6'>
        <h2 className="text-2xl font-bold">商品・CD</h2>
        <FontAwesomeIcon icon={faParachuteBox} className="text-2xl text-blue-600 font-bold pl-2"/>
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
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            サイトURL
          </label>
          <input
            type="text"
            onChange={(e) => setSiteUrl(e.target.value)}
            value={siteUrl}
            className="
              bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="URL"
          />
        </div>
        <div className="mb-6" onClick={() => filePickerRef.current.click()}>
          <FontAwesomeIcon icon={faPhotoFilm} className="h-10 w-10 hoverEffect p-2 text-blue-600 hover:bg-blue-100"/>
          <input
            type="file"
            hidden
            ref={filePickerRef}
            onChange={addImageChecker}
          />
        </div>
        {photoFile && (
          <div className="relative my-6">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="absolute top-1 left-1 cursor-pointer text-white"
              onClick={() => setPhotoFile(null)}
            />
            <img src={photoFile} alt="" />
          </div>
        )}
        <button
          type="button"
          onClick={ sendData }
          disabled={!title.trim() && !content.trim() && !siteUrl.trim()}
          className="
          text-white bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            送信
        </button>
      </form>
    </div>
  )
}
