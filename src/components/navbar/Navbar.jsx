import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/new_hunter_logo-removebg-preview-cropped.png'
import './navbar.css';

//naming convention is called BEM

//create variable menu for navbar linked items
// <> is a react fragment which allows html elements to be stored in a varibale and reused

const Menu =() => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#about'>About</a></p>
  <p><a href='#features'>Events</a></p>
  <p><a href='#officers'>Officers</a></p>
  <p><a href='#footer'>Contacts</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); //Mobile view of website
  return (
    <div className='chess__navbar'>
      <div className='chess__navbar-links'>
        <div className='chess__navbar-links_logo'>
          <img src={logo} alt="logo" href='#home'></img>
        </div>
        <div className='chess__navbar-links_container'>
            <Menu/>
        </div>
      </div>
      <div className='chess__navbar-sign'>
          <p>Sign in</p>
          <button type="button">Sign Up</button>
      </div>
      <div className='chess__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color ="#fff" size = {27} onClick={()=>setToggleMenu(false)}/>
        : <RiMenu3Line color ="#fff" size = {27} onClick={()=>setToggleMenu(true)}/>}
        {toggleMenu && (
          <div className='chess__navbar-menu_container scale-up-center'>
            <div className='chess__navbar-menu_container-links'>
              <Menu/>
              <div className='chess__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
  )
}

export default Navbar
