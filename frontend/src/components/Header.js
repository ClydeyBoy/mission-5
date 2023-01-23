import '../styles/Header.css'
import companyLogo from "../images/property_page/Company_Logo.jpg"
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CreateAccount from './CreateAccount'
import Login from './Login'

function Header() {

    //use state Function to call the signup form when the sign up button is clicked
    const [createAccount, setCreateAccount] = useState(false)
    const [login, setLogin] = useState(false)
    return (
        <>
        {/* importing the signup component and associated props
            when the Register button is clicked, the signup form opens */}
        <CreateAccount trigger2={createAccount} setTrigger2={setCreateAccount}></CreateAccount>
        <Login trigger2={login} setTrigger2={setLogin}></Login>

            <div className='headerContainer'>
                <Link to='/' ><img className='headerLogo' src={companyLogo} alt="" ></img></Link>
                <div className='headerLinks'>
                    <div>Property Owners</div>
                    <div>Tenants</div>
                    <div>News</div>
                    <div onClick={() => setCreateAccount(true)}>Register</div>
                    <div onClick={() => setLogin(true)}>Login</div>
                </div>
            </div>

        </>
    )
}

export default Header