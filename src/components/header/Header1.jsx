import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, useTheme, Typography, Stack, Container } from "@mui/material";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import FlareSharpIcon from '@mui/icons-material/FlareSharp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box sx={{ background: "#2b3445",py:"4px" }}
    
    >
     <Container  >
       <Stack direction={"row"} alignItems={"center"}>
         <Typography
           sx={{
             mr: 2,
             p: "3px 10px",
             bgcolor: "#d23f57",
             borderRadius:"12px",
             fontSize: "10px",
             fontWeight: "bold",
             color: "#Fff",
           }}
           variant="body2"
         >
           Hot
         </Typography>
      
         <Typography
           sx={{
             fontSize: "12px",
             fontWeight: "300",
             color: "#Fff",
           }}
           variant="body2">
           Free Express Shipping
         </Typography>
      
    <Box flexGrow={1}/>   
      
      
         <div>
           {theme.palette.mode === "light" ? (
             <IconButton
               onClick={() => {
                 localStorage.setItem(
                   "mode",
                   theme.palette.mode === "dark" ? "light" : "dark"
                 );
                 colorMode.toggleColorMode();
               }}
               color="red"
             >
               <FlareSharpIcon sx={{fontSize:"16px",color:"#fff"}} />
             </IconButton>
           ) : (
             <IconButton
               onClick={() => {
                 localStorage.setItem(
                   "mode",
                   theme.palette.mode === "dark" ? "light" : "dark"
                 );
                 colorMode.toggleColorMode();
               }}
               color="inherit"
             >
               <DarkModeOutlined sx={{fontSize:"16px"}} />
             </IconButton>
           )}
         </div>
      
         <TwitterIcon
           sx={{
             fontSize:"16px",
             color:"#fff"
           }}
         />
         <FacebookIcon
             sx={{
               mx:1,
             fontSize:"16px",
             color:"#fff"
           }}
         />
         <InstagramIcon
             sx={{
             fontSize:"16px",
             color:"#fff"
           }}
         />
       </Stack>
     </Container>
    </Box>
  );
}
