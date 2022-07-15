import { doc, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { constSelector } from "recoil";
import { db } from "../../firebase";

export default function InfoPage() {
  const router = useRouter();
  const { id } = router.query;
  const [info, setInfo] = useState();
  const [dataInfo, setDataInfo] = useState({
    title: "",
    content: "",
  });

  useEffect(() =>
    onSnapshot(doc(db, "news", `${id}`), (snapshot) => setInfo(snapshot))
  ,[id])

  useEffect(() => {
    setDataInfo({title: info?._document.data.value.mapValue.fields.title, content: info?._document.data.value.mapValue.fields.content})
  }, [info])

  console.log(info?.data());
  console.log(info);
  console.log(info?._document.data.value.mapValue.fields);
  console.log(dataInfo);

  return (
    <div></div>
  )
}
