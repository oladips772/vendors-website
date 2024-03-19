import React from 'react'

function CreateAccount() {
  return (
    <div className=" min-h-fit mx-auto max-w-[400px] w-full pr-5 pl-3 mt-4 overscroll-none">
     <div className='flex items-center justify-center'>
        <img src='images\logo.png' className='object-center h-12 rounded-full'/>
     </div>
     <div mt-3>
        <h3 class='mt-3 font-medium text-[16px] flex items-center justify-center' > Creat your account!</h3>
        <p className='mb-3 text-[11px] text-gray-500 flex items-center justify-center'> Create your ordermart account.</p> 
     </div> 
     <div className='personal_details flex flex-col space-y-4 mt-5'>
      <input className='border p-3 border-gray-400 rounded h-[42px]' type="text" placeholder='Username'  />
      <input className='border p-3 border-gray-400 rounded h-[42px]' type="text" placeholder='Email' /> 
      <div className=''>
      <p className='text-[9px]'>Phone Number</p>
      <input className='border p-3 border-gray-400 rounded h-[42px] w-full' type="text" /> 
      </div>  
      <input className='border p-3 border-gray-400 rounded h-[42px]' type="text"  /> 
      s   
      <input className='border p-3 border-gray-400 rounded h-[42px]' type="password" placeholder='Password' /> 
     </div>
     <button className=' mt-10 text-center w-full text-[13px]  bg-[#fc7a03] text-white h-[47px] flex items-center justify-center  rounded'
        >Register </button>
     <div className='flex'>
        <p className='mt-3 text-[9px] text-orange-400 mb-3'> Forgot password?</p>
        <p className='mt-3  text-orange-400 mb-3  ml-[200px] text-[9px]'> Create an account?</p>
     </div>
      <p className='mt-5 font-extralight flex items-center justify-center text-[12px]'> Start selling on ordermart.</p>
      
      
    </div>
  )
}

export default CreateAccount
