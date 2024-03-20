import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="./images/logo.png" alt="" className="logo_navbar" />
      <ul className='navbar_ul'>
        <li>Gallery</li>
        <li>Book Now</li>
        <li>FAQ's</li>
      </ul>
      <div className="navbar_buttons">
        <button className='button_1'>SignIn</button>
        <button className='button_2'>Get Started</button>
      </div>
    </div>
  )
}

export default Navbar
