'use client'

import React, { useState } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useLocalStorage from '@/lib/useLocalStorage';

import { Mic } from 'lucide-react';
import OldTranscript from './OldTranscript';
import Button from './Button';

const SpeakRecognition = () => {


    const [transcriptHistory, setTranscriptHistory] = useLocalStorage('transcript', []);
    
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    

    const saveTranscript = () => {
        setTranscriptHistory((t: string[]) => ([...t, transcript]));
    }

    const clearDialog = () => {
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
            
            <div className='flex flex-col items-center w-[450px] h-[200px] p-5 bg-neutral-900 rounded-[20px] text-white text-2xl overflow-auto scrollbar-hide'>
                <div className="flex-1 overflow-auto scrollbar-hide">{transcript}</div>
                <div className="static mt-auto">
                    <Button 
                        name='Clear' 
                        size='w-[100px] h-[30px]'
                        onClick={clearDialog}
                    />
                </div>
            </div>

            {transcriptHistory.length === 0 ? (
                <></>
            ):(
                <div className='flex flex-col items-center'>

                    <hr className='w-[800px] border-t border-[#0086D1] mt-8' />
                    <h1 className='m-5 text-4xl font-bold bg-gradient-to-r from-[#0086D1] to-[#FF002B] bg-clip-text text-transparent'>Transcript History</h1>

                    <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1'>
                        
                        {transcriptHistory.map((text: string, index: number) => (
                            <OldTranscript key={index} transcript={text} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )

}

export default SpeakRecognition

