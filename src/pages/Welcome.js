import React from 'react'

function Welcome() {
  return (
    <div className="  min-h-fit mx-auto max-w-[400px] w-full pr-5 pl-3  mt-4 overscroll-none">
    <div className='flex items-center justify-center'>
    <img src='images\logo.png' className='object-center h-12 rounded-full'/>
    </div>
    <div class='mt-6'>
        <h2 class='mt-3 font-medium text-[189x] flex items-center justify-center'> Welcome back</h2>
        <p className=' text-[14px]  text-gray-500 '>Sign in and start managing your orders. </p>
    </div>
     <div className='personal_details'class='flex flex-col space-y-4'>
     <input class='border p-3 border-gray-400 rounded h-[42px]' type="email" placeholder='email' /> 
     <input class='border p-3 border-gray-400 rounded h-[42px]' type="password" placeholder='password' /> 

     <div className='flex'>
        <p className='  text-[9px]'> SIGN UP HERE.</p> <p className=' ml-[200px] text-[9px]'>FORGOT PASSWORD?</p>
     </div>
    
    </div>

    <button className=' mt-9 text-center w-full text-[15px]  bg-[#fc7a03] text-white h-[47px] flex items-center justify-center  rounded'> 
    SIGN IN</button>
    <p className='mt-3 ml-[250px] text-[11px]  mb-3'> I WANT TO ORDER.</p>
</div>
  )
}

export default Welcome
