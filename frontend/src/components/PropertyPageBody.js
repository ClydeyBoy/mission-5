import '../styles/PropertyPageBody.css'
import bedroomIcon from "../images/property_page/Bedroom.png"
import bathroomIcon from "../images/property_page/Bathroom.png"
import parkingIcon from "../images/property_page/Parking.png"
import PopupForm from './PopupForm'
import CreateAccount from './CreateAccount'
import awardsLogos from "../images/property_page/Awards_Logos.png"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function PropertyPageBody() {

    //creating use state hooks to store property data
    const [propertyData, setPropertyData] = useState([])
    const [popupForm, setPopupForm] = useState(false)
    const [createAccount, setCreateAccount] = useState(false)


    //destructuring id from th useParams function
    const { id } = useParams()

    //call the get api to get property data from the database when the component mounts
    useEffect(() => {
        fetch('http://localhost:4000/propertypage')
            .then(response => response.json())
            .then((result) => {
                setPropertyData(result[0]);
            });
    }, []);

    console.log(propertyData)

    return (
        <>
            {/* Calling the tenancy application popup form and the signin forms when the associated buttons are clicked on the page */}
            <PopupForm trigger={popupForm} setTrigger={setPopupForm}></PopupForm>
            <CreateAccount trigger2={createAccount} setTrigger2={setCreateAccount}></CreateAccount>
            
            {/* importing the property photo from the useState hook */}
            <img className='propertyPhoto' src={propertyData.Property_image} alt=""></img>

            <div className='propertySummary'>

                {/* importing the property address from the useState hook */}
                <div className='propertyAddress'><b>{propertyData.Address},</b> <br></br><b>{propertyData.suburb}</b></div>

                {/* importing the property room information from the useState hook */}
                <div className='propertyRooms'>
                    <div>{propertyData.Bedrooms}<img className='bedroomIcon' src={bedroomIcon} alt=""></img></div>
                    <div>{propertyData.Bathrooms}<img className='bathroomIcon' src={bathroomIcon} alt=""></img></div>
                    <div>{propertyData.Carparks}<img className='parkingIcon' src={parkingIcon} alt=""></img></div>
                </div>
            </div>

           
            <div className='propertyDescription'>
                
                    <div>{propertyData.Property_summary_para1}</div>
                    <br></br>
                    <div>{propertyData.Property_summary_para2}</div>
                    <br></br>
                    <div>{propertyData.Property_summary_para3}</div>
                    <br></br>
                    <div>{propertyData.Property_summary_para4}</div>
                    <br></br>
                    <div>{propertyData.Property_summary_para5}</div>
                    <br></br>
                    <div>{propertyData.Property_summary_para6}</div>
            </div>

            {/* creating buttons to display  the signup and tenancy application popup forms when clicked */}
            <div className='btnContainer'>
                <div className='watchlistBtn' onClick={() => setCreateAccount(true)}>Add to Watchlist</div>
                <div className='bookViewingBtn'>Book a Viewing</div>
                <div className='applyBtn' onClick={() => setPopupForm(true)}>Apply Now</div>
            </div>
            <div className='propertyInfoHeadings'>
                <div>Property Details</div>
                <div>Chattels</div>
            </div>

            {/* importing the property data from the useState hook */}
            <div className='propertyInfoColumn1'>
                <div>Property type: {propertyData.Property_type}</div>
                <div>Rent: {propertyData.Rent} per week</div>
                <div>Available: {propertyData.Available}</div>
                <div>Amenities: {propertyData.Amenities}</div>
                <div>Bedrooms: {propertyData.Bedrooms}</div>
                <div>Bathrooms: {propertyData.Bathrooms}</div>
                <div>Parking: {propertyData.Carparks}</div>
                <div>Pets Allowed: {propertyData.Pets_allowed}</div>
                <div>Property ID: {propertyData.Property_id}</div>
            </div>

           
            <div className='propertyInfoColumn2'>
                
                    <div>{propertyData.Chattels1}</div>
                    <div>{propertyData.Chattels2}</div>
                    <div>{propertyData.Chattels3}</div>
                    <div>{propertyData.Chattels4}</div>
                    <div>{propertyData.Chattels5}</div>
                    <div>{propertyData.Chattels6}</div>
                    <div>{propertyData.Chattels7}</div>
                    <div>{propertyData.Chattels8}</div>
            </div>

            <div className='carouselHeader'>
                People who viewed this property also viewed
            </div>

            {/* importing the property manager info from the useState hook */}
            <div className='propertyManagerCard'>
                <img className='propertyManagerImg' src={propertyData.Property_manager_photo} alt=''></img>
                <div className='propertyManagerText'>
                    <div className='propertyManagerName'>{propertyData.Property_manager_name}<br></br>Property Manager</div>
                    <div className='propertyManagerNumber'>{propertyData.Property_manager_number}</div>
                    <div className='emailBtn'>Email Agent</div>
                </div>
            </div>

            {/* creating buttons to display  the signup and tenancy application popup forms when clicked */}
            <div className='btnContainer2'>
                <div className='watchlistBtn' onClick={() => setCreateAccount(true)}>Add to Watchlist</div>
                <div className='bookViewingBtn'>Book a Viewing</div>
                <div className='applyBtn' onClick={() => setPopupForm(true)}>Apply Now</div>
            </div>

            <div className='awardsHeader'>Awards</div>
            <img className='awardsLogos' src={awardsLogos} alt=""></img>

        </>
    )
}

export default PropertyPageBody

