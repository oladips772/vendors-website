import React from 'react'
import { IoMdHome } from "react-icons/io";
import { RiCoupon3Line } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { MdForwardToInbox } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { IoMdBatteryFull } from "react-icons/io";
import { CiShop } from "react-icons/ci";


function SideBar() {
  
  return (
    <div className='flex mr-[750px] mt-[20px] '>
      <div className='shadow-2xl min-h-fit mx-auto max-w-[300px] w-full rounded  '>
        <div className='items-center flex space-x-4 '>
        <img src='images\logo.png' className=' h-[40px] rounded-full mt-[20px] ml-[20px] mb-[10px]'/>
        <p className='text-[24px]'>ORDERMAT</p>
        </div>
      <div className='flex border flex-col ml-1 mb-[30px] text-dark text-[17px]'>
        <p className='ml-[12px]'> DASHBOARD</p>
        <div className=' pb-[30px] '>
         <ul className='flex  p-2  rounded h-[40px] w-[260px] text-[20px] hover:bg-[#fc7a03] hover:text-white'><IoMdHome className='text-orange-400 pr-[10px] mb-[33px] text-[30px] hover:text-white '/>HOME</ul>
         <ul className='flex  p-2  rounded h-[40px] w-[260px] text-[20px] hover:bg-[#fc7a03] hover:text-white'><CiShop className='text-orange-400 pr-[10px] mb-[33px] text-[30px] hover:text-white'/>Your Stores</ul>
         <ul className='flex  p-2  rounded h-[40px] w-[260px] text-[20px] hover:bg-[#fc7a03] hover:text-white'><IoMdBatteryFull className='text-orange-400 pr-[10px] mb-[33px] text-[30px] hover:text-white '/>Orders</ul>
        </div>
        <p className='ml-[12px]'>OTHERS</p>
        <div>
         <ul className='flex  p-2  rounded h-[40px] w-[260px] text-[20px] hover:bg-[#fc7a03] hover:text-white'><RiCoupon3Line className='text-orange-400 pr-[10px] mb-[33px] text-[30px] hover:text-white'/>New Coupon</ul> 
         <ul className='flex  p-2  rounded h-[40px] w-[260px] text-[20px] hover:bg-[#fc7a03] hover:text-white'><MdOutlinePayment className='text-orange-400 pr-[10px] mb-[33px] text-[30px] hover:text-white'/>Payment</ul>
         <ul className='flex  p-2  rounded h-[40px] w-[260px] text-[20px] hover:bg-[#fc7a03] hover:text-white'><MdForwardToInbox className='text-orange-400 pr-[10px] mb-[33px] text-[30px] hover:text-white '/>Inbox</ul>
         <ul className='flex  p-2  rounded h-[40px] w-[260px] text-[20px] hover:bg-[#fc7a03] hover:text-white'><MdOutlineProductionQuantityLimits className='text-orange-400 pr-[10px] mb-[33px] text-[30px] hover:text-white '/>Products</ul>

        </div>
        
        
        
      </div>
      <div className='flex space-x-12'>
        <ul className='ml-[23px]'><MdAccountCircle className='ml-[26px] ' />Account</ul>
        <ul > <IoIosHelpCircleOutline className='ml-[19px]' /> Help</ul>
      </div>


      </div>
      
        
    </div>
  )
}

export default SideBar
