import React from 'react'
import Hero from '../components/Hero';
import Info from '../components/Info';
import Layanan from "../components/Layanan";
import Galery from "../components/Galery";
import Paq from "../components/Paq";

const Home = () => {
  return (
    <div>
      <Hero />
      <Info />

      <Layanan />  
      <Galery />
      <Paq />
    </div>
  )
}

export default Home