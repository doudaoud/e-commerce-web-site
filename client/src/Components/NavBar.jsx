import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center  ",
        height: "71px",
        backgroundColor:'green'
      }}
    >
      <div className="container-left">
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
        </ul>
      </div>
      <div className="container-center">
        <h3>
          <Link to="/">STYNRA</Link>
        </h3>
      </div>

      <div className="container-right" >
        <Button
          variant="text"
          sx={{
            color: "rgb(16,16,16)",
          }}
        >
          <SearchIcon />
          SEARCH
        </Button>
        <Link to="/contact-us">CONTACT</Link>
        <Button
          variant="text"
          sx={{
            color: "rgb(16,16,16)",
          }}
        >
          PAGES <AddIcon />
        </Button>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
}
