import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../style/sliderStyle.css';
import Image1 from '../../images/1eko.jpg';
import Image2 from '../../images/2eko.jpg';
import Image3 from '../../images/3eko.jpg';
import Image4 from '../../images/4eko.jpg';
import Image5 from '../../images/5eko.png';

const images = [Image1, Image2, Image3, Image4, Image5];

const Slider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000} indicators={true} controls={true}>
      {images.map((image, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100 slider-img"
            src={image}
            alt={`Slide ${i}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
