import React from 'react';
import {Home , Events, Officers} from '../src/routes'
import {Routes, Route} from 'react-router-dom';

import { Footer, Possibility, Features, About, Header} from './containers';
import { Navbar} from './components';
import './App.css';
const App = () => {
  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<div><Navbar/><Events/></div>}/>
          <Route path="/officers" element={<div><Officers/></div>}/>
        </Routes>
    </div>
    
  )
}

export default App
