import { Box, Paper, Typography } from "@mui/material";
import React from "react";


export default function Links({title}) {
  return (
    <>
      <Box sx={{
        ":hover .show-hover":{display:'block',cursor:'pointer'},
        ":hover ":{cursor:'pointer'},zIndex:3,
         position:'relative', display: "flex", alignItems: "center" }}>
        <Typography variant="body1">{title}</Typography>

      
      </Box>
    </>
  );
}
