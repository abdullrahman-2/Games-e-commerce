import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useTheme } from "@emotion/react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SailingIcon from "@mui/icons-material/Sailing";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Close } from "@mui/icons-material";
import Links from "./Links";
import { Link } from "react-router-dom";

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.primary,
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <WindowOutlinedIcon />
          <Typography
            sx={{ padding: "0", textTransform: "capitalize", mx: 1 }}
            variant="body1"
            color="initial"
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ ".MuiPaper-root": { width: 155 } }}
        >
          <MenuItem onClick={handleClose}> Profile</MenuItem>
          <MenuItem>
            <ListItemIcon>
              <WhatshotIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Action</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <SportsSoccerIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Horror</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <SailingIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Adventure</ListItemText>
          </MenuItem>
        </Menu>

  

          {useMediaQuery('(max-width:1000px)') ? <IconButton onClick={toggleDrawer("top", true)}>
          <MenuOutlinedIcon />
        </IconButton>
        : 
           <Stack gap={2} sx={{mr:"50%"}} direction={'row'} alignItems={"center"}>
<Links title={ <Link  style={{marginTop:"10px", color: theme.palette.text.primary,textDecoration:"none"}} to="./">Home</Link> }/>
<Links title={ <Link  style={{marginTop:"10px", color: theme.palette.text.primary,textDecoration:"none"}} to="./cart">Cart</Link> }/>
     </Stack>
 }
        

        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{ ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" } }}
        >
 
          <Box
            sx={{ width: 440, mx: "auto", mt: 6, position: "relative", pt: 10 }}
          >
            <IconButton
              sx={{ position: "absolute", top: "0", right: 0 }}
              onClick={toggleDrawer("top", false)}
            >
              <Close />
            </IconButton>

           {[{title:"Home",to:"./" },
           {title:"Cart",to:"./cart" },
           
           ].map((i)=>{
            return(
             <Stack   gap={2}>
                <Link  style={{marginTop:"10px", color: theme.palette.text.primary,textDecoration:"none"}} to={i.to}>{i.title}</Link> 
             
             </Stack>
           
              
            )
           })}
          </Box>
        </Drawer>
      </Box>
    </Container>
  );
}
