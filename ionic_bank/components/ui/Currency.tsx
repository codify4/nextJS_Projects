import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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

const Currency = ({currency, chooseCurrency}: CurrencyProps) => {
    return (
        <Card className='flex flex-col items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] z-50 bg-white p-8 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            <CardHeader>
                <CardTitle>Choose Your Currency</CardTitle>
            </CardHeader>
            <CardContent>
                <Select>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="lek">Albanan Lek</SelectItem>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="euro">Euro</SelectItem>
                    </SelectContent>
                </Select>
            </CardContent>
            <CardFooter>
                <button className='text-xl text-black'>Proceed</button>
            </CardFooter>
        </Card>
    )
}

export default Currency