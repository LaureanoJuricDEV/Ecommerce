import React from 'react';
import { Carousel } from 'antd';
import './styleItems.css'


  const Carrusel = () => (
    <Carousel autoplay className='containerCarrusel'>
      <div className='containerImgCarrusel'></div>
      <div className='containerImgCarrusel2'></div>
      <div className='containerImgCarrusel3'></div>
      <div className='containerImgCarrusel4'></div> 
    </Carousel>
  );
  export default Carrusel;