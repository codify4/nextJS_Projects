import React from 'react'
import Image from 'next/image';

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

        <h2 className='font-sans'>High Tech, High Safety</h2>
      </div>

      
    </main>
  );
}

export default Home