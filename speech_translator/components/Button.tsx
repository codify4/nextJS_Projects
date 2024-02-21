import React from 'react'
type ButtonProps = {
    name: string;
    variant?: string;
}
const Button = ({ name, variant }: ButtonProps) => {
    return (
        <button className='hover:bg-gradient-to-r from-red-500 to-blue-500 text-white'>{name}</button>
    )
}

export default Button 