export default function ContactForm() {
  return (
    <div className="h-[100vh]">
      <div className="flex flex-col w-[80%] md:w-[30%] mx-auto">
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2">仕事の依頼、コラボの依頼等はこちら</p>
        </div>
        <form>
          <div className="mb-6 mt-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">名前</label>
            <input
              className="
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">メールアドレス</label>
            <input
              type="email"
              className="
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block w-full p-2.5 "
              placeholder="adress@sample.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="select" className="block mb-2 text-sm font-medium text-gray-900">問い合わせ内容</label>
            <select
              name="workContent"
              className="
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block w-full p-2.5 "
            >
              <option value="">選択してください</option>
              <option value="">仕事の依頼{"(作曲等)"}</option>
              <option value="">Vtuberコラボの依頼</option>
              <option value="">案件等の依頼</option>
              <option value="">その他</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">内容</label>
            <textarea
              type="text"
              rows="6"
              className="
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5" />
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

