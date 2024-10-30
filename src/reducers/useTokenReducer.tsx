import { Dispatch, useReducer } from "react";

interface State {
    token: string | undefined
}

interface Action {
    type: "SET_TOKEN" | "REMOVE_TOKEN";
    payload?: string
}


const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_TOKEN":
            return { ...state, token: action.payload as string }
        case "REMOVE_TOKEN":
            return { ...state, token: undefined }
    }
}

const initialState: State = {
    token: undefined
}

export type TokenReducer = [State, Dispatch<Action>]
export const useTokenReducer = (): TokenReducer => useReducer(reducer, initialState)