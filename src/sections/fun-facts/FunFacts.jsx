import './FunFacts.css';

import React from 'react';

const FunFacts = () => {
  return (
    <div className='fun-facts' id='fun-facts'>
      <h2>Fun Facts About NYC</h2>
      <div className='fun-facts-grid'>
        <div className='grid-item a'>
          <div className='fade-screen'></div>
          <p className='item-title'>So Many Languages</p>
          <p className='item-description'>
            New York City is one of the most linguistically diverse places in
            the world. With over 800 spoken languages, it's a true melting pot
            of cultures.
          </p>
        </div>
        <div className='grid-item b'>
          <div className='fade-screen'></div>
          <p className='item-title'>NYC Subway</p>
          <p className='item-description'>
            NYC's subway sustem is home to over 15,150 different life forms.
          </p>
        </div>
        <div className='grid-item c'>
          <div className='fade-screen'></div>
          <p className='item-title'>Largest Gold Storage in the World</p>
          <p className='item-description'>
            New York City's Federal Reserve Bank has the largest gold storage in
            the world. The vault is 80 feet below street level and contains $90
            billion in gold.
          </p>
        </div>
        <div className='grid-item d'>
          <div className='fade-screen'></div>
          <p className='item-title'>Enormous Library</p>
          <p className='item-description'>
            The New York Public Library has over 50 million books and other
            items and is the second largest library system in the nation after
            the Library of Congress. It is also the 3rd largest library in the
            world.
          </p>
        </div>
        <div className='grid-item e'>
          <div className='fade-screen'></div>
          <p className='item-title'>First Capital</p>
          <p className='item-description'>
            New York City became the first capital of the United States in 1789.
          </p>
        </div>
        <div className='grid-item f'>
          <div className='fade-screen'></div>
          <p className='item-title'>Population</p>
          <p className='item-description'>
            The population of NYC alone exceeds that of 39 US states.
          </p>
        </div>
        <div className='grid-item g'>
          <div className='fade-screen'></div>
          <p className='item-title'>Pizza</p>
          <p className='item-description'>
            New York City is home to America's first pizzaria, Lombardi's,
            opened in 1905.
          </p>
        </div>
        <div className='grid-item h'>
          <div className='fade-screen'></div>
          <p className='item-title'>Millionaires</p>
          <p className='item-description'>
            Millionaires account for 1 out of every 21 New Yorkers
          </p>
        </div>
        <div className='grid-item i'>
          <div className='fade-screen'></div>
          <p className='item-title'>Coastline</p>
          <p className='item-description'>
            NYC's coastline is 520 miles. That's larger than the coastlines of
            Miami, Boston, LA, and SF combined.
          </p>
        </div>
        <div className='grid-item j'>
          <div className='fade-screen'></div>
          <p className='item-title'>Stats</p>
          <p className='item-description'>
            You're 10 times more likely to be bitten by a New Yorker than a
            shark
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
