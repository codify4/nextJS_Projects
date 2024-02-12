"use client"

import React, {useState} from 'react'

type WithdrawProps = {
    closeWithdraw: (value?: number) => void;
}

const Withdraw = ({ closeWithdraw }: WithdrawProps) => {

  const [withdraw, setWithdraw] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Remove leading zeros and convert to number
    const numericValue = inputValue.replace(/^0+/, '');
    setWithdraw(numericValue);
  }

  return (
    <div className='flex flex-col items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-white p-8 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>

        <input 
            type="number" 
            placeholder='Withdraw some money...' 
            value={withdraw}
            onChange={handleInputChange}
            className='m-2 p-2 rounded-md appearance-none border-2 border-[#A9A9A9] text-3xl placeholder-text'
            
            />

        <button className='bg-none border-2 border-black text-3xl text-black py-1 px-10 rounded-xl m-5 transition-transform transform  hover:-translate-y-2 hover:bg-gradient-to-r from-[#000080] to-[#0000CD] hover:border-none hover:text-white'
        onClick={() => closeWithdraw(Number(withdraw))}
        >
            Withdraw
        </button>
    </div>
  )
}

export default Withdraw