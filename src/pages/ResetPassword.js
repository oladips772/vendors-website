import React from 'react'


function ResetPassword() {
  return (
    <div className="w-fit min-h-fit mx-auto max-w-[400px] w-full pr-5 pl-3  mt-4 overscroll-none">
        <div className='flex items-center justify-center'>
        <img src='images\logo.png' className='object-center h-12 rounded-full'/>
        </div>
        <div class='mt-6'>
            <h2 class='mt-3 font-medium text-[189x] flex items-center justify-center'> Reset Password!</h2>
            <p className='mb-3 text-[14px]  text-gray-500 flex items-center justify-center'>Reset your password</p>
        </div>
        <div className='personal_details'class='flex flex-col space-y-4'>
        <input class='border p-3 border-gray-400 rounded h-[42px]' type="password" placeholder='Password' /> 
        <input className='border p-3 border-gray-4oo rounded h-[42px]' type="password" placeholder='Confirm password'></input>
        </div>
        <button className=' mt-10 text-center w-full text-[13px]  bg-[#fc7a03] text-white h-[47px] flex items-center justify-center  rounded'> 
        Reset</button>
        
       
      
    </div>
  )
}

export default ResetPassword
