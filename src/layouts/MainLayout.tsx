import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useSearchContext } from "../context";
import SerieCard from "../components/Serie/SerieCard";
import { IMovie, ISerie } from "../types/Movie.types";
import MovieCard from "../components/Movie/MovieCard";

export default function MainLayout() {
    const searchContext = useSearchContext()

    const renderSearch = () => {
        if (searchContext.results)
            return searchContext.results.map(result => {
                switch (result.media_type) {
                    case "tv":
                        return <SerieCard serie={result as any as ISerie} />
                    case "movie":
                    default:
                        return <MovieCard movie={result as any as IMovie} />
                }
            })

        return <Outlet/>
    }

    return <div className="h-full w-full bg-black">
        <Header />
        {renderSearch()}
    </div>
}