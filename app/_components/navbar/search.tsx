'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Search() {
    const [query, setQuery] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert(`You Searched for ${query}`)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className='flex-[1_1_500px] mx-[20px]'>
            <div className='relative'>
                <input type="text" placeholder='Search in Daraz' value={query} onChange={handleChange} className='rounded-[10px] p-[10px] pl-[20px] w-[100%] h-[40px] outline-none' />
                <button type='submit' className='absolute px-[15px] py-[2px] top-[50%] -translate-y-[50%] right-[10px] bg-[rgba(248,86,6,0.15)] rounded-[7px]'>
                    <SearchOutlinedIcon sx={{ color: '#f85606', fontSize: 22 }} />
                </button>
            </div>
        </form>
    )
}
