import LanguagePicker from '@/components/LanguagePicker'
import React from 'react'

const Home = () => {
  return (
    
    <main className='flex flex-col items-center'>

      <h1 className='text-6xl font-bold '>
        <span className='text-5xl font-bold bg-gradient-to-r from-[#FF002B] to-[#0086D1] bg-clip-text text-transparent'>Speech</span> <span className='text-5xl font-bold bg-gradient-to-r from-[#0086D1] to-[#FF002B] bg-clip-text text-transparent'>Translator</span>
      </h1>

      <div className='inline-flex items-center justify-center mt-5 w-[500px] bg-neutral-800 rounded-xl'>
        <LanguagePicker name='From' />
        <LanguagePicker name='To' />
      </div>
    </main>
  )
}

export default Home