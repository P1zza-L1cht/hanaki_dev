import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';


export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => onSnapshot(
    query(collection(db, "news"), orderBy("timestamp", "desc")),
    (snapshot) => {
      setNews(snapshot.docs);
    }
  ), []);

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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
