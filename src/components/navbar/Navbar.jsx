import React, { useEffect, useState } from 'react'
import "./navbar.css"
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from '../sidebar/Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 650) {
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
      {isOpen && (
        <MenuIcon
          onClick={() => setOpenSidebar(!openSidebar)}
          className="menu_item"
        />
      )}
      {openSidebar && <SideBar />}
    </div>
  )
}

export default Navbar
