import '../styles/PropertyPageBody.css'
import bedroomIcon from "../images/property_page/Bedroom.png"
import bathroomIcon from "../images/property_page/Bathroom.png"
import parkingIcon from "../images/property_page/Parking.png"
import PopupForm from './PopupForm'
import awardsLogos from "../images/property_page/Awards_Logos.png"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function PropertyPageBody() {

    const [chattels, setChattels] = useState([])
    const [propertySummary, setPropertySummary] = useState([])
    const [propertyData, setPropertyData] = useState([])
    const [popupForm, setPopupForm] = useState(false)
    const { id } = useParams()

    //call the get api to get property data from the database
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
            <PopupForm trigger={popupForm} setTrigger = {setPopupForm}></PopupForm>

            <img className='propertyPhoto' src={propertyData.property_image} alt=""></img>
            <div className='propertySummary'>
                <div className='propertyAddress'><b>{propertyData.address},</b> <br></br><b>{propertyData.suburb}</b></div>
                <div className='propertyRooms'>
                    <div>{propertyData.bedrooms}<img className='bedroomIcon' src={bedroomIcon} alt=""></img></div>
                    <div>{propertyData.bathrooms}<img className='bathroomIcon' src={bathroomIcon} alt=""></img></div>
                    <div>{propertyData.carparks}<img className='parkingIcon' src={parkingIcon} alt=""></img></div>
                </div>
            </div>
            <div className='propertyDescription'>
                {propertySummary.map((line, index) => (
                    <div key={(index)}>{line}<br></br><br></br></div>
                ))}
            </div>
            <div className='btnContainer'>
                <div className='watchlistBtn'>Add to Watchlist</div>
                <div className='bookViewingBtn'>Book a Viewing</div>
                <div className='applyBtn' onClick = {() => setPopupForm(true)}>Apply Now</div>
            </div>
            <div className='propertyInfoHeadings'>
                <div>Property Details</div>
                <div>Chattels</div>
            </div>
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
            <div className='propertyInfoColumn2'>
                {chattels.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>

            <div className='carouselHeader'>
                People who viewed this property also viewed
            </div>

            <div className='propertyManagerCard'>
                <img className='propertyManagerImg' src={propertyData.property_manager_image} alt=''></img>
                <div className='propertyManagerText'>
                    <div className='propertyManagerName'>{propertyData.property_manager_name}<br></br>Property Manager</div>
                    <div className='propertyManagerNumber'>{propertyData.property_manager_number}</div>
                    <div className='emailBtn'>Email Agent</div>
                </div>
            </div>
            <div className='btnContainer2'>
                <div className='watchlistBtn'>Add to Watchlist</div>
                <div className='bookViewingBtn'>Book a Viewing</div>
                <div className='applyBtn'>Apply Now</div>
            </div>
            <div className='awardsHeader'>Awards</div>
            <img className='awardsLogos' src={awardsLogos} alt=""></img>

        </>
    )
}



export default PropertyPageBody

