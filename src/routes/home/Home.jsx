import React from 'react';
import { Footer, Possibility, Features, About, Header} from '../../containers';
import { Navbar} from '../../components';
import './home.css';
const Home = () => {
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

export default Home;
