import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function News() {
  return (
    <div className="h-[500px] lg:h-[800px] w-full bg-emerald-200 px-3 py-2">
      <div className="flex items-center justify-center my-2">
        <h2 className="text-2xl font-bold">
          Information
          <FontAwesomeIcon icon={faCircleInfo} className="text-emerald-600 px-2"/>
        </h2>
      </div>
      <div className="w-full h-full overflow-y-auto">

        {/* info card */}
        <div className="flex mt-4">
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
                title
              </h3>
              <p className="text-sm font-semibold">2022-07-02</p>
            </div>
            <div className="">
              <p>花木リンデビューしました。</p>
            </div>
          </div>
        </div>

        {/* info card */}
        <div className="flex mt-4">
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
                title
              </h3>
              <p className="text-sm font-semibold">2022-07-02</p>
            </div>
            <div className="">
              <p>歌ってみたをアップロードしました</p>
            </div>
          </div>
        </div>
        {/* info card */}
        <div className="flex mt-4">
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
                title
              </h3>
              <p className="text-sm font-semibold">2022-07-02</p>
            </div>
            <div className="">
              <p>contents text contents text contents text contents text contents text contents text contents text</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
