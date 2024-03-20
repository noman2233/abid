import React, { useEffect, useState } from 'react'
import "./navbar.css"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1010) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
