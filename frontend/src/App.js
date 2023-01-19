import './App.css';
import { useState, useEffect } from 'react';
import PropertyPage from './pages/PropertyPage'
import Profilepage from './pages/ProfilePage'
import Home from './pages/Home'
import { Navigate, Routes, Route } from 'react-router-dom';


function App() {

  let user = localStorage.getItem("user");

  // const [greeting, setGreeting] = useState([])

  // //call the get api to get student data from the database
  // useEffect(() => {
  //   fetch('http://localhost:4000/')
  //     .then(response => response.json())
  //     .then((result) => {
  //       setGreeting(result[0].message);
  //       console.log(result[0].message)
  //     }, []);
  // });


//paths for the various pages in the application
  return (
    <div className="App">

      {/* <h1>{greeting}</h1>
      <h1>Hi</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propertypage/:id" element={<PropertyPage />} />
        <Route path="/profilepage" element={user ? <Profilepage/> : <Navigate to = '/'/>} />
      </Routes>



    </div>
  );
}

export default App;
