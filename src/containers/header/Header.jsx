import React from 'react';
import './header.css';
import playing from '../../assets/playing-chess.jpg';

const Header = () => {
  return (
    <div className='chess__header section__padding' id='home'>
      <div className='chess__header-content '>
        <h1 className='gradient__text'>
          Welcome to Hunter Chess Club
        </h1>
        <p>Join the community of avid chess players and improve your skills! Check out our Discord and Instagram for upcoming events.</p>
        
      </div>
      <div className='chess__header-image'>
        <img src={playing} alt="playing" />
      </div>
    </div>
  )
}

export default Header
