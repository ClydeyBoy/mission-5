import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [greeting, setGreeting] = useState([])

  //call the get api to get student data from the database
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(response => response.json())
      .then((objects) => {
        setGreeting(objects[0].message);
        console.log(objects[0].message)
      }, []);
  });



  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;
