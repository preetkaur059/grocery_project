import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Product from '../Product/Product'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import products from '../ProductList/ProductList'

// const [activepanel, setActivepanel] = useState(null);

// const [cart, setCart] = useState([]);

// scroll bar 
const Home = () => {

  const [searchItem, setSearchItem] = useState('');

  const handleScroll = () => {
    const section = document.getElementById('product-section');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // const handlePanel = (tabName) => {
  //   setActivepanel(prev => (prev === tabName ? null : tabName)
  //   );
  // }

  //  cart tab function

  // const addToCart = (product) => {
  //   setCart([products])

  // }

  return (
    <div>
      <Navbar
        handleScroll={handleScroll}
        setSearchItem={setSearchItem}
        // handlePanel = {handlePanel}
      />
      <Hero />
      <Category />
      <Values />
      <Product
        searchItem={searchItem}
        // addToCart = {addToCart}
      />
      <Discount />
      <Process />
      <Testimonials />
    </div>
  )
}

export default Home
