import React, { useEffect, useState } from 'react'
import { IoHeartSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () =>{
        setShowMenu(!showMenu);
    }

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect (()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY>10)
        }
        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll);
    },[])

    return (
        <header className={`bg-white z-99 fixed top-0 left-0 right-0 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.2)]':""} `}>
            <nav className={`max-w-350  flex m-auto md:h-[14vh] h-[12vh] px-10 items-center justify-between`}>
                <div className="">
                    <a href="#" className='text-3xl font-bold'>Gr<span className='text-orange-500'>O</span>cify</a>
                </div>
                <div className="md:flex hidden gap-8 text-xl">
                    <a href="Home" className='font-semibold tracking-wider text-orange-500'>Home</a>
                    <a href="About Us" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                    <a href="Process" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    <a href="Contact Us" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Contact Us</a>
                </div>
                {/* nav action  */}
                <div className="flex items-center gap-x-5">
                    <div className="md:flex hidden border-orange-500 border-2 rounded-full">
                        <input type="text" name='text' id='text' className='flex-1 h-[5vh] px-3 focus:outline-none' placeholder='Search...' autoComplete='off' />
                        <button className='h-10 w-10 text-white flex justify-center items-center rounded-full text-xl bg-gradient-to-b from-orange-400 to-orange-500 '>
                            <FaSearch />
                        </button>
                    </div>
                    <a href="#" className='text-zinc-800 text-2xl'>
                        <IoHeartSharp />
                    </a>
                    <a href="#" className='text-zinc-800 text-2xl'>
                        <RiShoppingBag4Fill />
                    </a>
                    <a href="#"  onClick={toggleMenu} className= {`text-zinc-800 text-2xl md:hidden ${showMenu ? '<BiMenuAltRight />' : '<GiHamburgerMenu />' }`}>
                        <GiHamburgerMenu />
                    </a>
                </div>

                {/* mobile menu */}
               
                <div className = {`flex ${showMenu ? 'left-1/2' : ''} flex-col absolute bg-orange-500/25 backdrop-blur-2xl rounded-lg p-10 items-center justify-center md:hidden top-30 -left-full transform -translate-x-1/2 ease-in-out delay-75 transition-all duration-300 gap-12 text-2xl`}>
                    <a href="Home" className='font-semibold tracking-wider text-orange-500'>Home</a>
                    <a href="About Us" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                    <a href="Process" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    <a href="Contact Us" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Contact Us</a>
                
                <div className="flex md:hidden border-orange-500 border-2 rounded-full">
                        <input type="text" name='text' id='text' className='flex-1 h-[5vh] px-3 focus:outline-none' placeholder='Search...' autoComplete='off' />
                        <button className='h-10 w-10 text-white flex justify-center items-center rounded-full text-xl bg-gradient-to-b from-orange-400 to-orange-500 '>
                            <FaSearch />
                        </button>
                    </div>
               </div>
            </nav>
        </header>
    )
}

export default Navbar
