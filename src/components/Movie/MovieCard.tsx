import { Link } from "react-router-dom";
import "./Movie.css";
import { IMovie } from "../../types/Movie.types";

export default function MovieCard({ movie }: { movie: IMovie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="grid w-[256px] hover:cursor-pointer">
      <div className="h-[392px] w-full">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="movie_img"
        />
      </div>

      <div className="grid grid-cols-2 text-sm items-center pt-1.5 text-white">
        <h5>{movie.title}</h5>
        <div className="flex justify-end gap-2 ">
          <span className="bg-red-500 p-0.5 rounded-md">HD</span>
          <span className="border border-red-500 p-0.5 rounded-md">
            3:20:00
          </span>
        </div>
      </div>
    </Link>
  );
}
