import { Carousel } from "react-bootstrap";
import backgroundImage from '../../img/slider1.png'
import backgroundImage2 from '../../img/slider2.png'
import backgroundImage3 from '../../img/slider3.png'
import './HomeCarousel.css'

const HomeCarousel = () => {

    return <Carousel className='homeCarousel'>
        <Carousel.Item>
        <img
            className="d-flex w-100"
            // width="500" height="600"
            src={backgroundImage}
            alt="First slide"
        />
        <Carousel.Caption>
            {/* <h3>Test Title</h3>
            <p>Test subtitle</p> */}
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={backgroundImage2}
            alt="Second slide"
        />
    
        <Carousel.Caption>
            {/* <h3>Test Title</h3>
            <p>Test subtitle</p> */}
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={backgroundImage3}
            alt="Third slide"
        />
    
        <Carousel.Caption>
            {/* <h3>Test Title</h3>
            <p>Test subtitle</p> */}
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
};
export default HomeCarousel;