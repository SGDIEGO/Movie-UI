import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { BEARER_TOKEN } from "../data/token";
import { IGenre } from "../types/Genre.types";

interface IGenreProps {
  genres: Array<IGenre>
}

interface IAppContext {
  genres: IGenreProps
  renderGenresFn: (genre_ids: Array<number> | undefined) => (string | undefined)[]
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const { data } = useFetch<IGenreProps>("https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`
      },
    },
    []
  )

  const renderGenresFn = (genre_ids: Array<number> | undefined) => {
    if (!genre_ids) return []
    return genre_ids.map((genre_id) => (data?.genres.find((g_id) => g_id.id == genre_id)?.name))
  }

  return (
    <AppContext.Provider value={{
      genres: data!,
      renderGenresFn: renderGenresFn,
    }}>
      {children}
    </AppContext.Provider>
  );
};
