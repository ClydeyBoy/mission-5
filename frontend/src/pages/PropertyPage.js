import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { useState } from 'react';
import PropertyPageBody from '../components/PropertyPageBody';


 const PropertyPage = () => {
  
  //showing all components required for the property page
  return (
    <div>
      <Header></Header>
      <PropertyPageBody></PropertyPageBody>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  )
}

export default PropertyPage