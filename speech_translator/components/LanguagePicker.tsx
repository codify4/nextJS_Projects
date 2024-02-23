"use client"

import React, { useState, useEffect } from 'react'
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

import { langs } from '../lib/utils.ts';

type LanguagePickerProps = {
    name: string;
    onLangSelect?: (lang: string) => void;
}

const LanguagePicker = ({ name, onLangSelect }: LanguagePickerProps) => {
// TODO: language state update and display on the trigger
  const [lang, setLang] = useState('');
  
  const handleLangChange = (language: string) => {
    setLang(language);
  }
  return (
    <div>
        <DropdownMenu>

          <DropdownMenuTrigger className={`mx-6 my-5 px-5 py-4 text-center w-[100px] rounded-[10px] text-white ${name === 'From' ? 'bg-[#FF002B]' : 'bg-[#0086D1]'}`}>
            {lang === '' ? name : lang}
          </DropdownMenuTrigger>

          <DropdownMenuContent className={`text-white rounded-[10px] overflow-y-auto max-h-[300px] scrollbar-hide ${name === 'From' ? 'bg-[#FF002B]' : 'bg-[#0086D1]'}`}>
            <DropdownMenuRadioGroup value={lang} onValueChange={handleLangChange}>
              {Object.entries(langs).map(([code, language]) => (
                <DropdownMenuRadioItem key={code} value={language} className='rounded-[5px]'>{language}</DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent> 

        </DropdownMenu>

    </div>
  )
}

export default LanguagePicker