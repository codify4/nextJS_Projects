"use client"

import React, { useState, useEffect } from 'react';

import Button from '../../components/Button';
import Deposit from '../../components/Deposit';
import Withdraw from '../../components/Withdraw';
import Currency from '../../components/Currency';

const page = () => {

    const storedBalance = parseInt(localStorage.getItem('balance') || '0', 10);
    const [isDepositVisible, setIsDepositVisible] = useState(false);
    const [isWithdrawVisible, setIsWithdrawVisible] = useState(false);    

    const [balance, setBalance] = useState(storedBalance);
    const [currency, setCurrency] = useState('');

    useEffect(() => {
        localStorage.setItem('balance', JSON.stringify(balance));
    }, [balance])

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

    // Update the balance by adding the deposited money
    const handleDepositedMoneyChange = (value?: number) => {
        setBalance((b) => b + (value ?? 0));
        handleDepositClose();
    }
     // Update the balance by subtracting the withdrawn money
    const handleWithdrawnMoneyChange = (value?: number) => {
        setBalance((b) => b - (value ?? 0));
        handleWithdrawClose();
    }

    const handleCurrencyChange = (currency: string) => {
        setCurrency(currency);
    }

    return (
        <main className='flex flex-col items-center justify-center my-14 mx-14 w-9/12 h-[800px] bg-[#ffffff] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            
            <Currency
                onCurrencyChange={handleCurrencyChange}
            />

            {/*Transparent BG */}
            {(isDepositVisible || isWithdrawVisible) && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-"></div>
            )}

            <h1 className='flex flex-col text-center mt-[-100px] mb-[30px] text-7xl font-bold bg-gradient-to-r from-[#4D4DFF] vie-[#0000CD] to-[#00006B] text-transparent bg-clip-text' onChange={() => {setBalance}}>
                <span className='text-[80px]'>BALANCE</span>
                {currency === 'Lek' ? 
                `${balance} ${currency} ` : `${currency} ${balance}`}
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