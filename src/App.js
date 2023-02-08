import React, { useEffect } from "react";
import Footer from './components/Footer'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import scrollreveal from "scrollreveal";
import Hero from "./components/Hero";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Hero/>
    
    
    <Footer/>
    </>
  )
}


