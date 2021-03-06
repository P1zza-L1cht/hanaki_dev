import News from '../components/News';
import Youtube from '../components/Youtube';
import Twitter from '../components/Twitter';
import Merch from '../components/Merch';
import Image from 'next/image';

export default function Main({movieLists}) {

  return (
    <div>
      {/* main visual */}
      <div className='w-full relative'>
        <Image
          src="/main_pc.png"
          alt="Top Visual"
          width={1800}
          height={1000}
        />
      </div>

      <div className='sm:grid grid-cols-2 grid-rows-3 py-3 mx-4 mt-4 gap-4'>
        <div className='col-start-1 col-end-2 row-start-1 row-end-3'>
          {/* News */}
          <News />
        </div>
        <div className='col-start-2 col-end-3 row-start-2 row-end-4 mt-4'>
          {/* Youtebe */}
          <Youtube movieLists={movieLists}/>
        </div>
      </div>
      <div className='sm:grid grid-cols-2 grid-rows-3 py-3 mx-4 md:mt-[100px] mb-4 gap-4'>
        <div className='col-start-1 col-end-2 row-start-1 row-end-3'>
          {/* Marchandise */}
          <Merch />
        </div>
        <div className='col-start-2 col-end-3 row-start-2 row-end-4 mt-4'>
          {/* Twitter */}
          <Twitter />
        </div>
      </div>
    </div>
  )
}
