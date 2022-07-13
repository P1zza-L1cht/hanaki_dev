import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [content, setContent] = useState({
    username: "",
    mail: "",
    title: "選択してください",
    message: "",
  });
  const [isTitle, setIsTitle] = useState(false);
  const [checkModal, setCheckModal] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);

  const checker = () => {
    if(content.title == "選択してください") {
      setIsTitle(true);
      return;
    } else {
      setIsTitle(false);
      setCheckModal(true);
    }
  };

  const sendMessage = () => {
    emailjs.sendForm("service_5dz3wom", "template_ali2i45", {
      title: content.title,
      mail: content.mail,
      username: content.username,
      message: content.message,
    }, "rlbsI8nQFjwLsoM0c")
      .then((result) => {
          console.log("送信成功");
      }, (error) => {
          console.log("送信失敗");
      });
  }

  return (
    <div className="h-[100vh]">
      {checkModal && (
        <div className="flex flex-col items-center w-[80%] md:w-[50%] mx-auto mt-6 bg-pink-100 p-6">
          <h3 className="text-2xl font-bold">内容確認</h3>
          <h4 className="mt-3 text-md">この内容で送信してよろしいですか。</h4>
          <div className="mt-3 md:text-lg w-[100%] flex flex-col items-start">
            <p className="mt-3">名前:{content.username}</p>
            <p className="mt-3">メールアドレス:{content.mail}</p>
            <p className="mt-3">件名:{content.title}</p>
            <p className="mt-3">内容:</p>
            <div className="ml-6 min-h-[150px]">{content.message}</div>
          </div>
          <div className="flex">
            <div className="px-12 mx-3 bg-white hoverEffect hover:bg-sky-500" onClick={() => sendMessage }>送信</div>
            <div className="px-12 mx-3 bg-white hoverEffect" onClick={() => setCheckModal(false)}>戻る</div>
          </div>
        </div>
      )}
      <div className={`flex flex-col w-[80%] md:w-[30%] mx-auto ${checkModal && "hidden"}`}>
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2">仕事の依頼、コラボの依頼等はこちら</p>
        </div>
        <form onSubmit={handleSubmit(checker)}>
          <div className="mb-6 mt-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">名前</label>
            {errors.username && (
              <p className="text-red-600">名前がありません</p>
            )}
            <input
              {...register("username", {required: true})}
              onChange={(e) => setContent({...content, username: e.target.value})}
              value={content.name}
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
            確認
          </button>
        </form>
      </div>
    </div>
  )
}

