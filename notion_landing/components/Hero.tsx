import Buton from "./Buton"

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
        <Buton title="Get Notion free →"/>
        <Buton title="Request a demo →" variant="link"/>
      </div>
    </section>
  )
}

export default Hero