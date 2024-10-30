import { useState } from "react";
import { BEARER_TOKEN } from "../../data/token";
import { useFetch } from "../../hooks/useFetch";
import { IMovie } from "../../types/Movie.types";
import { useAppContext } from "../../context";
import CategoryComponent from "../Category/Category";

interface IMoviesPopular {
  page: number;
  results: Array<IMovie>;
}

export default function MovieDisplay() {
  const appCtx = useAppContext()
  const { data: movies } = useFetch<IMoviesPopular>("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    },
    []
  )

  const total = movies?.results.length ?? 1000
  const [currentMovie, setCurrentMovie] = useState(0)

  const renderCategories = () => {
    const categoriesNames = appCtx.renderGenresFn(movies?.results[currentMovie].genre_ids ?? [])
    if (!categoriesNames) return null

    return categoriesNames.map((category, i) => <CategoryComponent key={i} name={category} foregroundColor={"black"} backgroundColor={"white"} />)
  }

  return (
    <section
      className="relative h-[500px] w-full bg-cover bg-center place-content-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.results[currentMovie].poster_path})`,
      }}
    >
      <div className="flex gap-8 place-content-center">
        <button className="button button-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          <span>Watch Now</span>
        </button>
        <button className="button button-transparent">
          <span>Watch Later</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex place-content-center">
        <div className="flex flex-col gap-4 font-bold max-w-[650px]">
          <div className="flex flex-col pt-10 ">
            <h3 className="text-[32px]">{movies?.results[currentMovie].title}</h3>
            {/* flex gap-3 place-items-center text-[16px] */}
            <div className="hidden screen2:flex">
              {renderCategories()}

              <span className="movie-attribute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                    clipRule="evenodd"
                  />
                </svg>
                {movies?.results[currentMovie].release_date?.substring(0, 4)}
              </span>

              <span className="movie-attribute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                    clipRule="evenodd"
                  />
                </svg>
                3:22:22
              </span>

              <span className="movie-attribute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                    clipRule="evenodd"
                  />
                </svg>

                {movies?.results[currentMovie].vote_average}
              </span>
            </div>
          </div>
          <p className="leading-4">{movies?.results[currentMovie].overview}</p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="flex justify-center gap-5">
          <button onClick={() => { setCurrentMovie((state) => (state - 1) % (total)) }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg></button>
          <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg></button>
          <button onClick={() => { setCurrentMovie((state) => (state + 1) % (total)) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
