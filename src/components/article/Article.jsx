import React from 'react';
import './article.css';

const Article = ({imgUrl, name, position}) => {
  return (
    <div className='chess__officers-container_profile'>
      <div className='chess__officers-container_profile-image'>
        <img src={imgUrl} alt="officer profile" />
      </div>
      <div className='chess__officers-container_profile-content'>
        <div>
          <h1>{position}</h1>
          <h3>{name}</h3>
        </div>
        <p>Learn more &gt;&gt;</p>
      </div>
    </div>
  )
}

export default Article
