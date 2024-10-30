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

  function RenderData() {
    if (data == null) return;

    const series = (data as IAiringToday).results;
    const seriesToRender = series.slice(0, 4);

    return seriesToRender.map((serie, id) => (
      <SerieCard key={id} serie={serie} />
    ));
  }

  return (
    <section className="">
      <h3 className="my-5 font-semibold text-[24px]">New Release - Series</h3>
      <div className="grid place-items-center gap-3 screen3:grid-cols-2 screen4:grid-cols-4">
        <RenderData />
      </div>
    </section>
  );
}
