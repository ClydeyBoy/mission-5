import '../styles/Carousel.css'
import new_windsor_road_photo from "../images/property_page/54_new_windsor_road.png"
import halesowen_ave_photo from "../images/property_page/18_halesowen_ave.png"
import western_springs_road_photo from "../images/property_page/11_western springs_road.png"
import property4 from "../images/property_page/property4.jpg"
import property5 from "../images/property_page/property5.jpg"
import property6 from "../images/property_page/property6.jpg"
import property7 from "../images/property_page/property7.png"
import property8 from "../images/property_page/property8.jpg"
import property9 from "../images/property_page/property9.jpeg"
import arrowPrev from "../images/property_page/ArrowPrev.png"
import arrowNext from "../images/property_page/ArrowNext.png"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Carousel() {

    const [propertyData, setPropertyData] = useState([])
    const [randomNumbers, setRandomNumbers] = useState([]);
    const {id} = useParams()

    // //call the get api to get property data from the database
    // useEffect(() => {
    //     fetch('http://localhost:4000/propertypage/:id')
    //         .then(response => response.json())
    //         .then((result) => {
    //             randomIndexGenerator(id);
    //             setPropertyData(result);
    //         }, []);
    // });

    // console.log(propertyData[0].Property_image)

    const randomIndexGenerator = (id) => {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => x !== id);
        let randomNumbers = [];
        for (let i = 0; i < 9; i++) {
            let randomIndex = Math.floor(Math.random() * numbers.length);
            let randomNumber = numbers[randomIndex];
            randomNumbers.push(randomNumber);
            numbers.splice(randomIndex, 1);
        }
        setRandomNumbers(randomNumbers)
    }

    console.log()

    const [currentIndex, setCurrentIndex] = useState(0);
    const propertyImages = [
        new_windsor_road_photo,
        halesowen_ave_photo,
        western_springs_road_photo,
        property4,
        property5,
        property6,
        property7,
        property8,
        property9
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