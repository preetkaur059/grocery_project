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

const Home = () => {

  const [searchItem, setSearchItem] = useState('');

  const handleScroll = () => {
    const section = document.getElementById('product-section');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <Navbar
        handleScroll={handleScroll}
        setSearchItem={setSearchItem}
      />
      <Hero />
      <Category />
      <Values />
      <Product
        searchItem={searchItem}
      />
      <Discount />
      <Process />
      <Testimonials />
    </div>
  )
}

export default Home
