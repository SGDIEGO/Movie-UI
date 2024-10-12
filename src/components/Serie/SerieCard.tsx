import { useState } from "react";
import { ISerie } from "../../types/Movie.types";
import { Link } from "react-router-dom";

export default function SerieCard({ serie }: { serie: ISerie }) {
  const [posterPath, setPosterPath] = useState(serie.poster_path)
  const onErrorImg = () => {
    setPosterPath(undefined)
  }

  return (
    <Link to={`/movies/${serie.id}`} className="grid w-[256px] text-white hover:cursor-pointer">
      <div className="h-[392px] w-full relative">
        {(posterPath) ?
          <img
            className="h-full w-full rounded-lg object-cover"
            src={"https://image.tmdb.org/t/p/w500/" + serie.poster_path}
            alt="movie_img"
            onError={onErrorImg}
          />
          :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-full">
            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
          </svg>
        }
        <span className="bg-red-500 rounded-lg absolute top-0 left-0">EP 1</span>
      </div >

      <div className="grid grid-cols-2 text-[10px] items-center pt-1.5">
        <h5>{serie.name}</h5>
        <div className="flex justify-end gap-2">
          <span className="bg-red-500 p-0.5 rounded-md">HD</span>
          <span className="border border-red-500 p-0.5 rounded-md">
            Season 1
          </span>
        </div>
      </div>
    </Link>
  );
}
