import React from 'react'
import Navbar from './Component/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from './Component/Hero';
import About from './Component/About';
import Service from './Component/Service';
import Trending from './Component/Trending';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import './App.css'


export default function App() {
  // init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Trending/>
      <Contact/>
      <Footer/>
    </div>
  )
}
