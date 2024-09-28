import { createContext, useContext, useState } from "react";
import { Movie } from "../types/Movie.types";
import { Serie } from "../types/Serie.types";

interface IAppContext {
  movies: Movie[];
  setMovies: any;
  series: Serie[];
  setSeries: any;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export const appContextProvider = ({ children }: { children: JSX.Element }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<Serie[]>([]);

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        series,
        setSeries,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
