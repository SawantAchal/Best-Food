import React, { useState } from 'react'
import { FaHamburger } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6"
import { MdOutlineFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";
import { IoMdPricetag } from "react-icons/io";
import { TbSquareArrowDownFilled } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const [nav , setNav] = useState(false)
  return (
    <nav className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
        <section className=' flex items-center'>
            <section className='cursor-pointer' onClick={() => setNav(!nav)}>
                <FaHamburger size={30} />
            </section>
            <h1 className='text-2xl sm:text-3xl lg:text-4 px-2 font-bold'>Best <span className='font-bold text-orange-600'>Eats</span></h1>
            {/* <section className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </section> */}
        </section>
        <section className='bg-gray-200 rounded-full w-[65%] flex items-centerp px-2 '>
            <FaSearch size={20} className='text-center m-2 font-bold text-3xl pt-1'/>
            <input type='text ' placeholder='search food' className='bg-transparent p-2 w-full focus:outline-none'/>
        </section>
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <card icone /> Cart
        </button>
        {/* mobile menu */}
        {nav ? <section className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></section>:''}
        
            <section className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <IoCloseSharp icon sixe={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=> setNav(!nav)}/>
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl p-4 flex'><FaTruckFast size={25} className='mr-4'/>Orders</li>
                    <li className='text-xl p-4 flex'><MdOutlineFavorite size={25} className='mr-4'/>Favorites</li>
                    <li className='text-xl p-4 flex'><FaWallet size={25} className='mr-4'/>Wallet</li>
                    <li className='text-xl p-4 flex'><IoIosHelpCircle size={25} className='mr-4'/>Help</li>
                    <li className='text-xl p-4 flex'><IoMdPricetag size={25} className='mr-4'/>Promotions</li>
                    <li className='text-xl p-4 flex'><TbSquareArrowDownFilled size={25} className='mr-4'/>Best One</li>
                    <li className='text-xl p-4 flex'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                </ul>
            </nav>
            </section>
        {/* </section> */}
    </nav>
  )
}

export default Navbar