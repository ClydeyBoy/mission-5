import '../styles/Footer.css'
import companyLogo from "../images/property_page/Company_Logo.jpg"
import facebook from "../images/property_page/Facebook.png"
import instagram from "../images/property_page/Instagram.png"
import twitter from "../images/property_page/Twitter.png"
import linkedin from "../images/property_page/Linkedin.png"


function Footer() {
    return (
        <>
            <div className='footerContainer'>
                <img className='footerLogo' src={companyLogo} alt=""></img>
                <div className='footerTextColumn1'>
                    Level 33, ANZ Centre <br></br>
                    23-29 Albert St <br></br>
                    Auckland 1010 <br></br>
                    New Zealand <br></br>
                    <br></br>
                    Ph: 09 391 4642 <br></br>
                    Mb: +64 21 642 119 <br></br>
                    info@metronz.co.nz
                </div>
                <div className='footerTextColumn2'>
                    <div>About Us</div>
                    <div>Careers</div>
                    <div>Privacy Policy</div>
                    <div>Terms & Conditions</div>
                    <div> Disputes Process</div>
                </div>
                <div className='footerTextColumn3'>
                    Subscribe to our Newsletter
                </div>
                <div className='socialMediaIcons'>
                    <img src={facebook} alt=""></img>
                    <img src={instagram} alt=""></img>
                    <img src={twitter} alt=""></img>
                    <img src={linkedin} alt=""></img>
                </div>
                <div id='copyrightText'>
                    © 2022 Metro NZ Property Management
                </div>
            </div>
        </>
    )
}

export default Footer