import React from 'react'

function ErrorCode() {
  return (
    <div className=" min-h-fit mx-auto max-w-[400px] w-full pr-5 pl-3  mt-4 overscroll-none ">
      <div className='flex items-center justify-center'>
        <img src='images\logo.png' className='object-center h-12 rounded-full'/>
        </div>
        <div class='mt-6'>
            <h2 class='mt-3 font-medium text-[189x] '> Enter OTP code</h2>
            <p className='mb-3 text-[14px]  text-gray-500 '>please introduce the six digits code sent <br/>to your email</p>
        </div>
      <div class='flex space-x-2 mt-6'>
      <input className='border w-12 h-12 border-black bg-transparent  outline-none 
      text-center text-xl transition spin-button-none ' type="number"></input>
      <input className='border w-12 h-12 border-black bg-transparent outline-none 
      text-center text-xl transition spin-button-none ' type="number"></input>
      <input className='border w-12 h-12 border-black bg-transparent outline-none 
      text-center text-xl transition spin-button-none ' type="number"></input>
      <input className='border w-12 h-12 border-black bg-transparent outline-none 
      text-center text-xl transition spin-button-none ' type="number"></input>
      <input className='border w-12 h-12 border-black bg-transparent outline-none 
      text-center text-xl transition spin-button-none ' type="number"></input>
      <input className='border w-12 h-12 border-black bg-transparent outline-none 
      text-center text-xl transition spin-button-none  ' type="number"></input>
      </div>
      <button className=' mt-[130px] text-center w-full text-[15px]  bg-[#fc7a03] text-white h-[47px] flex items-center justify-center  rounded'> 
        Continue</button>
      

    </div>
  )
}

export default ErrorCode
