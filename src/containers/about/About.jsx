import React from 'react';
import './about.css';
import Feature from '../features/Feature';

const About = () => {
  return (
    <div className='chess__about section__margin' id="about">
      <div className='chess__about-feature'>
        <Feature />
      </div>
      <div className='chess__about-heading'>
        <h1 className='gradient__text'>Our Mission</h1>
        <p>See Upcoming Events</p>
      </div>
      <div className='chess__about-container'>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default About
