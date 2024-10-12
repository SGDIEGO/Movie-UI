import { useFetch } from "../../hooks/useFetch";
import { IMovie } from "../../types/Movie.types";
import MovieTrendingCard from "../Movie/MovieTrendingCard";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzM1OTdkMWJkZjMxN2YwNWU0MWNjOWE4MWQxZGQzNyIsIm5iZiI6MTcyNzQ3NDQ0OC4xNDk2NjYsInN1YiI6IjY2ZjRkOGFmNWU0MGI1MTJlZmVkMmM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qEYAytKbx-LXzyQ-e-PFCGvwTHbJIPnqSmyXsoAOqYk";

interface IPopular {
  page: number;
  results: Array<IMovie>;
}

export default function Trending() {
  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    },
    []
  );

  function RenderMovies() {
    if (data == null) return;

    const movies = (data as IPopular).results;
    const moviesToRender = movies.slice(0, 3);

    return moviesToRender.map((movie, id) => (
      <MovieTrendingCard key={id} movie={movie} />
    ));
  }

  return (
    <section>
      <h3>Trending</h3>
      <div className="flex justify-between">
        <RenderMovies />
      </div>
    </section>
  );
}
