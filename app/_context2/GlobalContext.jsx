"use client"
import { createContext, useReducer, ReactNode, Dispatch } from "react";

const initialState = {
    isLoggedIn: false,
    darkMode: false,
}

// Handle Possible Actions
// Reducer Functions
const globalReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isLoggedIn: true }

        case "LOGOUT":
            return { ...state, isLoggedIn: false }

        case "DARKMODEON":
            return { ...state, darkMode: true }

        case "DARKMODEOFF":
            return { ...state, darkMode: false }

        default:
            return state
    }
}

export const GlobalStateContext = createContext()

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState)

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    )
}