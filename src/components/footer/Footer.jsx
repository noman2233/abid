import React from "react";
import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
    const date=new Date
    const year=date.getFullYear()
    console.log(year)
  return (
    <div className="footer_container">
    <div className="footer">
      <div className="footer_col_1">
        <img src="./images/footer logo 3.jpeg" alt="" className="footer_logo" />
      </div>
      <div className="footer_col_2">
        <img src="./images/footer logos.jpeg" alt="" className="footer_logo_2"/>
      </div>
      <div className="footer_col_3">
        <ul>
          <li className="heading_footer">Quick Links</li>
          <li>Book Now</li>
          <li>Gallery</li>
          <li>FAQ's</li>
        </ul>
      </div>
    </div>
    <div className="footer_copyright">
    <div className="footer_icons">
        <FacebookOutlinedIcon className="footer_icon"/>
        <GoogleIcon className="footer_icon"/>
        <XIcon className="footer_icon"/>
    </div>
    <p className="copyright_text">
       Copyright All Right Reserved {year}
    </p>

    </div>
    </div>
  );
};

export default Footer;
