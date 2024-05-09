import './StartScreen.css';

import React from 'react';

import { FaArrowDown } from 'react-icons/fa';

import BackgroundSmall from '../../images/start-screen/BackgroundSmall.jpg';
import BackgroundMedium from '../../images/start-screen/BackgroundMedium.jpg';
import BackgroundLarge from '../../images/start-screen/BackgroundLarge.jpg';

const StartScreen = () => {
  return (
    <div className='start-screen' id='start-screen'>
      <img
        src={BackgroundSmall}
        alt=''
        className='background-img'
        srcSet={`${BackgroundSmall} 640w, ${BackgroundMedium} 1920w, ${BackgroundLarge} 2400w`}
      />

      <div className='left'>
        <h1 className='nyc-title'>New York City</h1>
        <p className='start-screen-description'>
          New York City, often called the "Big Apple," is a vibrant metropolis
          renowned for its rich history and cultural diversity. Founded as a
          Dutch trading post in 1624, it has since evolved into a global hub of
          finance, commerce, art, and entertainment. With iconic landmarks like
          the Statue of Liberty, Times Square, and Central Park, NYC attracts
          millions of visitors each year. Its advantages include unparalleled
          opportunities in finance, fashion, theater, and cuisine, making it a
          magnet for dreamers and doers worldwide.
        </p>
        <div className='scroll-down'>
          <p>Scroll Down To See More</p>
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
