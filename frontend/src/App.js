import './App.css';
import { useState, useEffect } from 'react';
import PropertyPage from './pages/PropertyPage'
import Profilepage from './pages/ProfilePage'
import Home from './pages/Home'
import { Navigate, Routes, Route } from 'react-router-dom';


function App() {

  let user = localStorage.getItem("user");


//paths for the various pages in the application
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propertypage" element={<PropertyPage />} />
        <Route path="/profilepage" element={user ? <Profilepage/> : (<Navigate to = '/'/>)}  />
      </Routes>



    </div>
  );
}

export default App;
