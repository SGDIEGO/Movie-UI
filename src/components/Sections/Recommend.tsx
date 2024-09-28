import { Link } from "react-router-dom";

export default function Recommend() {
  return (
    <section className="flex gap-4 justify-between">
      <div className="flex">
        <h3>Recommend</h3>
        <div className="flex gap-4">
          <Link to={""}>
            <span>Movies</span>
          </Link>
          <Link to={""}>
            <span>Series</span>
          </Link>
          <Link to={""}>
            <span>Animation</span>
          </Link>
        </div>
      </div>
      <div className="justify-self-end hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
}
