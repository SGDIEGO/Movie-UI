import SerieUpdatedCard from "../Serie/SerieUpdatedCard";
import { useFetch } from "../../hooks/useFetch";
import { BEARER_TOKEN } from "../../data/token";
import { ISerie } from "../../types/Movie.types";

interface IAiringToday {
  page: number;
  results: Array<ISerie>;
}

export default function Recently() {
  const { data } = useFetch(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    },
    []
  );

  function RenderSeries() {
    if (data == null) return;

    const series = (data as IAiringToday).results;
    const seriesToRender = series.slice(0, 4);

    return seriesToRender.map((serie, id) => (
      <SerieUpdatedCard key={id} serie={serie} />
    ));
  }

  return (
    <section>
      <h3>Recently Updated</h3>
      <div className="flex justify-between">
        <RenderSeries />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-16"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
}
