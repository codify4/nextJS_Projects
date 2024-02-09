type ButtonProps = {
  text: string;
}

const Button = ({ text,}: ButtonProps) => {

  return (
    <button className='flex bg-gradient-to-r from-[#000080] to-[#0000CD] text-3xl text-white p-2 rounded-xl m-5 transition-transform transform  hover:-translate-y-2'>
      {text}
    </button>
  )
}

export default Button