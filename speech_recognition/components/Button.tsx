import React from 'react'
type ButtonProps = {
    name: string;
    size: string;
    onClick?: () => void;
}
const Button = ({ name, size, onClick }: ButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className={`mt-2 ${size} rounded-[10px] bg-gradient-to-r from-[#FF002B] to-[#0086D1] text-center text-white text-xl transform transition-transform hover:scale-105`}>
                {name}
        </button>
    )
}

export default Button 