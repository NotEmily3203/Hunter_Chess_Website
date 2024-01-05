import React from 'react';

import { Footer, Blog, Possibility, Features, About, Header} from './containers';
import { CTA, Brand, Navbar} from './components'

import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <About/>
      <Features />
      <Possibility />
      <Footer />
    </div>
    
  )
}

export default App
