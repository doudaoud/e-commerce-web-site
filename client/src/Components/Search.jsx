import "./styles/search.css";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { SearchContext } from "../contexts/Searchcontext";
import Textfeild from "./Textfeild";
export default function SearchBar() {
  const { Setopen } = useContext(SearchContext);
  return (
    <Paper
      className="search-bar"
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "550px",
        maxWidth: 700,
        margin: "40px auto",
        padding: "8px 16px",
        backgroundColor: "#fff",
        borderRadius: 0,
      }}
    >
      {/* Bouton close en haut à droite */}
      <IconButton
        size="small"
        onClick={() => {
          Setopen(false);
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Champ de recherche */}
      <Textfeild/>
    </Paper>
  );
}
