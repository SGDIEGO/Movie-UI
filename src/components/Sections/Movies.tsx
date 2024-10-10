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
    }
  );

  // Render the movies data
  function RenderMovies() {
    // Check if the data is available
    if (data == null) return;

    // Get the movies data from the API response
    const movies = (data as IUpcoming).results;
    const moviesToRender = movies.slice(0, 4);

    // Render the movies as cards
    return moviesToRender.map((movie, id) => (
      <MovieCard key={id} movie={movie} />
    ));
  }

  return (
    <section>
      <h3>New Release - Movie</h3>
      <div className="flex justify-between gap-3">
        <RenderMovies />
      </div>
    </section>
  );
}
