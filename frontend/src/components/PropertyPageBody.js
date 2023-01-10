import '../styles/PropertyPageBody.css'
import morningside_drive_photo from "../images/property_page/303-3_morningside_drive.png"
import bedroomIcon from "../images/property_page/Bedroom.png"
import bathroomIcon from "../images/property_page/Bathroom.png"
import parkingIcon from "../images/property_page/Parking.png"
import propertyManagerPhoto from "../images/property_page/Holly_Wood.png"
import awardsLogos from "../images/property_page/Awards_Logos.png"
import {useState, useEffect} from 'react'


function PropertyPageBody() {

  const [address, setAddress] = useState([])

  //call the get api to get property data from the database
  useEffect(() => {
    fetch('http://localhost:27017/')
      .then(response => response.json())
      .then((result) => {
        setAddress(result[0].Address);
        console.log(result[0].Address)
      }, []);
  });



    return (
        <>
            <img className='propertyPhoto' src={morningside_drive_photo} alt=""></img>
            <div className='propertySummary'>
                <div className='propertyAddress'><b>{address},</b> <br></br><b>Morningside</b></div>
                <div className='propertyRooms'>
                    <div>2<img className='bedroomIcon' src={bedroomIcon} alt=""></img></div>
                    <div>1<img className='bathroomIcon' src={bathroomIcon} alt=""></img></div>
                    <div>3<img className='parkingIcon' src={parkingIcon} alt=""></img></div>
                </div>
            </div>
            <div className='propertyDescription'>
                Presenting a two-bedroom apartment that stands out from the rest. Walk in and the first thing you'll notice is the EPIC high ceiling stud. It creates a sense of spaciousness and style that you just don't find in most apartments.
                <br></br><br></br>
                The tidy kitchen and bathroom are in good condition and the bedroom is a generous size. The north facing balcony gives you plenty of sun and a spot for the summer BBQ, and ensures the apartment is bathed in light.
                <br></br><br></br>
                There's easy value to add if you want to polish it further and make something truly special. Or if you are a first home buyer looking for a city fringe pad, then this one is quite simply a cut above the rest.
                <br></br><br></br>
                The apartment comes with not 1, not 2, but 3 carparks, as well as being adjacent to the train line and city bus routes.
                <br></br><br></br>
                All this and located in what is unquestionably Auckland's hippest little suburb, Morningside. Take your pick from the cafes, craft beer spots, event venues and eateries all on your doorstep. The gym is just next door and it's a quick few minutes down the road to Westfield St Luke's for a spot of shopping.
                <br></br><br></br>
                This apartment is a cracker and worth putting at the top of your Christmas list.
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
                <div>Property type: Apartment</div>
                <div>Rent: $700 per week</div>
                <div>Available: 21st January</div>
                <div>Amenities: Gym</div>
                <div>Bedrooms: 2</div>
                <div>Bathrooms: 1</div>
                <div>Parking: 3</div>
                <div>Pets Allowed: Yes</div>
                <div>Property ID: 50005769</div>
            </div>
            <div className='propertyInfoColumn2'>
                <div>Washing Machine</div>
                <div>Dryer</div>
                <div>Household heys</div>
                <div>Extractor fan</div>
                <div>Shelving in lounge</div>
                <div>Chairs and table on balcony</div>
                <div>Wicker coffee table in lounge</div>
                <div>Sofa</div>
            </div>

            <div className='carouselHeader'>
                People who viewed this property also viewed
            </div>

            <div className='propertyManagerCard'>
                <img className='propertyManagerImg' src={propertyManagerPhoto} alt=''></img>
                <div className='propertyManagerText'>
                    <div className = 'propertyManagerName'>Holly Wood<br></br>Property Manager</div>
                    <div className = 'propertyManagerNumber'>021 334 694</div>
                    <div className = 'emailBtn'>Email Agent</div>
                </div>
            </div>
            <div className='btnContainer2'>
                <div className='watchlistBtn'>Add to Watchlist</div>
                <div className='bookViewingBtn'>Book a Viewing</div>
                <div className='applyBtn'>Apply Now</div>
            </div>
            <div className = 'awardsHeader'>Awards</div>
            <img className='awardsLogos' src={awardsLogos} alt=""></img>

        </>
    )
}

export default PropertyPageBody