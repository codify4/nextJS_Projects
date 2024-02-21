"use client"

import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

type LanguagePickerProps = {
    name: string;
    onLangChange?: (lang: string) => void;
}

const LanguagePicker = ({ name, onLangChange }: LanguagePickerProps) => {

  const [value, setValue] = useState('');
  
  const handleLangChange = (lang: string) => {
    setValue(lang);
    onLangChange(lang);
  }
  return (
    <div>
        <DropdownMenu >
            {
              name === 'From' ? (
                <DropdownMenuTrigger className='mx-6 my-5 px-5 py-4 text-center w-[100px] rounded-[10px] text-white bg-[#FF002B]'>
                  {name}
                </DropdownMenuTrigger>
              ): (
                <DropdownMenuTrigger className='mx-6 my-5 px-5 py-4 text-center w-[100px] rounded-[10px] text-white bg-[#0086D1]'>
                  {name}
                </DropdownMenuTrigger>
              )
            }
            {name === 'From' ? (
                <DropdownMenuContent className='bg-[#FF002B] text-white rounded-[10px]'>
                  <DropdownMenuRadioGroup value={value} onValueChange={handleLangChange}>
                    <DropdownMenuRadioItem value="top" className='rounded-[5px]'>Top</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom" className='rounded-[7px]'>Bottom</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right" className='rounded-[7px]'>Right</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              ): (
                <DropdownMenuContent className='bg-[#0086D1] text-white rounded-[10px]'>
                          <DropdownMenuRadioGroup value={value} onValueChange={handleLangChange}>
                            <DropdownMenuRadioItem value="top" className='rounded-[7px]'>Top</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="bottom" className='rounded-[7px]'>Bottom</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="right" className='rounded-[7px]'>Right</DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              )
            }
        </DropdownMenu>

    </div>
  )
}

export default LanguagePicker