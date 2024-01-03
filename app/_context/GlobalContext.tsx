"use client"
import { createContext, useReducer, ReactNode, Dispatch } from "react";

interface stateType {
    isLoggedIn: boolean,
    darkMode: boolean
}

interface Action {
    type: string,
    payload?: any
}

const initialState: stateType = {
    isLoggedIn: false,
    darkMode: false,
}

// Possible Actions type
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const DARKMODEON = 'DARKMODEON'
const DARKMODEOFF = 'DARKMODEOFF'

// Handle Possible Actions
// Reducer Functions
const globalReducer = (state: stateType, action: Action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoggedIn: true }

        case LOGOUT:
            return { ...state, isLoggedIn: false }

        case DARKMODEON:
            return { ...state, darkMode: true }

        case DARKMODEOFF:
            return { ...state, darkMode: false }

        default:
            return state
    }
}

export const GlobalStateContext = createContext<{ state: stateType, dispatch: Dispatch<Action> }>({
    state: initialState,
    dispatch: (value: Action) => null
})

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState)

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    )
}