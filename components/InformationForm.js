import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoFilm, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function InformationForm() {
  return (
    <div className="flex flex-col ">
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
            className="
              bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="タイトル"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            内容
          </label>
          <textarea
            type="textarea"
            className="
              bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block w-full p-2.5"
            />
        </div>
        <div className="mb-6">
          <FontAwesomeIcon icon={faPhotoFilm} className="h-10 w-10 hoverEffect p-2 text-blue-600 hover:bg-blue-100"/>
          <input
            type="file"
            hidden
          />
        </div>
        <button
          type="submit"
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
