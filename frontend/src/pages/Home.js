
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/footer'
import Categories from '../components/Categories'
export const Home = () => {
  return (
    <div>
        <Navbar />
        <Announcement />
        <Slider />
        <Categories />
        {/* <Footer /> */}
    </div>
  )
}
