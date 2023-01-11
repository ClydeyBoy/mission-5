import '../styles/PropertyPageBody.css'
import bedroomIcon from "../images/property_page/Bedroom.png"
import bathroomIcon from "../images/property_page/Bathroom.png"
import parkingIcon from "../images/property_page/Parking.png"
import propertyManagerPhoto from "../images/property_page/Holly_Wood.png"
import awardsLogos from "../images/property_page/Awards_Logos.png"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function PropertyPageBody() {

    const [chattels, setChattels] = useState([])
    const [propertySummary, setPropertySummary] = useState([])
    const [propertyData, setPropertyData] = useState([])
    const {id} = useParams()

    //call the get api to get property data from the database
    useEffect(() => {
        fetch('http://localhost:4000/propertypage/:id')
            .then(response => response.json())
            .then((result) => {
                setChattels(result[id].Chattels);
                setPropertySummary(result[id].Property_summary);
                setPropertyData(result[id]);
                console.log()
            }, []);
    });

    return ( 
        <>
        
            <img className='propertyPhoto' src={propertyData.Property_image} alt=""></img>
            <div className='propertySummary'>
                <div className='propertyAddress'><b>{propertyData.Address},</b> <br></br><b>{propertyData.Suburb}</b></div>
                <div className='propertyRooms'>
                    <div>{propertyData.Bedrooms}<img className='bedroomIcon' src={bedroomIcon} alt=""></img></div>
                    <div>{propertyData.Bathrooms}<img className='bathroomIcon' src={bathroomIcon} alt=""></img></div>
                    <div>{propertyData.Carparks}<img className='parkingIcon' src={parkingIcon} alt=""></img></div>
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
                <div className='applyBtn'>Apply Now</div>
            </div>
            <div className='propertyInfoHeadings'>
                <div>Property Details</div>
                <div>Chattels</div>
            </div>
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
                {chattels.map((item, index) => (
                    <div key={(index)}>{item}</div>
                ))}
            </div>

            <div className='carouselHeader'>
                People who viewed this property also viewed
            </div>

            <div className='propertyManagerCard'>
                <img className='propertyManagerImg' src={propertyData.Property_manager_photo} alt=''></img>
                <div className='propertyManagerText'>
                    <div className='propertyManagerName'>{propertyData.Property_manager_name}<br></br>Property Manager</div>
                    <div className='propertyManagerNumber'>{propertyData.Property_manager_number}</div>
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

