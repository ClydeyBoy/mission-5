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
    const [chattels, setChattels] = useState([])
    const [propertySummary, setPropertySummary] = useState([])
    const [propertyData, setPropertyData] = useState([])
    const [popupForm, setPopupForm] = useState(false)
    const [createAccount, setCreateAccount] = useState(false)


    //destructuring id from th useParams function
    const { id } = useParams()

    //call the get api to get property data from the database when the component mounts
    useEffect(() => {
        fetch('http://localhost:4000/propertypage/')
            .then(response => response.json())
            .then((result) => {
                setPropertyData(result[id]);
                setChattels(result[id].chattels);
                setPropertySummary(result[id].property_summary);
            });
    }, []);

    console.log(propertyData.property_image)

    return (
        <>
            {/* Calling the tenancy application popup form and the signin forms when the associated buttons are clicked on the page */}
            <PopupForm trigger={popupForm} setTrigger={setPopupForm}></PopupForm>
            <CreateAccount trigger2={createAccount} setTrigger2={setCreateAccount}></CreateAccount>
            
            {/* importing the property photo from the useState hook */}
            <img className='propertyPhoto' src={propertyData.property_image} alt=""></img>

            <div className='propertySummary'>

                {/* importing the property address from the useState hook */}
                <div className='propertyAddress'><b>{propertyData.address},</b> <br></br><b>{propertyData.suburb}</b></div>

                {/* importing the property room information from the useState hook */}
                <div className='propertyRooms'>
                    <div>{propertyData.bedrooms}<img className='bedroomIcon' src={bedroomIcon} alt=""></img></div>
                    <div>{propertyData.bathrooms}<img className='bathroomIcon' src={bathroomIcon} alt=""></img></div>
                    <div>{propertyData.carparks}<img className='parkingIcon' src={parkingIcon} alt=""></img></div>
                </div>
            </div>

            {/* importing the property summary from the useState hook
                The property summary info has been stored as an array in the database
                As such a map function is called to remove the data from the array and display it in the front end */}
            <div className='propertyDescription'>
                {propertySummary.map((line, index) => (
                    <div key={(index)}>{line}<br></br><br></br></div>
                ))}
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
                <div>Property type: {propertyData.property_type}</div>
                <div>Rent: {propertyData.rent} per week</div>
                <div>Available: {propertyData.available}</div>
                <div>Amenities: {propertyData.amenities}</div>
                <div>Bedrooms: {propertyData.bedrooms}</div>
                <div>Bathrooms: {propertyData.bathrooms}</div>
                <div>Parking: {propertyData.carparks}</div>
                <div>Pets Allowed: {propertyData.pets_allowed}</div>
                <div>Property ID: {propertyData.property_id}</div>
            </div>

            {/* importing the property chattels from the useState hook */}
            {/* The property chattels info has been stored as an array in the database
                As such a map function is called to remove the data from the array and display it in the front end */}
            <div className='propertyInfoColumn2'>
                {chattels.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>

            <div className='carouselHeader'>
                People who viewed this property also viewed
            </div>

            {/* importing the property manager info from the useState hook */}
            <div className='propertyManagerCard'>
                <img className='propertyManagerImg' src={propertyData.property_manager_image} alt=''></img>
                <div className='propertyManagerText'>
                    <div className='propertyManagerName'>{propertyData.property_manager_name}<br></br>Property Manager</div>
                    <div className='propertyManagerNumber'>{propertyData.property_manager_number}</div>
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

