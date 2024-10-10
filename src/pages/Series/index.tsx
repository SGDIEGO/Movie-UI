import { ISerie } from "../../types/Movie.types";
import { useFetch } from "../../hooks/useFetch";
import { BEARER_TOKEN } from "../../data/token";
import SerieCard from "../../components/Serie/SerieCard";

interface IAiringToday {
  page: number,
  results: Array<ISerie>,
}

export default function Series() {
  const { data } = useFetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', { 
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  }, []);

  const renderData = () => {
    if (!data) return null

    const series = (data as IAiringToday).results

    return series.map((serie, id) => <SerieCard key={id} serie={serie} />)
  }

  return <div className="grid grid-cols-4 place-items-center items-start gap-y-4">
    {renderData()}
  </div>
}
