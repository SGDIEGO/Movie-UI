import { Link } from "react-router-dom";
import { ISerie } from "../../types/Movie.types";
import { useState } from "react";

export default function SerieUpdatedCard({ serie }: { serie: ISerie }) {
  const [posterpath, setPosterpath] = useState(serie.poster_path)
  const onErrorImg = () => {
    setPosterpath(undefined)
  }

  return (
    <Link to={`/series/${serie.id}`} className="flex items-center gap-4 w-[206px] h-[103px] text-sm">
      <div className=" w-[64px] h-full">
        {(posterpath) ?
          <img
            className="w-full h-full object-cover"
            src={"https://image.tmdb.org/t/p/w500/" + serie.poster_path}
            alt=""
            onError={onErrorImg}
          /> :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-full">
            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
          </svg>
        }
      </div>
      <div>
        <h5>{serie.name}</h5>
        <p>Series/ S 2/EP 9</p>
        <span>{serie.first_air_date}</span>
      </div>
    </Link>
  );
}
