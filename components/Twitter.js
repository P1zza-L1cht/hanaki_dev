import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Twitter() {
  return (
    <div className="h-[500px] lg:h-[800px] w-full bg-sky-200 ">
      <div className="flex items-center w-full h-[10%]">
        <h2 className="text-2xl font-bold ml-8 md:ml-16">
          Twitter
        </h2>
        <FontAwesomeIcon icon={ faTwitter } className="mx-2 text-blue-600"/>
        <div className="ml-auto px-0 mr-8 md:mr-16">
          <a
            className="twitter-follow-button hoverEffect"
            data-show-screen-name="false"
            href="https://twitter.com/rin_vt32?ref_src=twsrc%5Etfw"
          >
            Follow
          </a>
        </div>
      </div>
      <div className="h-[85%] w-[90%] md:w-[70%] mx-auto overflow-y-auto">
        <a className="twitter-timeline" href="https://twitter.com/rin_vt32?ref_src=twsrc%5Etfw">Tweets by rin_vt32</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </div>
  )
}
