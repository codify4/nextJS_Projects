import React from 'react'
import Translate from '@/components/Translate'

const Home = () => {
  return (
    
    <main className='flex flex-col items-center'>

      <h1 className='text-6xl font-bold '>
        <span className='text-5xl font-bold bg-gradient-to-r from-[#FF002B] to-[#0086D1] bg-clip-text text-transparent'>Speech</span> <span className='text-5xl font-bold bg-gradient-to-r from-[#0086D1] to-[#FF002B] bg-clip-text text-transparent'>Translator</span>
      </h1>
      
      {/* Take this to translate component */}
      <Translate />

    </main>
  )
}

export default Home