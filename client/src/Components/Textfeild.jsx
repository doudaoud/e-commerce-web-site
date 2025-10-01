import React from 'react'
import { TextField ,Box , InputAdornment} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
export default function Textfeild() {
  return (
    <>

<Box className="search-box" sx={{ width: "482px", mt: 1 }}>
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
            marginBottom: "10px",
            
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
    </>
  )
}
