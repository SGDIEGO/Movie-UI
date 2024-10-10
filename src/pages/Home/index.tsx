import { useEffect, useState } from "react";
import MovieDisplay from "../../components/Movie/MovieDisplay";
import { IMovie } from "../../types/Movie.types";
import Sections from "../../components/Sections/Sections";

export default function Home() {
  const [movie, setMovie] = useState({} as IMovie);

  useEffect(() => {
    setMovie({
      id: 1,
      title: "titulo1",
      genre_ids: [1, 2, 3],
      overview: "Sinopsis1",
      backdrop_path: "",
      vote_average: 2,
      release_date: "2022-01-01",
      poster_path: ""
    });
  }, []);

  return (
    <div className="text-white">
      <MovieDisplay movie={movie} />
      <Sections />
    </div>
  );
}
