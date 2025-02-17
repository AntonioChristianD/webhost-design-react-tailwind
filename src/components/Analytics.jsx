import React from 'react'
import Finance from '../assets/Finance.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-14'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4 px-3' src={Finance} alt="/" />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>POWERFUL HOSTING SOLUTIONS</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Your Websites with Ease</h1>
            <p className=''>
            Experience reliable and scalable hosting for all your needs. From personal blogs to enterprise websites, our platform ensures optimal performance, robust security, and centralized control to make your hosting journey seamless.
            </p>
            <button className='bg-black hover:bg-gray-600 w-[200px] rounded-md font-medium my-6 md:mx-0 px-6 py-3 text-[#00df9a]'>Get Started</button>
          </div>
        </div>

    </div>
  )
}

export default Analytics