
type ButtonProps = {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {

  return (
    <button className='flex bg-none border-2 border-black text-3xl text-black py-1 px-10 rounded-xl m-5 transition-transform transform  hover:-translate-y-2 hover:bg-gradient-to-r from-[#000080] to-[#0000CD] hover:border-none hover:text-white'
    onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button