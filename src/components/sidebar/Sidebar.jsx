import { Link } from "react-router-dom";
import "./Sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SideBar = () => {

  return (
    <div className="sidebar_menu">
      <nav className="side_menu_navbar">
      
        <ul>
          <Link to="/">
            <li>Quick Links</li>
          </Link>
          <Link to="projects">
            <li>Book Now</li>
          </Link>
          <Link to="projects">
            <li>Gallery</li>
          </Link>
          <Link to="projects">
            <li>FAQ's</li>
          </Link>
         
        </ul>
      </nav>
      
    </div>
  );
};

export default SideBar;
