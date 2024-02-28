'use client'

import React, { useState, useEffect } from 'react';

import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { Mic } from 'lucide-react';

import OldTranscript from './OldTranscript';

const SpeakRecognition = () => {

    const [transcriptHistory, setTranscriptHistory] = useState(['']);
    const [showTranscriptHistory, setShowTranscriptHistory] = useState(false);
    
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const saveTranscript = () => {
        setTranscriptHistory(t => ([...t, transcript]));
        resetTranscript();
    }

    const handleMic = () => {
        if(listening) {
            SpeechRecognition.stopListening();
            saveTranscript();
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

            <hr className='w-[800px] border-t border-[#0086D1] mt-8' />

            {transcriptHistory.length > 0 && (
                <div>
                    <h1 className='text-4xl font-bold bg-gradient-to-r from-[#0086D1] to-[#FF002B] bg-clip-text text-transparent'>Transcript History</h1>
                    {transcriptHistory.map((text, index) => (
                        <OldTranscript key={index} transcript={text} />
                    ))}
                </div>
            )}
        </div>
    )

}

export default SpeakRecognition

