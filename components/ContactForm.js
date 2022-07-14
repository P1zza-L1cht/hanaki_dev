import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

export default function ContactForm() {
  const form = useRef();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [content, setContent] = useState({
    username: "",
    mail: "",
    title: "選択してください",
    message: "",
  });
  const [isTitle, setIsTitle] = useState(false);
  const [checkModal, setCheckModal] = useState(false);

  const sendMessage = () => {
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
      .then((result) => {
          console.log("送信成功");
      }, (error) => {
          console.log("送信失敗");
      });
  }

  const checker = () => {
    if(content.title == "選択してください") {
      setIsTitle(true);
      return;
    } else {
      setIsTitle(false);
      sendMessage();
      setCheckModal(true);
    }
  };

  return (
    <div className="h-[100vh]">
      {checkModal && (
        <div className="w-[80%] md:w-[50%] h-[300px] md:h-[500px] mx-auto flex flex-col justify-center items-center bg-sky-400 my-6">
          <h3 className="text-white font-bold text-2xl mb-10">お問い合わせ内容を送信しました。</h3>
          <div
            className="hoverEffect border border-white text-white hover:bg-sky-700"
            onClick={() => router.push("/")}
          >
            ホームへ戻る
          </div>
        </div>
      )}
      <div className={`flex flex-col w-[80%] md:w-[30%] mx-auto ${checkModal && "hidden"}`}>
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2">仕事の依頼、コラボの依頼等はこちら</p>
        </div>
        <form onSubmit={handleSubmit(checker)} ref={form}>
          <div className="mb-6 mt-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">名前</label>
            {errors.username && (
              <p className="text-red-600">名前がありません</p>
            )}
            <input
              {...register("username", {required: true})}
              onChange={(e) => setContent({...content, username: e.target.value})}
              value={content.name}
              name="username"
              className={`
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${errors.username && "border-red-500 text-red-900 placeholder-red-700"}`}
              />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">メールアドレス</label>
            {errors.mail && (
              <p className="text-red-600">メールアドレスがありません</p>
            )}
            <input
              {...register("mail", {required: true})}
              onChange={(e) => setContent({...content, mail: e.target.value})}
              value={content.mail}
              name="mail"
              type="email"
              className={`
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block w-full p-2.5 ${errors.mail && "border-red-500 text-red-900 placeholder-red-700"}`}
              placeholder="adress@sample.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="select" className="block mb-2 text-sm font-medium text-gray-900">問い合わせ内容</label>
            {isTitle && (
              <p className="text-red-600">内容を選択してください</p>
            )}
            <select
              name="title"
              value={content.title}
              onChange={(e) => setContent({...content, title: e.target.value})}
              className={`
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block w-full p-2.5 ${isTitle && "border-red-500 text-gray-900 placeholder-red-700"} `}
            >
              <option value="選択してください">選択してください</option>
              <option value="仕事の依頼（作曲等）">仕事の依頼{"(作曲等)"}</option>
              <option value="Vtuberコラボの依頼">Vtuberコラボの依頼</option>
              <option value="案件等の依頼">案件等の依頼</option>
              <option value="その他">その他</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">問い合わせ内容</label>
            {errors.message && (
              <p className="text-red-600">お問い合わせ内容がありません</p>
            )}
            <textarea
              {...register("message", {required: true})}
              type="text"
              rows="6"
              onChange={(e) => setContent({...content, message: e.target.value}) }
              value={content.message}
              name="message"
              className={`
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block w-full p-2.5 ${errors.message && "border-red-500 text-red-900 placeholder-red-700"}`} />
          </div>
          <button
            type="submit"
            className="
              text-white bg-blue-700
              hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium rounded-lg text-sm w-full
              sm:w-auto px-5 py-2.5 text-center"
          >
            送信
          </button>
        </form>
      </div>
    </div>
  )
}

