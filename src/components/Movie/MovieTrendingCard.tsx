import { Link } from "react-router-dom";
import { IMovie } from "../../types/Movie.types";
import { useState } from "react";
import { useAppContext } from "../../context";
import CategoryComponent from "../Category/Category";
import MovieCardHover from "./MovieCardHover";

export default function MovieTrendingCard({ movie }: { movie: IMovie }) {
  const appCtx = useAppContext()
  const [posterPath, setposterPath] = useState(movie.poster_path)
  const [hover, setHover] = useState(false)

  const onErrorImg = () => {
    setposterPath(undefined)
  }

  function RenderGenres() {
    const genres = movie.genre_ids
      .slice(0, 3)

    return appCtx.renderGenresFn(genres)
  }

  const onMouseEnterFn = () => {
    setHover(true)
  }

  const onMouseLeaveFn = () => {
    setHover(false)
  }

  return (
    <Link to={`/movies/${movie.id}`} className="relative h-[341px] w-[341px] hover:cursor-pointer" onMouseEnter={onMouseEnterFn} onMouseLeave={onMouseLeaveFn}>
      <div className="">
        <div className="relative h-[293px] w-full">
          {posterPath ?
            <img
              className="w-full h-full object-cover"
              src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              alt=""
              onError={onErrorImg}
            />
            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-full">
              <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
            </svg>
          }
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-12"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="overflow-hidden text-ellipsis w-[200px]">
            {movie.title}
          </span>
          <div className="flex justify-between gap-1 place-items-center">
            {RenderGenres().map((gen, i) => <CategoryComponent key={i} name={gen} backgroundColor={"red"} foregroundColor={"black"} />)}
          </div>
        </div>
      </div>
      {hover ? <MovieCardHover movie={movie} /> : null}
    </Link>
  );
}
