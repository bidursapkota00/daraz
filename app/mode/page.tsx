'use client'
import React, { useContext } from 'react'
import { GlobalStateContext } from '../_context/GlobalContext'

export default function Mode() {
    const { state, dispatch } = useContext(GlobalStateContext)
    return (
        <div className='h-[100vh]' style={{ background: state.darkMode ? 'black' : 'white' }}>
            <button onClick={() => dispatch({ type: state.darkMode ? 'DARKMODEOFF' : 'DARKMODEON' })} style={{ color: state.darkMode ? 'white' : 'black' }}>Change Dark Mode</button>
        </div>
    )
}
