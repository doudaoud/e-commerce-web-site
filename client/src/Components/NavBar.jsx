import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./styles/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./Search";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useContext, useState } from "react";
import { SearchContext } from "../contexts/Searchcontext";
import Buttons_responsive from "./Buttons_responsive";
import Textfeild from "./Textfeild";
export default function NavBar() {
  const { isopen, Setopen } = useContext(SearchContext);
  const [aff, Setaff] = useState(false);
  
  const [card, setCard] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center  ",
          height: "71px",
        }}
      >
        {/* container pour les composant de responsive */}
        <div className="container-left-responsive">
          <Textfeild />
        </div>
        {/*fin de container pour les composant de responsive */}
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
          <h2 style={{
            fontSize:'25px',
            
          }}>
            <Link to="/" className="STYNRA">
              STYNRA
            </Link>
          </h2>
        </div>
        {/* container pour les composant de responsive */}
        <div className="container-right-responsive">
          <IconButton>
            <LocalMallIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("/login");
            }}
          >
            <AccountCircleIcon />
          </IconButton>
          <Buttons_responsive />
        </div>
        {/* fin container pour les composant de responsive */}
        <div className="container-right">
          <Button
            variant="text"
            sx={{
              color: "rgb(16,16,16)",
            }}
            onClick={() => {
              Setopen(!isopen);
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
          <IconButton onClick={()=>  {
            Setaff(!aff)
          }}>
            <LocalMallIcon />
          </IconButton>
          <p className="card">{`(${card})`}</p>
        </div>
      </div>
    </>
  );
}
