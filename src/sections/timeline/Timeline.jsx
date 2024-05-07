import './Timeline.css';
import React, { useState } from 'react';

import Background from '../../images/timeline/Background.jpg';

import GreatFire from '../../images/timeline/GreatFire.jpeg';
import ErieCanal from '../../images/timeline/ErieCanal.jpg';
import CentralPark from '../../images/timeline/CentralPark.jpeg';
import Riots from '../../images/timeline/Riots.jpg';
import BrooklynBridge from '../../images/timeline/BrooklynBridge.jpg';
import EllisIsland from '../../images/timeline/EllisIsland.jpeg';
import FactoryFire from '../../images/timeline/FactoryFire.png';
import September11 from '../../images/timeline/September11.webp';

const Timeline = () => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const events = [
    {
      date: '1776',
      name: 'Great Fire of 1776',
      description:
        'The Great Fire of 1776 was a devastating event that occurred during the early stages of the American Revolutionary War in New York City. Starting on September 21, 1776, the fire destroyed a significant portion of the city, including roughly one-quarter of the buildings. It was suspected to be the result of arson by either American or British forces. The fire caused widespread chaos and hindered American efforts to defend the city against British occupation. Despite the destruction, the city eventually recovered and played a crucial role in the war for independence.',
      img: GreatFire,
    },
    {
      date: '1825',
      name: 'Erie Canal',
      description:
        "The Erie Canal, completed in 1825, was a groundbreaking feat of engineering that connected the Great Lakes to the Hudson River in New York. Stretching over 363 miles, it revolutionized transportation and commerce, allowing goods to be transported more efficiently and affordably between the Midwest and the East Coast. Its construction spurred economic growth, settlement, and industrial development along its route. The canal's success inspired the creation of numerous other canals and contributed significantly to the growth of New York City as a major commercial center.",
      img: ErieCanal,
    },
    {
      date: '1853',
      name: 'Central Park',
      description:
        "Central Park, established in 1858, is a 843-acre green oasis in the heart of Manhattan, New York City. Designed by Frederick Law Olmsted and Calvert Vaux, it offers a tranquil escape from the urban hustle. With lush landscapes, meandering paths, scenic bridges, and serene lakes, it's a haven for recreation and relaxation. Home to iconic landmarks like Bethesda Terrace and Strawberry Fields, it hosts concerts, events, and outdoor activities year-round, attracting millions of visitors annually.",
      img: CentralPark,
    },
    {
      date: '1860s',
      name: 'New York City draft riots',
      description:
        'The New York City Draft Riots of 1863 were a violent uprising primarily by working-class Irish immigrants against the Civil War draft and its disproportionate impact on the poor. Lasting five days, it resulted in widespread destruction, with rioters targeting symbols of wealth, abolitionists, and African Americans. It exposed deep social and racial tensions, leading to reforms in the draft system and highlighting the need for addressing social inequalities.',
      img: Riots,
    },
    {
      date: '1883',
      name: 'Brooklyn Bridge',
      description:
        "The Brooklyn Bridge, completed in 1883, spans the East River, connecting Manhattan and Brooklyn. It's an iconic symbol of engineering excellence and urban beauty. Designed by John Augustus Roebling, it was the longest suspension bridge of its time. Its elegant Gothic towers and web-like cables make it a marvel of 19th-century engineering. Today, it serves as a vital transportation link for pedestrians, cyclists, and vehicles, offering stunning views of the New York City skyline.",
      img: BrooklynBridge,
    },
    {
      date: '1892',
      name: 'Ellis Island',
      description:
        "Ellis Island, located in New York Harbor, served as the United States' busiest immigrant inspection station from 1892 to 1954. It processed over 12 million immigrants seeking entry into the country, making it a symbol of hope and opportunity for generations. The island's main building, now a museum, showcases exhibits detailing the immigrant experience, including inspection procedures, living conditions, and personal stories. Today, it stands as a poignant reminder of America's diverse heritage and the resilience of those who sought a new life in the land of opportunity.",
      img: EllisIsland,
    },
    {
      date: '1911',
      name: 'Triangle Shirtwaist Factory fire',
      description:
        'The Triangle Shirtwaist Factory fire occurred on March 25, 1911, in New York City. It was one of the deadliest industrial disasters in U.S. history, claiming the lives of 146 garment workers, mostly young immigrant women. The fire was caused by unsafe working conditions, including locked exit doors and inadequate fire escapes. This tragedy led to widespread reforms in labor laws and workplace safety regulations, sparking a movement for improved working conditions and labor rights.',
      img: FactoryFire,
    },
    {
      date: '2001',
      name: 'September 11 attacks',
      description:
        'The September 11 attacks, often referred to as 9/11, were a series of coordinated terrorist attacks by the Islamic extremist group al-Qaeda against the United States on September 11, 2001. Four commercial airliners were hijacked by 19 terrorists, resulting in the destruction of the Twin Towers of the World Trade Center in New York City and significant damage to the Pentagon in Arlington, Virginia. Nearly 3,000 people were killed in the attacks, including passengers and crew aboard the airplanes as well as first responders and civilians in the targeted buildings. The attacks led to profound changes in U.S. foreign and domestic policy, including the launch of the War on Terror and increased security measures.',
      img: September11,
    },
  ];

  return (
    <div className='timeline'>
      <img src={Background} alt='' className='background-img' />
      <div className='left'>
        <h2>Important Events in NYC History</h2>
        <div className='events-container'>
          <ul className='events-dots'>
            {events.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`event-dot ${
                    index === activeEventIndex ? 'active' : ''
                  }`}
                  onClick={() => setActiveEventIndex(index)}
                >
                  <p className='event-date'>{item.date}</p>
                  <p className='event-name'>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='right'>
        <h3>{events[activeEventIndex].name}</h3>
        <p className='description'>{events[activeEventIndex].description}</p>
        <img src={events[activeEventIndex].img} alt='' />
      </div>
    </div>
  );
};

export default Timeline;
