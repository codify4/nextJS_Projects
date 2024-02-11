import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

import Button from './components/Button';

const Home = () => {
  return (
    <main className='flex items-start justify-center my-14 mx-14 w-9/12 h-[800px] bg-[#ffffff] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
      <section className='flex flex-col items-center justify-center'>
        <Image 
          src='/bankIonic_fv.png'
          width={300}
          height={300}
          alt='ionic bank'
        />

        <div className='flex flex-col items-center w-[200px] '>
          <h2 className='mt-4 mb-1 text-4xl font-bold'>
            High <span className='bg-gradient-to-r from-[#4D4DFF] to-[#0000CD] text-transparent bg-clip-text'>Tech</span>
          </h2>
          <h2 className='mb-3 text-4xl font-bold'>
             High <span className='bg-gradient-to-r from-[#4D4DFF] to-[#0000CD] text-transparent bg-clip-text'>Safety</span>
          </h2>
        </div>

        <Link href="/balance">
          <Button text="Join Us"/>
        </Link>

        <div className='flex flex-col absolute bottom-[360px] left-auto items-center text-3xl font-bold '>
          <div>
            <span className='bg-gradient-to-r from-[#4D4DFF] to-[#0000CD] text-transparent bg-clip-text '>Deposit </span> 
            and <span className='bg-gradient-to-r from-[#4D4DFF] to-[#0000CD] text-transparent bg-clip-text'>Withdraw</span>
          </div>
          Instantly...
        </div>
      </section>
    </main>
  );
}

export default Home