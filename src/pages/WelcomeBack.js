import React from 'react'

function WelcomeBack() {
  return (
    <div  className="  min-h-fit mx-auto max-w-[400px] w-full pr-5 pl-3  mt-4 overscroll-none">
     <div className='flex items-center justify-center'>
        <img src='images\logo.png' className='object-center h-12 rounded-full'/>
        </div>
        <div className='mt-6'>
            <h2 class='mt-3 font-medium text-[189x] flex items-center justify-center'> Welcome back!</h2>
            <p className=' text-[14px]  text-gray-500 flex items-center justify-center '> Login back into your ordermart account</p>
     </div>
     <div className='personal_details flex flex-col space-y-4 mt-5'>
      <input class='border p-3 border-gray-400 rounded h-[42px]' type="email" placeholder='email' /> 
      <input class='border p-3 border-gray-400 rounded h-[42px]' type="password" placeholder='password' /> 
     </div>
     <button className=' mt-9 text-center w-full text-[15px]  bg-[#fc7a03] text-white h-[47px] flex items-center justify-center  rounded'> 
      Login</button>
      <div className='flex'>
      <p className='mt-3 text-[9px] text-orange-400 mb-3'> Forgot password?</p>
      <p className='mt-3  text-orange-400 mb-3  ml-[200px] text-[9px]'> Create an account?</p>
      </div>
      <p className='mt-5 font-extralight flex items-center justify-center text-[12px]'> Start selling on ordermart.</p>
      

    </div>
  )
}

export default WelcomeBack
