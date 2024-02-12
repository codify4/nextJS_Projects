"use client"
import React, { useState } from 'react';

import Button from '../../app/components/Button';
import Deposit from '../components/Deposit';
import Withdraw from '../components/Withdraw';

const page = () => {

    const [balance, setBalance] = useState(0);
    const [isDepositVisible, setIsDepositVisible] = useState(false);
    const [isWithdrawVisible, setIsWithdrawVisible] = useState(false);

    const handleDepositClick = () => {
        setIsDepositVisible(true);
    }
    const handleWithdrawClick = () => {
        setIsWithdrawVisible(true);
    }
    const handleDepositClose = () => {
        setIsDepositVisible(false);
    }
    const handleWithdrawClose = () => {
        setIsWithdrawVisible(false);
    }
    

    return (
        <main className='flex flex-col items-center justify-center my-14 mx-14 w-9/12 h-[800px] bg-[#ffffff] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            
            {(isDepositVisible || isWithdrawVisible) && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-"></div>
            )}

            <h1 className='flex flex-col text-center mt-[-100px] mb-[30px] text-6xl font-bold bg-gradient-to-r from-[#4D4DFF] vie-[#0000CD] to-[#00006B] text-transparent bg-clip-text' onChange={() => {setBalance}}>
                <span>BALANCE</span>
                ${balance}
            </h1>

            <div className='flex'>
                
                <Button text='Deposit' onClick={handleDepositClick}/>

                <Button text='Withdraw' onClick={handleWithdrawClick}/>
                
            </div>

            <div className='bg-white p-8 rounded-md z-50 relative'>
                {isDepositVisible && 
                    <Deposit 
                    deposit={handleDepositClose} 
                    
                    />
                }
                {isWithdrawVisible && 
                    <Withdraw />
                }
            </div>
        </main>
    )
}

export default page