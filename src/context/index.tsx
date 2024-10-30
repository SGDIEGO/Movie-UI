import { useContext } from "react";
import { AppContext } from "./app.context"
import { SearchContext } from "./search.context"

export const useAppContext = () => useContext(AppContext)
export const useSearchContext = () => useContext(SearchContext)