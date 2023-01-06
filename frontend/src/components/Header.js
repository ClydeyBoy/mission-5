import '../styles/Header.css'
import companyLogo from "../images/property_page/Company_Logo.jpg"

function Header() {
    return (
        <>
            <div className='headerContainer'>
                <img className='headerLogo' src={companyLogo} alt=""></img>
                <div className = 'headerLinks'>
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