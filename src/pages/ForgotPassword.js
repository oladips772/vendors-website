import React from 'react'

function ForgotPassword() {
  return (
    <div className=" min-h-fit mx-auto max-w-[400px] w-full pr-5 pl-3  mt-4 overscroll-none">
        <div className='flex items-center justify-center'>
        <img src='images\logo.png' className='object-center h-12 rounded-full'/>
        </div>
        <div class='mt-6'>
            <h2 class='mt-3 font-medium text-[189x] flex items-center justify-center'> FORGOT PASSWORD</h2>
            <p className=' text-[14px]  text-gray-500 '>Enter your email address so we can send you a request </p> <p className='text-[14px]  text-gray-500 flex items-center justify-center'> password otp token.</p>
            
        </div>
        <div className='personal_details'class='flex flex-col space-y-4'>
        <input class='border p-3 border-gray-400 rounded h-[42px]' type="email" placeholder='email' /> 
        </div>
        <button className=' mt-10 text-center w-full text-[15px]  bg-[#fc7a03] text-white h-[47px] flex items-center justify-center  rounded'> 
        Continue</button>
        <p className='mt-3 text-[11px] text-orange-400 mb-3'> Sign in.</p>
    </div>
  )
}

export default ForgotPassword
