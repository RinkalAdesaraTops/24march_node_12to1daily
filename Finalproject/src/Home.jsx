import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Slider from './Slider'
import Products from './Products'
import Footer from './Footer'
import Banner from './Banner'

const Home = () => {
  return (
    <div className='super_container'>
      <Header />
      <Menu />
      <Slider />
      <Banner />
      <Products />
      <Footer />
    </div>
  )
}

export default Home
