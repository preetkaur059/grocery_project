import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='bg-zinc-200 py-15 mt-15'>
        <div className="max-w-[1400px]  mx-auto px-10 flex flex-wrap ">
            <div className="flex-2">
                <div className="">
                    <a href="#" className='text-3xl font-bold'>Gr<span className='text-orange-500'>O</span>cify</a>
                </div>
                    <p className='text-zinc-800 mt-6 max-w-[350px]'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <p className='text-zinc-900 mt-6'>2026 &copy; All Rights Reserved</p>
            </div>

            <ul className='flex-1'>
                <li>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                </li>
                <li className='mt-6'>
                    <a href="" className='text-zinc-900 hover:text-orange-500'>About</a>
                </li>
                <li className='mt-6'>
                    <a href="" className='text-zinc-900 hover:text-orange-500'>FAQ's</a>
                </li>
            </ul>
            <ul className='flex-1'>
                <li>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                </li>
                <li className='mt-6'>
                    <a href="" className='text-zinc-900 hover:text-orange-500'>Support Center</a>
                </li>
                <li className='mt-6'>
                    <a href="" className='text-zinc-900 hover:text-orange-500'>Feedback</a>
                </li>
                <li className='mt-6'>
                    <a href="" className='text-zinc-900 hover:text-orange-500'>Contact us</a>
                </li>
            </ul>
           

            <div className="flex-1">
                <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
                <p className='text-zinc-800 mt-6'>Questions Or Feedback? <br/> We'd love to hear from you.</p>
                <div className="bg-white rounded-lg mt-6 flex p-1">
                    <input type="email" name='email' id ='email' autoComplete='off' placeholder='Email Address' className='h-[5vh]  pl-4 flex-1 focus:outline-none ' />
                    <button className='bg-gradient-to-b from-orange-400 to-orange-600 p-2 text-white text-2xl rounded-lg hover:to-orange-800 cursor-pointer'> <IoIosArrowForward /></button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
