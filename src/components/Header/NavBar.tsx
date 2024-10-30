import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSearchContext } from "../../context";
import { useAuthContext } from "../../context/auth.context";
import InfoComponent from "../Info/Info";

const dotSelect = <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="2.5" cy="2.5" r="2.5" fill="#FF0000" />
</svg>

const searchUrl = (text: string) => `https://api.themoviedb.org/3/search/multi?query=${text}&include_adult=false&language=en-US&page=1`

export default function NavBar() {
  const { useTokenReducer } = useAuthContext()
  const searchContext = useSearchContext()
  const location = useLocation()
  const [opt, setOpt] = useState("home")
  const [hover, setHover] = useState(false)

  useEffect(() => {
    setOpt(location.pathname.split("/")[1])
  }, [location.pathname])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchContext.search) {
        searchContext.searchMulti(searchUrl(searchContext.search))
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [searchContext.search])

  const renderDotSelected = (url: string) => {
    if (opt != url) return null
    return <span className="absolute bottom-0 left-1/2">
      {dotSelect}
    </span>
  }

  const renderLink = () => {
    return <ul className="flex gap-3">
      <Link className="relative" to={"/"}>
        Home
        {renderDotSelected("")}
      </Link>

      <Link className="relative" to={"/genres"} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
        <span>
          Genre
          {renderDotSelected("genres")}
        </span>
        {hover ? <div className="absolute">
          <ul>
            <li>awd</li>
            <li>awd</li>
            <li>bb</li>
          </ul>
        </div> : null}
      </Link>
    </ul>
  }

  const renderTypes = () => {
    return <ul className="flex gap-3">
      <Link className="relative" to={"movies"}>
        Movies
        {renderDotSelected("movies")}
      </Link>
      <Link className="relative" to={"series"}>Series
        {renderDotSelected("series")}
      </Link>
    </ul>
  }

  return (
    <nav className="w-full flex justify-center gap-5 place-items-center">
      <div className="w-full flex justify-end screen1:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </div>

      <div className="hidden screen1:contents">
        {renderLink()}
      </div>

      <div className="relative hidden screen2:flex place-items-center bg-white rounded-xl p-2">
        <input
          className="outline-none text-black"
          placeholder="Search movies..."
          value={searchContext.search}
          onChange={e => { searchContext.setSearch(e.target.value) }}
        />
        <div className="">
          <svg
            className="size-5 text-gray-500 dark:text-gray-400 my-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

      </div>

      <div className="hidden screen1:contents">
        {renderTypes()}
      </div>

      {!useTokenReducer[0].token ? <div className="flex gap-5">
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div> : <InfoComponent />}
    </nav>
  );
}
