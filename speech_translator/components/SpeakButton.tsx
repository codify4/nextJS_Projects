'use client'

import React, { useState } from 'react';

import { Mic, AudioLines } from 'lucide-react';

const SpeakButton = () => {

    const [isClicked, setIsClicked] = useState(false);
    
    return (
    
        <button 
            onClick={() => setIsClicked(!isClicked)} 
            className={`flex items-center justify-center m-14 w-[70px] h-[70px] rounded-full bg-gradient-to-r from-[#FF002B] to-[#0086D1] text-white transform transition-transform hover:scale-110 ease-in-out ${isClicked && 'animation-pulse'}`}>
                <Mic />
        </button>
    )
}

export default SpeakButton