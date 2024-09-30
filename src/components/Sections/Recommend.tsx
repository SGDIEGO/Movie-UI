import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../Movie/MovieCard";
import SerieCard from "../Serie/SerieCard";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzM1OTdkMWJkZjMxN2YwNWU0MWNjOWE4MWQxZGQzNyIsIm5iZiI6MTcyNzQ3NDQ0OC4xNDk2NjYsInN1YiI6IjY2ZjRkOGFmNWU0MGI1MTJlZmVkMmM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qEYAytKbx-LXzyQ-e-PFCGvwTHbJIPnqSmyXsoAOqYk";

export default function Recommend() {
  // Recommended state
  const [recommend, setRecommend] = useState("movies");
  const [urlFetch, setUrlFetch] = useState("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")

  // Change the recommendation v
  useEffect(() => {
    // Update the url based on the selected recommendation type
    switch (recommend) {
      case "movies":
        setUrlFetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")
        break;
      case "series":
        setUrlFetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1")
        break
    }
  }, [recommend])

  // Load data from API
  const { data } = useFetch(
    urlFetch,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    },
    [recommend]
  );

  // Render the movies data
  function RenderData() {
    // Check if the data is available
    if (data == null) return;

    // Get the movies data from the API response
    const list = (data as any).results;
    const listToRender = list.slice(0, 8);

    // Render the movies or series as cards based on the selected recommendation type
    switch (recommend) {
      case "movies":
        // Render the movies as cards
        return listToRender.map((movie: any, id: number) => (
          <MovieCard key={id} movie={movie} />
        ));

      case "series":
        return listToRender.map((serie: any, id: number) => (
          <SerieCard key={id} serie={serie} />
        ));
      default:
        return <></>;
    }
  }

  return (
    <section>
      <div className="flex gap-4 justify-between">
        <div className="flex">
          <h3>Recommend</h3>
          <div className="flex gap-4">
            <button
              className={`button ${
                recommend === "movies"
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
              className={`button ${
                recommend === "series"
                  ? "button-selected"
                  : "button-transparent"
              }`}
              onClick={() => {
                setRecommend("series");
              }}
            >
              <span>Series</span>
            </button>
            <button
              className={`button ${
                recommend === "animations"
                  ? "button-selected"
                  : "button-transparent"
              }`}
              onClick={() => {
                setRecommend("animations");
              }}
            >
              <span>Animation</span>
            </button>
          </div>
        </div>
        <Link
          to={recommend}
          className="flex justify-self-end hover:cursor-pointer"
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
      
      <div className="grid grid-cols-4">
        <RenderData />
      </div>
    </section>
  );
}
