import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../Movie/MovieCard";
import SerieCard from "../Serie/SerieCard";
import { BEARER_TOKEN } from "../../data/token";
import { IMovie, ISerie } from "../../types/Movie.types";

interface ITopRatedMovie {
  page: number
  results: Array<IMovie | ISerie>;
}

export default function Recommend() {
  const [recommend, setRecommend] = useState("movies");
  const [urlFetch, setUrlFetch] = useState("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")

  useEffect(() => {
    switch (recommend) {
      case "movies":
        setUrlFetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")
        break;
      case "series":
        setUrlFetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1")
        break
    }
  }, [recommend])

  const { data } = useFetch(
    urlFetch,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    },
    [urlFetch]
  );

  function RenderData() {
    if (data == null) return;

    const list = (data as ITopRatedMovie).results;
    const listToRender = list.slice(0, 8);

    switch (recommend) {
      case "movies":
        return listToRender.map((movie, id) => (
          <MovieCard key={id} movie={movie as IMovie} />
        ));

      case "series":
        return listToRender.map((serie, id) => (
          <SerieCard key={id} serie={serie as ISerie} />
        ));
      default:
        return <></>;
    }
  }

  return (
    <section className="">
      <div className="flex gap-4 justify-between my-5 place-items-center">
        <div className="flex place-items-center gap-5">
          <h3 className="font-semibold text-[24px]">Recommend</h3>
          <div className="flex gap-4">
            <button
              className={`button ${recommend === "movies"
                ? "button-selected"
                : "button-transparent"
                }`}
              onClick={() => {
                setRecommend("movies");
              }}
            >
              <span>Movies</span>
            </button>
            <button
              className={`button ${recommend === "series"
                ? "button-selected"
                : "button-transparent"
                }`}
              onClick={() => {
                setRecommend("series");
              }}
            >
              <span>Series</span>
            </button>

          </div>
        </div>
        <Link
          to={recommend}
          className="hidden screen1:flex justify-self-end hover:cursor-pointer"
        >
          <span>View All</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      <div className="grid place-items-center gap-3 screen3:grid-cols-2 screen4:grid-cols-4">
        <RenderData />
      </div>
    </section>
  );
}
