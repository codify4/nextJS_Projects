'use client'

import React, { useState } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import { Mic } from 'lucide-react';

const SpeakButton = () => {

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const handleMic = () => {
        if(listening) {
            SpeechRecognition.stopListening();
        }
        else if(!listening) {
            SpeechRecognition.startListening({ continuous: true });
        }
    }
    
    return (
    
        <div className='flex flex-col items-center justify-center '>
            <button 
                onClick={handleMic}
                className={`static flex items-center justify-center m-14 w-[70px] h-[70px] rounded-full bg-gradient-to-r from-[#FF002B] to-[#0086D1] text-white transform transition-transform hover:scale-110 ease-in-out ${listening && 'animation-pulse'}`}>
                    <Mic />
            </button>
            
            <div className='flex flex-col w-[450px] h-[200px] p-5 bg-neutral-900 rounded-[20px] text-white text-2xl overflow-auto scrollbar-hide'>
                {transcript}
            </div>
        </div>
    )

}

export default SpeakButton

