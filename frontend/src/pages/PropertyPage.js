import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { useState } from 'react';
import PropertyPageBody from '../components/PropertyPageBody';


 const PropertyPage = () => {
  
  return (
    <div>
      <Header></Header>
      <PropertyPageBody></PropertyPageBody>
      <Footer></Footer>
    </div>
  )
}

export default PropertyPage