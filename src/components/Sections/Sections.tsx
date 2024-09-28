import Movies from "./Movies";
import Recently from "./Recently";
import Recommend from "./Recommend";
import Series from "./Series";
import Trending from "./Trending";

export default function Sections() {
  return (
    <div className="grid mx-auto">
      <Recently />
      <Trending />
      <Movies />
      <Series />
      <Recommend />
    </div>
  );
}
