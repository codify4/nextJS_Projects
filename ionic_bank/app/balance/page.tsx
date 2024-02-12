"use client"

import React, { useState } from 'react';

import Button from '../../components/ui/Button';
import Deposit from '../../components/ui/Deposit';
import Withdraw from '../../components/ui/Withdraw';
import Currency from '../../components/ui/Currency';

const page = () => {

    const [isDepositVisible, setIsDepositVisible] = useState(false);
    const [isWithdrawVisible, setIsWithdrawVisible] = useState(false);

    const [balance, setBalance] = useState(0);
    
    // Click state for deposit/ withdraw card components
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

    const handleDepositedMoneyChange = (value?: number) => {
        // Update the balance by adding the deposited money
        setBalance((b) => b + (value ?? 0));
        handleDepositClose();
    }
    const handleWithdrawnMoneyChange = (value?: number) => {
        // Update the balance by subtracting the withdrawn money
        setBalance((b) => b - (value ?? 0));
        handleWithdrawClose();
    }

    return (
        <main className='flex flex-col items-center justify-center my-14 mx-14 w-9/12 h-[800px] bg-[#ffffff] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            
            {<Currency />}

            {/*Transparent BG */}
            {(isDepositVisible || isWithdrawVisible) && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-"></div>
            )}

            <h1 className='flex flex-col text-center mt-[-100px] mb-[30px] text-6xl font-bold bg-gradient-to-r from-[#4D4DFF] vie-[#0000CD] to-[#00006B] text-transparent bg-clip-text' onChange={() => {setBalance}}>
                <span>BALANCE</span>
                ${balance}
            </h1>

            <div className='flex'>
                <Button text='Deposit' onClick={handleDepositClick}/>
                <Button text='Withdraw' onClick={handleWithdrawClick}/>
            </div>
            
            {/*Check if the booleans are true to show Card Component to the screen */}
            <div className='bg-white p-8 rounded-md z-50 relative'>
                {isDepositVisible && 
                    <Deposit closeDeposit={handleDepositedMoneyChange} />
                }
                {isWithdrawVisible && 
                    <Withdraw closeWithdraw={handleWithdrawnMoneyChange}/>
                }
            </div>
        </main>
    )
}

export default page