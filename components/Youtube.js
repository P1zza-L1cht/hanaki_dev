import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Youtube({movieLists}) {
  const movieListsRev = movieLists.items.reverse();

  return (
    <div className="h-[500px] lg:h-[800px] w-full bg-orange-200 py-3 px-2">
      <div className="flex items-center justify-center w-[100%]">
        <h2 className="text-2xl font-bold ml-8 md:ml-16">
          YouTube
        </h2>
        <FontAwesomeIcon icon={ faYoutube } className="mx-2 text-red-600 text-2xl"/>
      </div>
      <div className="h-[90%] w-[100%] overflow-y-auto">
        {movieListsRev.map((movie) => {
          const { id, snippet = {} } = movie;
          const { title, resourceId } = snippet;
          return(
            <div key={id} className="flex flex-col items-center justify-center my-3">
              <a href={`https://www.youtube.com/watch?v=${resourceId.videoID}`} className="mb-2">
                <p>{title}</p>
              </a>
              <iframe
                 width="560" height="315"
                 src={`https://www.youtube.com/embed/${resourceId.videoId}`}
                 title="YouTube video player"
                 frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
              ></iframe>
            </div>
          )
        })}
      </div>
    </div>
  )
}
