import { IMovie } from "../../types/Movie.types";
import { useFetch } from "../../hooks/useFetch";
import { BEARER_TOKEN } from "../../data/token";
import MovieCard from "../../components/Movie/MovieCard";

interface INowPlaying {
  dates: {
    maximum: string,
    minimum: string,
  },
  page: number,
  results: Array<IMovie>,
}

export default function Movies() {
  const { data } = useFetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', { 
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  }, []);

  const renderData = () => {
    if (!data) return null

    const movies = (data as INowPlaying).results

    return movies.map((movie, id) => <MovieCard key={id} movie={movie} />)
  }

  return <div className=" grid screen2:grid-cols-2 screen4:grid-cols-4 place-items-center items-start gap-y-4">
    {renderData()}
  </div>
}
