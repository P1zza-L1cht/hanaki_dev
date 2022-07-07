import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoFile, faParachuteBox } from '@fortawesome/free-solid-svg-icons';

export default function MerchandiseForm() {
  return (
    <div className="flex items-center justify-center">
      <div className=''>
        <h2 className="text-2xl font-bold">商品・CD</h2>
        <FontAwesomeIcon icon={faParachuteBox}/>
      </div>
    </div>
  )
}
