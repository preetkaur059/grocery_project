import React, { useEffect, useState } from 'react'
import { IoHeartSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const { totalItems, wishlist, setSearchItem, cartCount } = useContext(StoreContext);

    // scrollbar with shadow 
    const handleScroll = () => {
        const section = document.getElementById('product-section');

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={`bg-white z-99 fixed top-0 left-0 right-0 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.2)]' : ""} `}>
            <nav className={`max-w-350  flex m-auto md:h-[14vh] h-[12vh] px-10 items-center justify-between`}>
                <div className="">
                    <Link to="/" className='text-3xl font-bold'>Gr<span className='text-orange-500'>O</span>cify</Link>
                </div>
                <div className="md:flex hidden gap-8 text-xl">

                    <NavLink to="/" className={({ isActive }) => `font-semibold tracking-wider ${isActive ? "text-orange-500" : "text-zinc-800 hover:text-orange-500" }`} >
                        Home
                    </NavLink>

                    <NavLink to="/AboutUs" className={({ isActive }) => `font-semibold tracking-wider ${isActive ? "text-orange-500" : "text-zinc-800 hover:text-orange-500" }`} >
                        About Us
                    </NavLink>

                    <NavLink to="/ProcessPage" className={({ isActive }) => `font-semibold tracking-wider ${isActive ? "text-orange-500" : "text-zinc-800 hover:text-orange-500" }`} >
                        Process
                    </NavLink>

                    <NavLink to="/Contact" className={({ isActive }) => `font-semibold tracking-wider ${isActive ? "text-orange-500" : "text-zinc-800 hover:text-orange-500" }`} >
                        Contact Us
                    </NavLink>

                </div>
                {/* nav action  */}
                <div className="flex items-center gap-x-5">
                    <div className="md:flex hidden border-orange-500 border-2 rounded-full">

                        {/* search bar  */}
                        <input type="text" name='text' id='text' className='flex-1 h-[5vh] px-3 focus:outline-none'
                            onFocus={handleScroll}
                            onChange={(e) => setSearchItem(e.target.value)}
                            placeholder='Search...' autoComplete='off' />
                        <button className='h-10 w-10 text-white flex justify-center items-center rounded-full text-xl bg-gradient-to-b from-orange-400 to-orange-500 '>
                            <FaSearch />
                        </button>
                    </div>

                    {/* wishlist */}
                    <Link to='/wishlist' className='text-zinc-800 relative text-3xl'>
                        <IoHeartSharp />
                        {
                            wishlist.length > 0 && (
                                <span className='flex justify-center items-center text-lg bg-red-600 text-white w-5 h-5 p-3 rounded-full absolute left-4 top-4'>{wishlist.length}</span>)
                        }
                    </Link>

                    {/* cart */}
                    <Link to='/cart' className='text-zinc-800 relative text-3xl'>
                        <RiShoppingBag4Fill />
                        {
                            cartCount > 0 &&
                            <span className='flex justify-center items-center text-lg bg-red-600 text-white w-5 h-5 p-3 rounded-full absolute left-4 top-4'>{cartCount}</span>
                        }
                    </Link>

                    {/* user */}
                    {/* <button className='text-zinc-800 text-2xl'>
                        <FaUserAlt />
                    </button> */}
                    <button onClick={toggleMenu} className={`text-zinc-800 text-2xl md:hidden ${showMenu ? '<BiMenuAltRight />' : '<GiHamburgerMenu />'}`}>
                        <GiHamburgerMenu />
                    </button>
                </div>

                {/* mobile menu */}

                <div className={`flex ${showMenu ? 'left-1/2' : ''} flex-col absolute bg-orange-500/25 backdrop-blur-2xl rounded-lg p-10 items-center justify-center md:hidden top-30 -left-full transform -translate-x-1/2 ease-in-out delay-75 transition-all duration-300 gap-12 text-2xl`}>
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
