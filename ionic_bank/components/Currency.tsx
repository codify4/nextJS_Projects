"use client"

import React, { useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type CurrencyProps = {
    onCurrencyChange: (currency: string) => void;
}
const Currency = ({ onCurrencyChange }: CurrencyProps) => {
    const [value, setValue] = useState('');

    const handleCurrencyChange = (currency: string) => {
        setValue(currency);
        onCurrencyChange(currency);
    }
    return (
        <div className="fixed top-14 z-50 bg-none text-3xl text-black font-bold py-1 px-10 rounded-xl m-5 hover:bg-gradient-to-r hover:from-[#000080] hover:to-[#0000CD] hover:text-transparent bg-clip-text hover:border-none">
            <Dialog>
                <DialogTrigger>Currency</DialogTrigger>
                <DialogContent className='flex flex-col items-center justify-center text-4xl'>
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>Choose a currency to your liking:</DialogTitle>
                    </DialogHeader>
                    <div>
                        <Select value={value} onValueChange={handleCurrencyChange}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Currency">
                                    {value}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Lek">Lek</SelectItem>
                                <SelectItem value="$">$</SelectItem>
                                <SelectItem value="€">€</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Currency