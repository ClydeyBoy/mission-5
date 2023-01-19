import '../styles/Carousel.css'
import new_windsor_road_photo from "../images/property_page/54_new_windsor_road.png"
import halesowen_ave_photo from "../images/property_page/18_halesowen_ave.png"
import western_springs_road_photo from "../images/property_page/11_western springs_road.png"
import napier_street_photo from "../images/property_page/4-23_napier_street.png"
import kitchener_road_photo from "../images/property_page/23_kitchener_road.png"
import fourth_avenue_photo from "../images/property_page/54_fourth_avenue.png"
import school_road_photo from "../images/property_page/68_school_road.png"
import first_street_photo from "../images/property_page/1_first_street.png"
import morningside_drive_photo from "../images/property_page/303-3_morningside_drive.png"
import arrowPrev from "../images/property_page/ArrowPrev.png"
import arrowNext from "../images/property_page/ArrowNext.png"
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function Carousel() {

    //call the get api to get property data from the database
    useEffect(() => {
        fetch('http://localhost:4000/propertypage')
            .then(response => response.json())
            .then((result) => {
            });
    }, []);

    const { id } = useParams()


    const [currentIndex, setCurrentIndex] = useState(0);
    const propertyImages = [
        napier_street_photo,
        fourth_avenue_photo,
        kitchener_road_photo,
        new_windsor_road_photo,
        halesowen_ave_photo,
        western_springs_road_photo,
        school_road_photo,
        morningside_drive_photo,
        first_street_photo
    ];

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? propertyImages.length - 3 : currentIndex - 3
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = (currentIndex === 9) || (currentIndex === 7) || (currentIndex === 6);
        const newIndex = isLastSlide ? 0 : currentIndex + 3
        setCurrentIndex(newIndex)
    };

    const goToSlide1 = () => {
        setCurrentIndex(0)
    };

    const goToSlide2 = () => {
        setCurrentIndex(3)
    };

    const goToSlide3 = () => {
        setCurrentIndex(6)
    };

    let displayedImages = propertyImages.slice(currentIndex, currentIndex + 3)


    return (
        <div>

            <div className="carousel">
                <button className='prevBtn' onClick={prevSlide}><img className='arrow' src={arrowPrev} alt='' /></button>

                {displayedImages.map((image, index) => (
                    <div key={(index + currentIndex + 1)} className="carouselCard">
                       
                            <img src={image} alt={`Property ${index + currentIndex + 1}`}></img>
                        
                    </div>
                ))}

                <button className='nextBtn' onClick={nextSlide}><img className='arrow' src={arrowNext} alt='' /></button>
                <div className='dotsContainer'>
                    <div className={currentIndex === 0 ? 'dotRed' : 'dot1'} onClick={goToSlide1}>⬤</div>
                    <div className={currentIndex === 3 ? 'dotRed' : 'dot2'} onClick={goToSlide2}>⬤</div>
                    <div className={currentIndex === 6 ? 'dotRed' : 'dot3'} onClick={goToSlide3}>⬤</div>
                </div>
            </div>
        </div>
    )
}

export default Carousel






{/* <div className="carouselCard">
                        <Link to = '/propertypage/1' onClick = {window.location.reload}>
                        <img src={napier_street_photo} alt=''></img>
                        </Link>
                        <Link to = '/propertypage/2' onClick = {window.location.reload}>
                        <img src={fourth_avenue_photo} alt=''></img>
                        </Link>
                        <Link to = '/propertypage/3' onClick = {window.location.reload}>
                        <img src={kitchener_road_photo} alt=''></img>
                        </Link>
                        <Link to = '/propertypage/4' onClick = {window.location.reload}>
                        <img src={new_windsor_road_photo} alt=''></img>
                        </Link>
                        <Link to = '/propertypage/5' onClick = {window.location.reload}>
                        <img src={halesowen_ave_photo} alt=''></img>
                        </Link>
                        <Link to = '/propertypage/5' onClick = {window.location.reload}>
                        <img src={western_springs_road_photo} alt=''></img>
                        </Link>
                        <Link to = '/propertypage/7' onClick = {window.location.reload}>
                        <img src={school_road_photo} alt=''></img>
                        </Link>
                        <Link to = '/propertypage/8' onClick = {window.location.reload}>
                        <img src={first_street_photo} alt=''></img>
                        </Link>
                        <Link to = '/propertypage/0' onClick = {window.location.reload}>
                        <img src={morningside_drive_photo} alt=''></img>
                        </Link>
                    </div> */}

