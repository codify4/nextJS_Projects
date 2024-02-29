import React from 'react'
type ButtonProps = {
    name: string;
    onClick?: () => void;
}
const Button = ({ name, onClick }: ButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className='mt-2 w-[100px] h-[35px] rounded-[10px] bg-gradient-to-r from-[#FF002B] to-[#0086D1] text-white text-xl transform transition-transform hover:scale-105'>
                {name}
        </button>
    )
}

export default Button 