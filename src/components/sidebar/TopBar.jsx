import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
        <MenuIcon  className="menu_item" />
    </div>
  );
};

export default TopBar;
