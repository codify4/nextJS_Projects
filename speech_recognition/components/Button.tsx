import React from 'react'
type ButtonProps = {
    name: string;
}
const Button = ({ name }: ButtonProps) => {
    return (
        <button className='hover:bg-gradient-to-r from-[#FF002B] to-[#0086D1] text-white'>{name}</button>
    )
}

export default Button 