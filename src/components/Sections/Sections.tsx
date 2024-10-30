import Movies from "./Movies";
import Recently from "./Recently";
import Recommend from "./Recommend";
import Series from "./Series";
import Trending from "./Trending";

export default function Sections() {
  return (
    <section className="flex">
      <div className="mx-auto flex flex-col gap-5">
        <Recently />
        <Trending />
        <Movies />
        <Series />
        <Recommend />
      </div>
    </section>
  );
}
