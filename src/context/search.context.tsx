import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { BEARER_TOKEN } from "../data/token";
import { MultiElement } from "../types/Multi.types";
import { fetchData } from "../utils/fetch";

interface ISearchContext {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
    results: Array<MultiElement> | null
    searchMulti: (url: string) => void;
}

export const SearchContext = createContext<ISearchContext>({} as ISearchContext);

export const SearchContextProvider = ({ children }: { children: JSX.Element }) => {
    const [results, setResults] = useState([] as Array<MultiElement> | null )
    const [search, setSearch] = useState("")

    const searchMulti = async (url: string) => {
        const data = await fetchData(url, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        })
        
        setResults(data.results)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!search || search == "") {
                setResults(null)
            } else {
                searchMulti(search)
            }
        }, 3000)

        return () => clearTimeout(timer)
    }, [search])

    return (
        <SearchContext.Provider value={{
            search,
            setSearch,
            results,
            searchMulti
        }}>
            {children}
        </SearchContext.Provider>
    );
};
