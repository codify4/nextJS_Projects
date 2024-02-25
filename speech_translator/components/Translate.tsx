'use client'
import { useState } from "react";

import LanguagePicker from "./LanguagePicker";
import translate from "google-translate-api";

// lang picker 2 lang states props??
// translate library use the states in the translate()


const Translate = () => {

    const [fromLang, setFromLang] = useState('');
    const [toLang, setToLang] = useState('');

    const handleLangSelect = (lang: string, name: string) => {
        if(name === "From") {
            setFromLang(lang);
          }
          else if(name === "To") {
            setToLang(lang);
          }
    }

    
    return (
         <div className="flex flex-col items-center">

            <div className='inline-flex items-center justify-center mt-5 w-[500px] bg-neutral-800 rounded-xl'>
                <LanguagePicker name='From' onLangSelect={handleLangSelect} />
                <LanguagePicker name='To' onLangSelect={handleLangSelect} />
            </div>

            <div className="flex items-center justify-centerw-[800px] h-[300px] m-6 px-3 py-2 bg-neutral-800 rounded-[20px]">
                <div className="inline-flex gap-6">
                    <div className="flex w-[360px] h-[280px] p-4 rounded-[15px] bg-neutral-700 text-white">
                        how you doing
                    </div>
                    <div className="flex w-[360px] h-[280px] p-4 rounded-[15px] bg-neutral-700 text-white">
                        shka bane e la
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Translate