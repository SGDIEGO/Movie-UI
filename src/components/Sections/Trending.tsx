import { useFetch } from "../../hooks/useFetch";
import MovieTrendingCard from "../Movie/MovieTrendingCard";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzM1OTdkMWJkZjMxN2YwNWU0MWNjOWE4MWQxZGQzNyIsIm5iZiI6MTcyNzQ3NDQ0OC4xNDk2NjYsInN1YiI6IjY2ZjRkOGFmNWU0MGI1MTJlZmVkMmM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qEYAytKbx-LXzyQ-e-PFCGvwTHbJIPnqSmyXsoAOqYk";

export default function Trending() {
  // Load data from API
  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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
    const movies = (data as any).results;
    const moviesToRender = movies.slice(0, 3);

    // Render the movies as cards
    return moviesToRender.map((movie: any, id: number) => (
      <MovieTrendingCard key={id} movie={movie} />
    ));
  }

  // Render the trending section
  return (
    <section>
      <h3>Trending</h3>
      <div className="flex justify-between">
        <RenderMovies />
      </div>
    </section>
  );
}
