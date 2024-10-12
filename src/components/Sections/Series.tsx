import { BEARER_TOKEN } from "../../data/token";
import { useFetch } from "../../hooks/useFetch";
import { ISerie } from "../../types/Movie.types";
import SerieCard from "../Serie/SerieCard";

interface IAiringToday {
  page: number;
  results: Array<ISerie>;
}

export default function Series() {
  const { data } = useFetch(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    },
    []
  );

  // Render the series data
  function RenderData() {
    // Check if the data is available
    if (data == null) return;

    // Get the series data from the API response
    const series = (data as IAiringToday).results;
    const seriesToRender = series.slice(0, 4);

    // Render the series as cards
    return seriesToRender.map((serie, id) => (
      <SerieCard key={id} serie={serie} />
    ));
  }

  return (
    <section className="">
      <h1>New Release - Series</h1>
      <div className="flex justify-between gap-3">
        <RenderData />
      </div>
    </section>
  );
}
