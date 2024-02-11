"use client"
import React, { useState } from 'react';

const page = () => {

    const [balance, setBalance] = useState(0);

    return (
        <main className='flex items-start justify-center my-14 mx-14 w-9/12 h-[800px] bg-[#ffffff] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            <h1 className='text-6xl' onChange={() => {setBalance}}>BALANCE: {balance}</h1>
        </main>
    )
}

export default page