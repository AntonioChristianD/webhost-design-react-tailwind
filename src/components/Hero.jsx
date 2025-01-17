import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
    <div className='max-w-[910px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    <p className='text-[#00df9a] font-bold p-2'>Your Hosting Partner for Limitless Possibilities</p>
    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Fast & reliable Web Hosting</h1>
    <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, Flexible hosting for</p>
        <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-3 md:pl-4 '
        strings = {['Startups', 'E-Commerce', 'Enterprise']} 
        typeSpeed={120} 
        backSpeed={140} 
        loop/>
    </div>
    <p className='md:text-2xl text-xl font-bold text-gray-500'>Secure, scalable, and affordable hosting for businesses of all sizes.</p>
    <button className='bg-[#00df9a] hover:bg-green-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Get Started</button>
    </div>
    </div>
  )
}

export default Hero