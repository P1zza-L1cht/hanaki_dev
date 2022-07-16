import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="w-full h-[135px] bg-pink-300 relative">
      <div className="flex flex-col items-center py-2 px-3">
        <h4 className="text-xl font-bold">Social Media</h4>
        <div className="h-[32px] w-full flex items-center justify-center pt-2">
          <a href="https://mobile.twitter.com/rin_vt32" className='text-blue-400 text-xl px-1'>
            <FontAwesomeIcon icon={faTwitter} className="fa-xl"/>
          </a>
          <a href="https://www.youtube.com/channel/UCLogCKK4LrSGyRirmfIBl1w" className='text-red-600 text-xl px-1'>
            <FontAwesomeIcon icon={faYoutube} className="fa-xl" />
          </a>
        </div>
        <p className='absolute bottom-2'>🄫Copyright All rights reserved by Hanaki Rin</p>
      </div>
    </footer>
  );
}
