import { createContext, useContext } from "react";
import { TokenReducer, useTokenReducer } from "../reducers/useTokenReducer";

interface IAuthContext {
    useTokenReducer: TokenReducer
}

export const AuthContext = createContext({} as IAuthContext)

export const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
    const value: IAuthContext = {
        useTokenReducer: useTokenReducer()
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)