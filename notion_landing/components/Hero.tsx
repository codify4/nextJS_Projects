import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className='flex flex-col mt-5 items-center justify-center text-center'>
      <h1 className='flex flex-col mx-auto text-[65px] font-bold text-center'>
        Write, plan, share.
        <br/>
        With AI at your side.
      </h1>

      <h2 className='mt-4 mx-auto text-[23px] font-semibold'>Notion is the connected workspace where better, faster work happens.</h2>

      <div className="mt-5 mx-auto">
        <Button className="text-[16px]">Get Notion free →</Button>
        <Button className="text-[16px] text-blue-500 hover:text-blue-700" variant="link">Request a demo →</Button>
      </div>

      <Image 
        src="/home-hero.webp" 
        alt="home-hero" 
        width={700} 
        height={500}
        className="mx-auto mt-10"
      />
    </section>
  )
}

export default Hero