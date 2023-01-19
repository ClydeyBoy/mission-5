import { Link } from 'react-router-dom';
 const Home = () => {
  
  return (
    <div>
 <h1>This is the Home Page</h1>
 <Link to = '/propertypage/0'>Browse properties</Link>
 <br></br>
 <Link to = '/profilepage'>View Account</Link>
    </div>
  )
}

export default Home