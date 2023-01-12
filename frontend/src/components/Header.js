import '../styles/Header.css'
import companyLogo from "../images/property_page/Company_Logo.jpg"
import { useParams, Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='headerContainer'>
                <Link to='/'><img className='headerLogo' src={companyLogo} alt=""></img></Link>
                <div className='headerLinks'>
                    <div>Property Owners</div>
                    <div>Tenants</div>
                    <div>News</div>
                    <div>Register</div>
                    <div>Login</div>
                </div>
            </div>

        </>
    )
}

export default Header