import { useFetch } from "../../hooks/useFetch";
import SerieCard from "../Serie/SerieCard";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzM1OTdkMWJkZjMxN2YwNWU0MWNjOWE4MWQxZGQzNyIsIm5iZiI6MTcyNzQ3NDQ0OC4xNDk2NjYsInN1YiI6IjY2ZjRkOGFmNWU0MGI1MTJlZmVkMmM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qEYAytKbx-LXzyQ-e-PFCGvwTHbJIPnqSmyXsoAOqYk";

export default function Series() {
  const { data } = useFetch(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
  );

  // Render the series data
  function RenderData() {
    // Check if the data is available
    if (data == null) return;

    // Get the series data from the API response
    const series = (data as any).results;
    const seriesToRender = series.slice(0, 4);

    // Render the series as cards
    return seriesToRender.map((serie: any, id: number) => (
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
