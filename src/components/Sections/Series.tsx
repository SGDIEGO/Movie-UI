import SerieCard from "../Serie/SerieCard";

export default function Series() {
  return (
    <section className="">
      <h1>New Release - Series</h1>
      <div className="flex justify-center gap-3">
        <SerieCard />
        <SerieCard />
        <SerieCard />
        <SerieCard />
      </div>
    </section>
  );
}
