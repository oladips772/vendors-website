/** @format */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Registration() {
  return (
    <div class=" min-h-fit mx-auto max-w-[400px] w-full pr-5 pl-3 border mt-4 overscroll-none"> <FontAwesomeIcon icon="fa-regular fa-user" /> 
        <div mt-3>
            <h3 class='mt-3 font-medium text-[26px]' > Sign up</h3>
        <p className='mb-3 text-[11px] text-gray-500'> Create your account and set up your store.</p> 
        </div>      

        <div className='personal_details'class='flex flex-col space-y-4'>
        <input class='border p-3 border-gray-400 rounded h-[42px]' type="text" placeholder='Full Legal Name'  />
        <input className='border p-3 border-gray-400 rounded h-[42px]' type="text" placeholder='Phone Number' /> 
        <input class='border p-3 border-gray-400 rounded h-[42px]' type="text" placeholder='State' /> 
        <input class='border p-3 border-gray-400 rounded h-[42px]' type="text" placeholder='Email' /> 
        <input class='border p-3 border-gray-400 rounded h-[42px]' type="password" placeholder='Password' /> 
        </div>

   
        <button className=' mt-10 text-center w-full text-[13px]  bg-[#fc7a03] text-white h-[47px] flex items-center justify-center  rounded'
        >SIGN UP </button>
        <p class='mt-3 font-extralight text-[11px] mb-3'> By signing up you gree to ordermarts terms of service and <br/> privacy policy</p>
      
    </div>
  );
}

export default Registration;
