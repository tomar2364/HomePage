import React, { useState } from 'react';
import { SliderData ,headdata, textcss, leftslide, rightslide,box,box1,box2,posining} from './SliderData';
import FLeft  from '../images/leftarrow.svg';
import FRight from '../images/rightarrow.svg';
import slidinglogo from './slidinglogo.svg'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
        
        <h1 style={headdata}>Explorer Top PM </h1> 
        <p style={textcss}>Our portal is designed to give you a different experience when working with your team or personally</p>
        
    
      <img src={FLeft} style={leftslide} className='left-arrow' onClick={prevSlide} />
      <img src={FRight} style={rightslide} className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} style={box} alt='image' className='image' />
                
            )}
          </div>
        );
        
      })}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} style={box1} alt='image' className='image' />
                
            )}
          </div>
        );
        
      })}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
            
          >
            
            {index === current && (
              
              <img src={slide.image} style={box2} alt='image' className='image' />
                
            )}
          </div>
        );
        
      })}
    <div>
    <img src={slidinglogo} style={posining} />
    </div>
    
    
    </section>
    
  );
};

export default ImageSlider;