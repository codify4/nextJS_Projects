"use client"

import React, { useState } from 'react';

type DepositProps = {

  closeDeposit: (value?: number) => void;
}

const Deposit = ({ closeDeposit }: DepositProps) => {
  
  const [deposit, setDeposit] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value);
    setDeposit(inputValue);
  }
  
  return (
    <div className='flex flex-col items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-white p-8 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>

        <input 
            type="number" 
            placeholder='Deposit money...' 
            value={deposit}
            onChange={handleInputChange}
            className='m-2 p-2 rounded-md appearance-none border-2 border-[#A9A9A9] text-3xl placeholder-text'
            />

        <button className='bg-none border-2 border-black text-3xl text-black py-1 px-10 rounded-xl m-5 transition-transform transform  hover:-translate-y-2 hover:bg-gradient-to-r from-[#000080] to-[#0000CD] hover:border-none hover:text-white'
        onClick={() => closeDeposit(deposit)}
        >
            Deposit
        </button>
    </div>
  )
}

export default Deposit