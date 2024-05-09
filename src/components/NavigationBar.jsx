import './NavigationBar.css';

import React from 'react';

const NavigationBar = () => {
  return (
    <div>
      <nav className='main-nav'>
        <ul>
          <li>
            <a href='#start-screen'>About City</a>
          </li>
          <li>
            <a href='#timeline'>Important Events</a>
          </li>
          <li>
            <a href='#places-to-visit'>Places to Visit</a>
          </li>
          <li>
            <a href='#five-boroughs'>Five Boroughs</a>
          </li>
          <li>
            <a href='#fun-facts'>Fun Facts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
