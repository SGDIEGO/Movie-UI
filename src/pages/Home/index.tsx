import { useEffect, useState } from "react";
import MovieDisplay from "../../components/Movie/MovieDisplay";
import { Movie } from "../../types/Movie.types";
import Sections from "../../components/Sections/Sections";

export default function Home() {
  const [movie, setMovie] = useState({} as Movie);
  useEffect(() => {
    setMovie({
      id: 1,
      title: "titulo1",
      genres: [{ id: 1, name: "Genero1" }],
      overview: "Sinopsis1",
      vote_average: 2,
      release_date: "2022-01-01",
    });
  }, []);

  return (
    <div className="text-white">
      <MovieDisplay movie={movie} />
      <Sections/>
    </div>
  );
}
