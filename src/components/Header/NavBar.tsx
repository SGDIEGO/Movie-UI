import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex gap-5">
      <div>
        <ul className="flex gap-3">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Genre</Link>
          <Link to={"/"}>Country</Link>
        </ul>
      </div>
      <div className="relative flex">
        <div className="absolute end-0 ">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          className="bg-white rounded-xl "
          type="search"
          placeholder="Search movies..."
        />
      </div>
      <div>
        <ul className="flex gap-3">
          <Link to={"movies"}>Movies</Link>
          <Link to={"series"}>Series</Link>
          <Link to={"animation"}>Animation</Link>
        </ul>
      </div>
    </nav>
  );
}
