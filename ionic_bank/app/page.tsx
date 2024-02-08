import React from 'react'
import Image from 'next/image';

import Button from './components/Button';

const Home = () => {
  return (
    <main className='flex items-start justify-center my-14 mx-14 w-9/12 h-[800px] bg-[#A9A9A9] rounded-xl'>
      <div className='flex flex-col items-center justify-center'>
        <Image 
          src='/ionic_bank_fav.png'
          width={300}
          height={300}
          alt='ionic bank'
        />

        <div className='flex flex-col items-center w-[200px] z-1'>
          <h2 className='text-4xl font-bold'>
            High <span className='bg-gradient-to-r from-[#0000CD] to-[#4D4DFF] text-transparent bg-clip-text'>Tech</span>
          </h2>
          <h2 className='text-4xl font-bold'>
             High <span className='bg-gradient-to-r from-[#0000CD] to-[#4D4DFF] text-transparent bg-clip-text'>Safety</span>
          </h2>
        </div>

        <Button />
      </div>
      
    </main>
  );
}

export default Home