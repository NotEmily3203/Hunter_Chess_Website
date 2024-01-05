import React from 'react';
import './about.css';
import Feature from '../../components/feature/Feature';

const About = () => {
  return (
    <div className='chess__about section__margin' id="about">
      <div className='chess__about-feature'>
        <Feature title="Where We Meet" text="We play chess in the lounge area next to the 3rd floor escalators in the West Building. Come say hi to experienced players and try your hand at a game, no reservation required!"/>
      </div>
      <div className='chess__about-heading'>
        <h1 className='gradient__text'>Our Mission</h1>
        <p>See Upcoming Events</p>
      </div>
      <div className='chess__about-container'>
        <Feature title="Community" text="Hunter's Chess Club strives to build community by uniting players through their love for chess. We aim to create a safe space where all players of all levels are welcomed to experience the game."/>
        <Feature title="Improvement" text="By joining the Hunter Chess Club, you will encounter many experienced players and better your own ELO through practice and exposure to different strategies."/>
        <Feature title="Collaboration" text="Hunter Chess Club hosts various events and attends tournaments from other universities that will need a team of players to participate in. If interested, join our Discord server for event updates!"/>
      </div>
    </div>
  )
}

export default About
