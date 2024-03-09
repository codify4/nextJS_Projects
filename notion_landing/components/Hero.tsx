import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className='flex flex-col mt-5 justify-center text-center'>
      <h1 className='flex flex-col text-[65px] font-bold text-center'>
        Write, plan, share.
        <br/>
        With AI at your side.
      </h1>

      <h2 className='mt-4 text-[23px] font-semibold'>Notion is the connected workspace where better, faster work happens.</h2>

      <div className="mt-5">
        <Button className="text-[16px]">Get Notion free →</Button>
        <Button className="text-[16px] text-blue-600 hover:text-blue-700" variant="link">Request a demo →</Button>
      </div>
    </section>
  )
}

export default Hero