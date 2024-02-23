'use client'
import { useState } from "react";
import LanguagePicker from "./LanguagePicker";


const Translate = () => {
    return (
        <div>
            <div className='inline-flex items-center justify-center mt-5 w-[500px] bg-neutral-800 rounded-xl'>
                <LanguagePicker name='From' />
                <LanguagePicker name='To' />
            </div>

            
        </div>
    );
}

export default Translate