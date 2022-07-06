import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

export default function Merch() {
  return (
    <div className="h-[500px] lg:h-[800px] w-full bg-rose-200 px-3 py-2">
      <div className="flex items-center justify-center my-2">
        <h2 className="text-2xl font-bold">
          Merch/CDs
        </h2>
        <FontAwesomeIcon icon={faCompactDisc} className="text-black px-2" />
      </div>
      <div className="w-full h-[90%] overflow-y-auto mt-3 flex flex-row flex-wrap ">

        {/* merch card */}
        <div className="flex flex-col items-center w-[30%] h-[30%] bg-rose-100 p-2 rounded-lg">
          <div className="flex items-center justify-center">
            <img src="/images/hanaki_def.png" alt="Merchandise image" width="60%" height="60%" />
          </div>
          <div className="flex">
            <h3>Title</h3>
            <p>date</p>
          </div>
          <div className="">
            <p>content text</p>
          </div>
        </div>
      </div>
    </div>
  )
}
