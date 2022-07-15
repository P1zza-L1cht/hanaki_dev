import { doc, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

export default function MerchPage() {
  const router = useRouter();
  const { id } = router.query;
  const [merch, setMerch] = useState();
  const [dataMerch, setDataMerch] = useState({
    title: "",
    content: "",
    site: "",
    iamgeUrl: "",
  });

  useEffect(() => 
    onSnapshot(doc(db, "merchandise", `${id}`), (snapshot) => setMerch(snapshot))
  ,[id]);

  useEffect(() => {
    setDataMerch({
      title: merch?._document.data.value.mapValue.fields.title.stringValue,
      content:merch?._document.data.value.mapValue.fields.content.stringValue
    })
  }, [merch])


  return (
    <div>MerchPage</div>
  )
}
