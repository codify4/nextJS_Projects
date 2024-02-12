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
    currency?: string;
    chooseCurrency?: () => void;
}
const currency = {
    ALL: "Lek",
    USD: "$",
    Euro: "€",
}
const Currency = ({currency, chooseCurrency}: CurrencyProps) => {
    const [value, setValue] = useState('');
    
    return (
        <div className="fixed top-12 left-14 sm:left-32 md:left-24 lg:left-32 xl:left-60 z-50 bg-none border-2 border-black text-xl text-black py-1 px-10 rounded-xl m-5 hover:bg-gradient-to-r hover:from-[#000080] hover:to-[#0000CD] hover:border-none hover:text-white">
            <Dialog>
                <DialogTrigger>Currency</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pick a Currency</DialogTitle>
                        <DialogDescription>
                            Choose a currency to your liking: 
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <Select value={value} onValueChange={setValue}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue>
                                    {currency[value]}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Lek">ALL</SelectItem>
                                <SelectItem value="$">USD</SelectItem>
                                <SelectItem value="€">Euro</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Currency