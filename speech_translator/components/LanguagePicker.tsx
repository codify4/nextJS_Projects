import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Button from './Button';

type LanguagePickerProps = {
    name: string;
    fromLang?: string;
    toLang?: string;
}

const LanguagePicker = ({ name, fromLang, toLang }: LanguagePickerProps) => {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger className='mx-6 my-5 px-5 py-4 text-center w-[100px] bg-neutral-700 rounded-[10px] text-white active:'>
                <Button name={name}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-neutral-700 text-white rounded-[10px]'>
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuItem className='rounded'>English</DropdownMenuItem>
                <DropdownMenuItem className='rounded'>German</DropdownMenuItem>
                <DropdownMenuItem className='rounded'>Albanian</DropdownMenuItem>
                <DropdownMenuItem className='rounded'>Russian</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}

export default LanguagePicker