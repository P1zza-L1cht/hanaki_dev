import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoFile, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function InformationForm() {
  return (
    <div className="flex items-center justify-center">
      <div className=''>
        <h2 className="text-2xl font-bold">インフォメーション</h2>
        <FontAwesomeIcon icon={faCircleInfo}/>
      </div>
    </div>
  )
}
