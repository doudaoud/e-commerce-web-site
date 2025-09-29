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
      <IconButton size="small"
      onClick={() => {
        Setopen(false);
      }
      }>
        <CloseIcon />
      </IconButton>

      {/* Champ de recherche */}
      <Box sx={{ width: "482px", mt: 1 }}>
        <TextField
          fullWidth
          placeholder="What would you like to buy"
          variant="outlined"
          width="482px"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 0, // angles carrés
              height: "40px", // même hauteur que la photo
            },
            "& .MuiOutlinedInput-input": {
              padding: "8px 12px",
            },
          }}
        />
      </Box>
    </Paper>
  );
}
