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

           
            <div className='propertyDescription'>
                
                    <div>Presenting a one-bedroom apartment that stands out from the rest. Walk in and the first thing you'll notice is the EPIC high ceiling stud. It creates a sense of spaciousness and style that you just don't find in most apartments.</div>
                    <br></br>
                    <div>The tidy kitchen and bathroom are in good condition and the bedroom is a generous size. The north facing balcony gives you plenty of sun and a spot for the summer BBQ, and ensures the apartment is bathed in light.</div>
                    <br></br>
                    <div>There's easy value to add if you want to polish it further and make something truly special. Or if you are a first home buyer looking for a city fringe pad, then this one is quite simply a cut above the rest.</div>
                    <br></br>
                    <div>The apartment comes with not 1, not 2, but 3 carparks, as well as being adjacent to the train line and city bus routes.</div>
                    <br></br>
                    <div>All this and located in what is unquestionably Auckland's hippest little suburb, Morningside. Take your pick from the cafes, craft beer spots, event venues and eateries all on your doorstep. The gym is just next door and it's a quick few minutes down the road to Westfield St Luke's for a spot of shopping.</div>
                    <br></br>
                    <div>This apartment is a cracker and worth putting at the top of your Xmas list.</div>
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

           
            <div className='propertyInfoColumn2'>
                
                    <div>Washing machine</div>
                    <div>Dryer</div>
                    <div>Extractor Fan</div>
                    <div>Shelving in Lounge</div>
                    <div>Chairs and table on balcony</div>
                    <div>Wicker coffee table in lounge</div>
                    <div>Sofa</div>
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

