'use client'
import React, { useEffect, useState, useRef } from 'react'

export default function Test() {
    const [count, setCount] = useState<number>(0)
    const refBtn = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        console.log('i run after ui is loaded')
        refBtn.current?.click()
    }, [])

    return (
        <div id='thisistestid' className='flex flex-row justify-between m-[100px]'>
            <button ref={refBtn} onClick={() => setCount(count - 1)}>Decrement</button>
            <h1 className='text-[50px]'>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
