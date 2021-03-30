import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

import config from "../config/images";


function CustomCarousel() {
  return (  
    <Carousel
    plugins={[
      'centered',
      'infinite',
      'arrows',
      {
        resolve: slidesToShowPlugin,
        options: {
         numberOfSlides: 2,
        },
      },
    ]} 
    >
      <img src={config('eyelashes')} />
      <img src={config('haircut1')} />
      <img src={config('haircut2')} />
  </Carousel>     
  );
}

export default CustomCarousel;