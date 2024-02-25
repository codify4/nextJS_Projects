"use client"

import React, { useState, useEffect } from 'react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

import { langs } from '../lib/utils.ts';

type LanguagePickerProps = {
    name: string;
    onLangSelect?: (lang: string, name: string) => void;
}

const LanguagePicker = ({ name, onLangSelect }: LanguagePickerProps) => {
// TODO: language state update and display on the trigger
  const [fromLang, setFromLang] = useState('');
  const [toLang, setToLang] = useState('');
  
  
  const handleLangChange = (language: string) => {
    if(name === "From") {
      setFromLang(language);
      if(onLangSelect) {
        onLangSelect(language, "From");
      }
    }
    else if(name === "To") {
      setToLang(language);
      if(onLangSelect) {
        onLangSelect(language, "To");
      }
    }
  }

  const lang = name === "From" ? fromLang : toLang;
  
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