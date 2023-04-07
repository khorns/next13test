// 'use client'

import React, { useState } from 'react'

function Button({count, setCount}: {count:number, setCount:React.Dispatch<React.SetStateAction<number>>} ) {
    // const [count, setCount] = useState(0)

    return (
        <button className='p-2 bg-red-500' onClick={() => {setCount(prev => prev+1); console.log(count)}}>Increment Count</button>
    )
}

export default Button