import { IMovie } from "../../types/Movie.types"

interface MovieCardHoverProps {
    movie: IMovie
}

export default function MovieCardHover({ movie }: MovieCardHoverProps) {
    return <div className="absolute top-0 w-full h-full text-center content-center overflow-hidden bg-black text-white bg-opacity-0 transition duration-300 hover:bg-opacity-50">
        <p>{movie.overview}</p>
    </div>
}