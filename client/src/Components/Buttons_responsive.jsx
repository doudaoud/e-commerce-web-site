import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
export default function Buttons_responsive() {
  const [isopen, Setopen] = useState(false);
  return (
    <>
    <IconButton className="menu-responsive" aria-label="menu"
    onClick={()=>{
      Setopen(!isopen)
    }}
    >
      <MenuIcon />
    </IconButton>

   {isopen &&  <div className="ontainer-buttons">
      <ul>
        <li>
         
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/our-story">STORY</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/contact-us">CONTACT</Link>
        </li>
        <li>
          <button>
            PAGES <AddIcon />
          </button>
        </li>
      </ul>
    </div>}
      
    </>
  );
}
