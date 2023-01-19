import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel2 from '../components/Carousel2';
import { useState } from 'react';
import PropertyPageBody from '../components/PropertyPageBody';


 const PropertyPage = () => {
  
  //showing all components required for the property page
  return (
    <div>
      <Header></Header>
      <PropertyPageBody></PropertyPageBody>
      <Carousel2></Carousel2>
      <Footer></Footer>
    </div>
  )
}

export default PropertyPage