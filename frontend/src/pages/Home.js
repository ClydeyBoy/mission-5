import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'
import Carousel2 from '../components/Carousel2';
 const Home = () => {
  



  return (
    <div>
 <h1>This is the Home Page</h1>
 <Link to = '/propertypage'>Browse properties</Link>
 <br></br>
 <Link to = '/profilepage'>View Account</Link>
 <Carousel2></Carousel2>
    </div>
    
  )
}

export default Home