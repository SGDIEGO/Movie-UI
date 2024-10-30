import { BEARER_TOKEN } from "../../data/token"
import { useFetch } from "../../hooks/useFetch"
import { IGenre } from "../../types/Genre.types"

interface IGenres {
    genres: Array<IGenre>
}

export default function GenreComponent() {
    const genres = useFetch<IGenres>("https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${BEARER_TOKEN}`,
            }
        },
        []
    )

    const renderByGenres = () => {
        const genresToRender = genres.data?.genres.slice(0, 3)
        return genresToRender?.map((genre) => (
            <h1>{genre.name}</h1>
        ))
    }

    return <div className="text-white">
        {renderByGenres()}
    </div>
}