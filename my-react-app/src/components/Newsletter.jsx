import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white px-4 w-full py-16'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips and tricks tp optimize your flows?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>

            <div classname='my-4'>
                <div className='flex flex-col sm:flex-row w-full justify-between items-center'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter your email'/>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto ml-4 px-6 py-3 text-black'>Notify me</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Newsletter
