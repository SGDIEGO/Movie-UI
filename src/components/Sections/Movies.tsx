import MovieCard from "../Movie/MovieCard";

export default function Movies() {
  return (
    <div className="flex justify-center gap-3">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
