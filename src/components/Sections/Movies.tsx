import { BEARER_TOKEN } from "../../data/token";
import { useFetch } from "../../hooks/useFetch";
import { IMovie } from "../../types/Movie.types";
import MovieCard from "../Movie/MovieCard";

interface IUpcoming {
  date: {
    maximum: string
    minimum: string;
  },
  page: number;
  results: Array<IMovie>;
}

export default function Movies() {
  // Load data from API
  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    },
    []
  );

  // Render the movies data
  function RenderMovies() {
    if (data == null) return;

    const movies = (data as IUpcoming).results;
    const moviesToRender = movies.slice(0, 4);

    return moviesToRender.map((movie, id) => (
      <MovieCard key={id} movie={movie} />
    ));
  }

  return (
    <section>
      <h3 className="my-5 font-semibold text-[24px]">New Release - Movie</h3>
      <div className="grid place-items-center gap-3 screen3:grid-cols-2 screen4:grid-cols-4">
        <RenderMovies />
      </div>
    </section>
  );
}
