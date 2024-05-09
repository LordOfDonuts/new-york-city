import './PlacesToVisit.css';

import React, { useState } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import Background from '../../images/places-to-visit/Background.jpg';

import ArtMuseum from '../../images/places-to-visit/ArtMuseum.jpg';
import Broadway from '../../images/places-to-visit/Broadway.jpg';
import BrooklynBridge from '../../images/places-to-visit/BrooklynBridge.jpg';
import CentralPark from '../../images/places-to-visit/CentralPark.jpg';
import EmpireStateBuilding from '../../images/places-to-visit/EmpireStateBuilding.jpg';
import HighLine from '../../images/places-to-visit/HighLine.jpg';
import Memorial from '../../images/places-to-visit/Memorial.jpg';
import StatueOfLiberty from '../../images/places-to-visit/StatueOfLiberty.jpg';
import TimesSquare from '../../images/places-to-visit/TimesSquare.jpg';

const PlacesToVisit = () => {
  const places = [
    {
      name: 'The Metropolitan Museum of Art',
      description:
        "The Metropolitan Museum of Art, located in New York City, is one of the largest and most prestigious art museums in the world. Founded in 1870, it houses over two million works of art spanning 5,000 years of history. The collections include artworks from various cultures and civilizations, including European, Asian, African, and American art, as well as ancient artifacts and contemporary pieces. The museum's iconic building on Fifth Avenue features vast galleries, special exhibitions, educational programs, and stunning architecture. It serves as a cultural hub, attracting millions of visitors annually and contributing significantly to the enrichment of global art appreciation and scholarship.",
      img: ArtMuseum,
    },
    {
      name: 'Broadway',
      description:
        'New York\'s Broadway is synonymous with theater excellence, showcasing top-tier performances in the heart of Manhattan. Boasting iconic venues like the Majestic Theatre and the Shubert Theatre, Broadway offers a diverse range of productions, from classic musicals like "The Phantom of the Opera" to groundbreaking plays like "Hamilton." Its vibrant atmosphere, rich history, and star-studded casts draw audiences from around the world, making it a cultural hub and a must-visit destination for theater enthusiasts. Whether you\'re seeking dazzling musical numbers or thought-provoking dramas, Broadway promises an unforgettable experience that captures the essence of American theater',
      img: Broadway,
    },
    {
      name: 'Brooklyn Bridge',
      description:
        "The Brooklyn Bridge, an iconic symbol of New York City, spans the East River, connecting the boroughs of Manhattan and Brooklyn. Completed in 1883, it was the first steel-wire suspension bridge ever constructed. Designed by John A. Roebling, its soaring Gothic towers and intricate cable patterns make it an architectural marvel. A walk across the bridge offers breathtaking views of the Manhattan skyline, the Statue of Liberty, and the bustling river below. Its pedestrian walkway attracts tourists and locals alike, providing a scenic route for walking, jogging, and cycling. The bridge's rich history, engineering brilliance, and panoramic vistas continue to captivate visitors, making it a timeless landmark in the city's landscape.",
      img: BrooklynBridge,
    },
    {
      name: 'Central Park',
      description:
        "Central Park, located in the heart of Manhattan, is a sprawling oasis of greenery amidst the bustling cityscape of New York. Designed by Frederick Law Olmsted and Calvert Vaux, it covers 843 acres and features meadows, forests, lakes, and recreational facilities. Opened in 1858, it's one of the most visited urban parks globally, attracting millions of visitors annually. Its iconic landmarks include Bethesda Terrace, Bow Bridge, and Strawberry Fields, a memorial to John Lennon. The park offers various activities such as biking, boating, picnicking, and ice skating, depending on the season. Its lush landscapes provide a serene escape for New Yorkers and tourists alike, offering a peaceful respite from the city's hustle and bustle.",
      img: CentralPark,
    },
    {
      name: 'Empire State Building',
      description:
        "The Empire State Building, an iconic symbol of New York City, stands as a towering skyscraper in Midtown Manhattan. Completed in 1931, it held the title of the world's tallest building for nearly 40 years. Designed by William F. Lamb, its Art Deco style features distinctive setbacks and a spire at its summit, reaching a height of 1,454 feet (443 meters) to the tip of its antenna. The building boasts observatories on the 86th and 102nd floors, offering breathtaking panoramic views of the city skyline. It's illuminated with vibrant colors on special occasions, becoming a beacon for celebrations and events. A symbol of American ingenuity and ambition, the Empire State Building continues to captivate visitors from around the globe, welcoming millions each year to its observation decks and historic halls.",
      img: EmpireStateBuilding,
    },
    {
      name: 'The High Line',
      description:
        "The High Line in New York City is a unique urban park built on a historic elevated railway track. Stretching over 1.45 miles (2.33 km) along Manhattan's West Side, it offers a green oasis above the city streets. Originally built in the 1930s for freight trains, the railway fell into disuse in the 1980s. However, it was repurposed into a public park, opening its first section in 2009. The park features lush landscaping, art installations, and stunning views of the city skyline and Hudson River. It has become a popular destination for locals and tourists alike, offering a tranquil escape from the hustle and bustle of the city below. With its innovative design and cultural significance, The High Line has transformed an industrial relic into a vibrant public space, contributing to the revitalization of Manhattan's West Side.",
      img: HighLine,
    },
    {
      name: '9/11 Memorial & Museum',
      description:
        'The 9/11 Memorial & Museum in New York City is a solemn tribute to the victims of the September 11, 2001 terrorist attacks. The memorial comprises twin reflecting pools, each situated in the footprint of the former Twin Towers. Surrounding these pools are bronze panels inscribed with the names of the nearly 3,000 individuals who lost their lives that day. The museum offers exhibits documenting the events of 9/11, including artifacts, photographs, and personal stories, providing visitors with a profound and moving experience commemorating this significant moment in history.',
      img: Memorial,
    },
    {
      name: 'Statue of Liberty',
      description:
        "The Statue of Liberty, a symbol of freedom and democracy, stands on Liberty Island in New York Harbor. A gift from France to the United States in 1886, the statue represents liberty and enlightenment. Designed by Frédéric Auguste Bartholdi, it depicts a robed female figure holding a torch aloft in her right hand and a tablet inscribed with the date of the American Declaration of Independence in her left. At her feet lies a broken chain, symbolizing freedom from oppression. Visitors can explore the pedestal and observation deck, offering panoramic views of New York City and the surrounding area, and learn about the statue's history at the museum located within the pedestal.",
      img: StatueOfLiberty,
    },
    {
      name: 'Times Square',
      description:
        'Times Square, often referred to as "The Crossroads of the World," is a vibrant commercial and entertainment hub located in the heart of Manhattan, New York City. Renowned for its dazzling billboards, neon lights, and bustling atmosphere, Times Square is a major tourist attraction and iconic symbol of New York City. It is home to Broadway theaters, where visitors can enjoy world-class theatrical performances, as well as numerous shops, restaurants, and entertainment venues. The area hosts various events throughout the year, including the famous New Year\'s Eve ball drop celebration, attracting millions of visitors annually. With its lively energy and diverse offerings, Times Square epitomizes the essence of urban life in New York City.',
      img: TimesSquare,
    },
  ];

  const [currentPlaceIndex, setCurrentPlaceIndex] = useState(0);

  const setPlacePositionClass = (index) => {
    let state = '';

    if (index === currentPlaceIndex) state = 'central';
    else if (index + 1 === currentPlaceIndex) state = 'left';
    else if (index + 2 === currentPlaceIndex) state = 'previous-left';
    else if (index - 1 === currentPlaceIndex) state = 'right';
    else if (index - 2 === currentPlaceIndex) state = 'previous-right';

    return state;
  };

  const changeCurrentPlaceIndex = (index) => {
    if (index < 0) setCurrentPlaceIndex(places.length - 1);
    else if (index > places.length - 1) setCurrentPlaceIndex(0);
    else setCurrentPlaceIndex(index);
  };

  return (
    <div className='places-to-visit' id='places-to-visit'>
      <img src={Background} alt='' className='background-img' />
      <h2>Places to Visit in NYC</h2>
      <div className='places-container'>
        <div className='cards'>
          <div className='default-card-container'>
            <div
              className={`card ${setPlacePositionClass(0)}`}
              onClick={() => setCurrentPlaceIndex(0)}
            >
              <h3 className='card-title'>{places[0].name}</h3>
              <img src={ArtMuseum} alt='' />
            </div>
            <div
              className={`card ${setPlacePositionClass(1)}`}
              onClick={() => setCurrentPlaceIndex(1)}
            >
              <h3 className='card-title'>{places[1].name}</h3>
              <img src={Broadway} alt='' />
            </div>
            <div
              className={`card ${setPlacePositionClass(2)}`}
              onClick={() => setCurrentPlaceIndex(2)}
            >
              <h3 className='card-title'>{places[2].name}</h3>
              <img src={BrooklynBridge} alt='' />
            </div>
            <div
              className={`card ${setPlacePositionClass(3)}`}
              onClick={() => setCurrentPlaceIndex(3)}
            >
              <h3 className='card-title'>{places[3].name}</h3>
              <img src={CentralPark} alt='' />
            </div>
            <div
              className={`card ${setPlacePositionClass(4)}`}
              onClick={() => setCurrentPlaceIndex(4)}
            >
              <h3 className='card-title'>{places[4].name}</h3>
              <img src={EmpireStateBuilding} alt='' />
            </div>
            <div
              className={`card ${setPlacePositionClass(5)}`}
              onClick={() => setCurrentPlaceIndex(5)}
            >
              <h3 className='card-title'>{places[5].name}</h3>
              <img src={HighLine} alt='' />
            </div>
            <div
              className={`card ${setPlacePositionClass(6)}`}
              onClick={() => setCurrentPlaceIndex(6)}
            >
              <h3 className='card-title'>{places[6].name}</h3>
              <img src={Memorial} alt='' />
            </div>
            <div
              className={`card ${setPlacePositionClass(7)}`}
              onClick={() => setCurrentPlaceIndex(7)}
            >
              <h3 className='card-title'>{places[7].name}</h3>
              <img src={StatueOfLiberty} alt='' />
            </div>
            <div
              className={`card ${setPlacePositionClass(8)}`}
              onClick={() => setCurrentPlaceIndex(8)}
            >
              <h3 className='card-title'>{places[8].name}</h3>
              <img src={TimesSquare} alt='' />
            </div>
          </div>
          <div className='cards-navigate'>
            <div
              className='arrow'
              onClick={() => changeCurrentPlaceIndex(currentPlaceIndex - 1)}
            >
              <FaArrowLeft />
            </div>
            <ul className='dots-list'>
              {places.map((place, index) => {
                return (
                  <li
                    key={index}
                    className={`dot ${
                      index === currentPlaceIndex ? 'active' : ''
                    }`}
                    onClick={() => setCurrentPlaceIndex(index)}
                  ></li>
                );
              })}
            </ul>
            <div
              className='arrow'
              onClick={() => changeCurrentPlaceIndex(currentPlaceIndex + 1)}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div children className='place-text'>
          <h3 className='place-name'>{places[currentPlaceIndex].name}</h3>
          <p className='place-description'>
            {places[currentPlaceIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlacesToVisit;
