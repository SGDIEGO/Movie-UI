import SerieUpdatedCard from "../Serie/SerieUpdatedCard";
import { useFetch } from "../../hooks/useFetch";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzM1OTdkMWJkZjMxN2YwNWU0MWNjOWE4MWQxZGQzNyIsIm5iZiI6MTcyNzQ3NDQ0OC4xNDk2NjYsInN1YiI6IjY2ZjRkOGFmNWU0MGI1MTJlZmVkMmM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qEYAytKbx-LXzyQ-e-PFCGvwTHbJIPnqSmyXsoAOqYk";

export default function Recently() {
  // Load data from API
  const { data } = useFetch(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
  );

  // Render the series data
  function RenderSeries() {
    // Check if the data is available
    if (data == null) return;

    // Get the series data from the API response
    const series = (data as any).results;
    const seriesToRender = series.slice(0, 4);

    // Render the series as cards
    return seriesToRender.map((serie: any, id: number) => (
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
