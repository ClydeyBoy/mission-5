
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Carousel2.css'
import { carouselImages } from "../data/carouselImages";


function Carousel() {

    //styling carousel arrows
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#8e8e8e" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#8e8e8e" }}
                onClick={onClick}
            />
        );
    }


    //configuring how many cards are shown on the carousel
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };



    return (
        <div className='parentDiv'>
            <Slider {...settings}>
                {/* mapping images and descriptions to the carousel */}
                {carouselImages.map((item, index) => (
                    <div key={index} className='card'>
                        <div className="CarouselImages">
                            <img src={item.image} alt={item.Address}></img>

                        </div>
                        <div className='carouselAddress'>{item.Address}</div>
                        <div className='carouselSuburb'>{item.Suburb}</div>
                        <div className='greyOut'></div>
                    </div>
                ))}
                
            </Slider>
            
        </div>
    )
}

export default Carousel






