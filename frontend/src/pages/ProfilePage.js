import { useAuthContext } from '../hooks/useAuthContext'


 const PropertyPage = () => {

  //getting the user key from the browser local storage
  let userString = localStorage.getItem("user");

  //extracting only email from key
  let user = userString.split(":")[1].split(",")[0].replace(/"/g,'');
  
  //displaying email to welcome user upon login
    return (
      <div>
   <h1>Hello {user}</h1>

      </div>
    )
  }
  
  export default PropertyPage

  