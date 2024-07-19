import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
//import image3 from '../assets/3.jpg'
const CarouuselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={image1} alt='imge1' style={{ width: '100%', height: '900px' }}></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt='imge1' style={{ width: '100%', height: '900px' }}></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image1} alt='imge1' style={{ width: '100%', height: '900px' }}></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouuselComponent
