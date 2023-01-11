import './App.css';
import { useState, useEffect } from 'react';
import PropertyPage from './pages/PropertyPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

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



  return (
    <div className="App">

      {/* <h1>{greeting}</h1>
      <h1>Hi</h1> */}
        <Routes>
          <Route path="/propertypage/:id" element={<PropertyPage />} />
        </Routes>



    </div>
  );
}

export default App;
