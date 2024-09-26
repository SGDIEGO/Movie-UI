import Movies from "./Movies";
import Series from "./Series";
import Trending from "./Trending";

export default function Sections() {
    return <div className="grid mx-[5rem]">
        <Trending/>
        <Movies/>
        <Series/>
    </div>
}