import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
export default function Container_buttons() {
  return (
    <div className="ontainer-buttons">
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blue",
        }}
      >
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
    </div>
  );
}
