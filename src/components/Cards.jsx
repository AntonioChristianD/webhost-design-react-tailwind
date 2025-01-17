import React from 'react'
import Single from '../assets/Account.png'
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Personal Web Hosting</h2>
            <p className='text-center text-4xl font-bold'>US$4.39</p>
            <p className='text-center text-sm font-medium'>ex. GST/Month</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1 free domain name</p>
                <p className='py-2 border-b mx-8'>100 GB disk space</p>
                <p className='py-2 border-b mx-8'>Unlimited FTP Access</p>
            </div>
            <button className='bg-[#00df9a] hover:bg-green-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Order Now</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Professional Web Hosting</h2>
            <p className='text-center text-4xl font-bold'>US$7.69</p>
            <p className='text-center text-sm font-medium'>ex. GST/Month</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>All Features from Personal Plan</p>
                <p className='py-2 border-b mx-8'>250 GB disk space</p>
                <p className='py-2 border-b mx-8'>Unlimited SSH Access</p>
            </div>
            <button className='bg-[#00df9a] hover:bg-green-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Order Now</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Performance Web Hosting</h2>
            <p className='text-center text-4xl font-bold'>US$13.19</p>
            <p className='text-center text-sm font-medium'>ex. GST/Month</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>All Features from Professional Plan</p>
                <p className='py-2 border-b mx-8'>500 GB disk space</p>
                <p className='py-2 border-b mx-8'>Web Cloud databases 512 MB RAM</p>
                     
            </div>
            <button className='bg-[#00df9a] hover:bg-green-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Order Now</button>
        </div>
        </div>

    </div>
  )
}

export default Cards