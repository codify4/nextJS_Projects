import React from 'react'
import Image from 'next/image';

import Button from './components/Button';

const Home = () => {
  return (
    <main className='flex items-start justify-center my-14 mx-14 w-9/12 h-[800px] bg-[#A9A9A9] rounded-xl'>
      <section className='flex flex-col items-center justify-center'>
        <Image 
          src='/bankIonic_fv.png'
          width={300}
          height={300}
          alt='ionic bank'
        />

        <div className='flex flex-col items-center w-[200px] '>
          <h2 className='mt-4 mb-1 text-4xl font-bold'>
            High <span className='bg-gradient-to-r from-[#0000CD] to-[#4D4DFF] text-transparent bg-clip-text'>Tech</span>
          </h2>
          <h2 className='mb-3 text-4xl font-bold'>
             High <span className='bg-gradient-to-r from-[#0000CD] to-[#4D4DFF] text-transparent bg-clip-text'>Safety</span>
          </h2>
        </div>

        <Button text="Join Us"/>

        <div className='flex flex-col items-center text-3xl font-bold'>
          <span className='bg-gradient-to-r from-[#0000CD] to-[#4D4DFF] text-transparent bg-clip-text'>Deposit</span> 
          and 
          <span className='bg-gradient-to-r from-[#0000CD] to-[#4D4DFF] text-transparent bg-clip-text'>Withdraw</span>
          instantly with 
          <span className='bg-gradient-to-r from-[#0000CD] to-[#4D4DFF] text-transparent bg-clip-text'>no comission!</span>
        </div>
      </section>

      
      
    </main>
  );
}

export default Home