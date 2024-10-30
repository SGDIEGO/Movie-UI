import { ISerie } from "../../types/Movie.types"

interface SerieCardHoverProps {
    serie: ISerie
}

export default function SerieCardHover({ serie }: SerieCardHoverProps) {
    return <div className="absolute top-0 left-0 w-full h-full text-center content-center overflow-hidden bg-black text-white bg-opacity-0 transition duration-300 hover:bg-opacity-50">
        <p>{serie.title}</p>
    </div>
}