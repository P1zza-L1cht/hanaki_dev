import News from '../components/News';
import Youtube from '../components/Youtube';
import Twitter from '../components/Twitter';
import Merch from '../components/Merch';

export default function Main() {
  return (
    <div>
      {/* main visual */}
      <div className=''>
        <img
          src="/images/main_pc.png"
          alt="Top Visual"
        />
      </div>

      {/* News */}
      <News />

      {/* Youtebe */}
      <Youtube />

      {/* Twitter */}
      <Twitter />

      {/* Merchandise */}
      <Merch />

    </div>
  )
}
