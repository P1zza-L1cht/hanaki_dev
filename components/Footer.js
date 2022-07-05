import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="w-full h-[150px] bg-red-300">
      <div className="">
        <h4 className="">Social Media</h4>
        <div className="w-4 h-4">
        <FontAwesomeIcon icon={faTwitter} />
        </div>
        <p>🄫Copyright All rights reserved by Hanaki Rin</p>
      </div>
    </footer>
  );
}
