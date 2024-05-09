import './FiveBoroughs.css';

import React, { useState } from 'react';

import Brooklyn from '../../images/five-boroughs/Brooklyn.jpg';
import BrooklynMedium from '../../images/five-boroughs/BrooklynMedium.jpg';
import Bronx from '../../images/five-boroughs/Bronx.jpg';
import BronxMedium from '../../images/five-boroughs/BronxMedium.jpg';
import Manhattan from '../../images/five-boroughs/Manhattan.jpg';
import ManhattanMedium from '../../images/five-boroughs/ManhattanMedium.jpg';
import Queens from '../../images/five-boroughs/Queens.jpg';
import QueensMedium from '../../images/five-boroughs/QueensMedium.jpg';
import StatenIsland from '../../images/five-boroughs/StatenIsland.jpg';
import StatenIslandMedium from '../../images/five-boroughs/StatenIslandMedium.jpg';

const FiveBoroughs = () => {
  const boroughsInfo = [
    {
      name: 'Brooklyn',
      description:
        'Brooklyn, a borough of New York City, is known for its diverse neighborhoods, rich history, and vibrant culture. From the iconic brownstones of Park Slope to the trendy bars of Williamsburg, Brooklyn offers a unique blend of urban charm and artistic flair. With world-class museums, eclectic dining options, and stunning waterfront views, Brooklyn is a dynamic destination for residents and visitors alike.',
    },
    {
      name: 'Manhattan',
      description:
        'Manhattan, the heart of New York City, is a bustling island known for its iconic skyline, diverse neighborhoods, and cultural landmarks like Central Park, Times Square, and the Empire State Building. From Broadway shows to gourmet dining, Manhattan offers endless opportunities for entertainment, exploration, and excitement in its vibrant streets and towering skyscrapers.',
    },
    {
      name: 'Staten Island',
      description:
        "Staten Island, one of New York City's five boroughs, offers a mix of suburban charm and urban amenities. Known for its scenic parks, waterfront views, and historic landmarks like the Staten Island Ferry and Snug Harbor Cultural Center, it provides a quieter alternative to the bustling streets of Manhattan. With diverse neighborhoods and easy access to nature, Staten Island offers a relaxed pace of life within reach of the city's attractions.",
    },
    {
      name: 'Queens',
      description:
        "Queens, NYC's largest borough, boasts diverse neighborhoods, cultural hotspots like Flushing Meadows-Corona Park, and iconic landmarks such as Citi Field and the Unisphere. Its culinary scene reflects its ethnic diversity, offering everything from authentic international cuisines to trendy eateries. With great transportation links and affordable housing, Queens offers a vibrant urban lifestyle with a suburban feel.",
    },
    {
      name: 'Bronx',
      description:
        "The Bronx, birthplace of hip-hop, is a vibrant borough with rich cultural diversity. It's home to iconic attractions like the Bronx Zoo, Yankee Stadium, and the New York Botanical Garden. With lively neighborhoods, green spaces, and a thriving arts scene, the Bronx offers a dynamic urban experience. Despite past challenges, it's undergoing revitalization, making it an exciting place to live, work, and explore.",
    },
  ];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className='five-boroughs' id='five-boroughs'>
      <h2>About the Five Boroughs</h2>
      <div className='info-container'>
        <div className='slide'>
          <div
            className={`img-wrapper ${activeImage === 0 ? 'active' : ''}`}
            onClick={() => setActiveImage(0)}
          >
            <img
              src={Brooklyn}
              alt=''
              srcSet={`${Brooklyn} 640w, ${BrooklynMedium} 1920w`}
            />
          </div>
          <div
            className={`img-wrapper ${activeImage === 1 ? 'active' : ''}`}
            onClick={() => setActiveImage(1)}
          >
            <img
              src={Manhattan}
              alt=''
              srcSet={`${Manhattan} 640w, ${ManhattanMedium} 1920w`}
            />
          </div>
          <div
            className={`img-wrapper ${activeImage === 2 ? 'active' : ''}`}
            onClick={() => setActiveImage(2)}
          >
            <img
              src={StatenIsland}
              alt=''
              srcSet={`${StatenIsland} 640w, ${StatenIslandMedium} 1920w`}
            />
          </div>
          <div
            className={`img-wrapper ${activeImage === 3 ? 'active' : ''}`}
            onClick={() => setActiveImage(3)}
          >
            <img
              src={Queens}
              alt=''
              srcSet={`${Queens} 640w, ${QueensMedium} 1920w`}
            />
          </div>
          <div
            className={`img-wrapper ${activeImage === 4 ? 'active' : ''}`}
            onClick={() => setActiveImage(4)}
          >
            <img
              src={Bronx}
              alt=''
              srcSet={`${Bronx} 640w, ${BronxMedium} 1920w`}
            />
          </div>
        </div>
        <div className='side-info'>
          <h3 className='title'>{boroughsInfo[activeImage].name}</h3>
          <p className='description'>{boroughsInfo[activeImage].description}</p>
        </div>
      </div>
    </div>
  );
};

export default FiveBoroughs;
