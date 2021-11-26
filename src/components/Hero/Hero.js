import React from 'react';
import { Carousel } from 'react-bootstrap';
import hero1 from '../../images/hero1.jpg';
import hero2 from '../../images/hero2.jpeg';
import hero3 from '../../images/hero3.jpeg'
const Hero = () => {
    return (
        <div id="hero">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero2}
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero1}
                        alt="Second slide"
                    />

                  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero3}
                        alt="Third slide"
                    />

                 
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Hero;