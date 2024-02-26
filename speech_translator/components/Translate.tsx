'use client'
import { useEffect, useState } from "react";

import LanguagePicker from "./LanguagePicker";
import { Translator } from 'google-translate-api-x';

// translate library use the states in the translate()

const Translate = () => {

    const [fromLang, setFromLang] = useState('');
    const [toLang, setToLang] = useState('');
    const [translation, setTranslation] = useState('');
    
    useEffect(() => {
        if(fromLang && toLang) {
            tranlateText();
        }
    }, [fromLang, toLang])

    const tranlateText = async () => {
        try {
            const translator = new Translator({ from: fromLang, to: toLang, forceBatch: true, tld: 'en'});
            const translatedText = await translator.translate('how you doing');
            setTranslation(translatedText.text);
        } catch (error) {
            console.error("Translation Error: ", error);
        }
    }

    const handleLangSelect = (code: string, name: string) => {
        if(name === "From") {
            setFromLang(code);
          }
          else if(name === "To") {
            setToLang(code);
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
                        {translation}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Translate