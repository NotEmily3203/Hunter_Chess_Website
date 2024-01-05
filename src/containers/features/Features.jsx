import React from 'react';
import './features.css';
import { Feature } from '../../components';

//this is a map/array
const featuresData = [
  {
    title:'Baruch x Hunter pt.2',
    text: "Baruch's Chess Club came over to Hunter's Campus, looking for a rematch"
  },
  {
    title:'Baruch x Hunter pt.1',
    text: "Hunter Chess Club traveled to Baruch Campus' Courtyard for a friendly competition"
  },
  {
    title:'Chess in the Park',
    text: "Hunter Chess Club visited Bethesda Fountain in Central Park, participating in the Chess in the park event hosted by Chess in the Schools"
  }
]

const Features = () => {
  return (
    <div className='chess__features section__padding' id="features">
      <div className='chess__features-heading'>
        <h1 className='gradient__text'>Check out what we've been up to!</h1>
        <p>View some of the events we attended from the Fall 2023 semester</p>
      </div>
      <div className='chess__features-container'>
        {featuresData.map((item,index) => 
          <Feature title={item.title} text={item.text} key={item.title+index}/>
        )}
      </div>
    </div>
  )
}

export default Features
