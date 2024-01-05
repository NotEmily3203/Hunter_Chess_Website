import React from 'react';
import { Article } from '../../components';
import { p,vp,smm,t} from './imports'
import './possibility.css';


const Possibility = () => {
  return (
    <div className='chess__officers section__padding' id="officers">
      <div className='chess__officers-headings'>
        <h1 className='gradient__text'>Meet the 2023-2024 E-Board</h1>
      </div>
      <div className='chess__officers-container'>
      <div className='chess__officers-container_profiles'>
        <Article imgUrl={p} name='Raymond Liu' position='President'/>
        <Article imgUrl={vp} name='Daniella' position='Vice President'/>
        <Article imgUrl={smm} name='Mathew' position='Social Media Manager'/>
        <Article imgUrl={t} name='Brain' position='Treasurer'/>
      </div>
      </div>
    </div>
  )
}

export default Possibility
