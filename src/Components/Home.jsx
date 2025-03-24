import React, { useState } from 'react'
import Navbar from './Navbar'
import Bottom from './Bottom'
import Base from './Base'
import Footer from './Footer'
import Cart from './Cart'

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isCartOpen, setCartIsOpen] = useState(false);
  return (
    <div className='bg-gray-200'>
      <Navbar isCartOpen={isCartOpen} setCartIsOpen={setCartIsOpen}/>
      {!isCartOpen && <Bottom/>}
      {isCartOpen && <Cart />}
      <Footer scrollToTop={scrollToTop}/>
    </div>
  )
}

export default Home
