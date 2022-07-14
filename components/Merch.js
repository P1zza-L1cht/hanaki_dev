import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';
import { useRouter } from 'next/router';


export default function Merch() {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => onSnapshot(
    query(collection(db, "merchandises"), orderBy("timestamp", "desc")),
    (snapshot) => {
      setItems(snapshot.docs);
    }
  ), []);

  return (
    <div className="h-[500px] lg:h-[800px] w-full bg-rose-200 px-3 py-2">
      <div className="flex items-center justify-center my-2">
        <h2 className="text-2xl font-bold">
          Merch/CDs
        </h2>
        <FontAwesomeIcon icon={faCompactDisc} className="text-black px-2" />
      </div>
      <div className="w-full h-[90%] overflow-y-auto mt-3 flex flex-row flex-wrap justify-center">
      {items.map((item) => (
        <div
          className="w-[30%] h-[40%] bg-rose-100 p-2 rounded-lg mx-3 my-3 text-center"
          key={item.id}
        >
          <div onClick={() => router.push(`${item?.data()?.site}`)} className="flex justify-center mt-6 max-w-[90%] max-h-[70%] cursor-pointer object-contain mx-auto">
            {item.data().image && (
              <img src={item?.data()?.image} alt="Merchandise image" width="60%" height="60%" />
            )}
            {!item.data().image && (
              <img src="/images/noImage.png" alt="Merchandise image" width="60%" height="60%" />
            )}
          </div>
          <div className="flex mt-3 items-center w-[100%]">
            <a href={item?.data()?.site} className="ml-6 underline text-blue-900">{item?.data()?.title}</a>
            <Moment format="YYYY/MM/DD" className='ml-auto mr-6'>{item?.data()?.timestamp?.toDate()}</Moment>
          </div>
          <div>
            <p>{item?.data()?.content}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
