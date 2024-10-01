import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ProductSection from "./ProductSection";
import { useTheme } from "@emotion/react";
import { useGetgameByNameQuery } from "../../redux/game";

import CircularProgress from '@mui/material/CircularProgress';
export default function Main() {

  const All = 'https://game-api2.vercel.app/data'
  const Action = 'https://game-api2.vercel.app/data?attributes.Categories=Action'
  const Adventure = 'https://game-api2.vercel.app/data?attributes.Categories=Adventure'
  const Horror = 'https://game-api2.vercel.app/data?attributes.Categories=Horror'
  const [filter,setFilter] = useState(All)

  const { data, error, isLoading } = useGetgameByNameQuery(filter)

  const theme = useTheme();
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={3}
        flexWrap={'wrap'}
      >
        <Box>
          <Typography variant="h6">Chose Your Game</Typography>

          <Typography variant="body1" fontWeight={3000}>
            All our new Games In Exclusive brand selection
          </Typography>
        </Box>

        <Box>
          <ToggleButtonGroup
            color="error"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              display: "flex",
              gap: 3,
              flexWrap:"wrap"
            }}
          >
            <ToggleButton
            onClick={()=>setFilter(All)}
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value="left"
              aria-label="left aligned"
            >
              All Games
            </ToggleButton>
            <ToggleButton
             onClick={()=>setFilter(Action)}
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value="center"
              aria-label="centered"
            >
              Action Games  
            </ToggleButton>
            <ToggleButton
             onClick={()=>setFilter(Adventure)}
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value="right"
              aria-label="right aligned"
            >
              Adventure Games
            </ToggleButton>
            <ToggleButton
             onClick={()=>setFilter(Horror)}
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value="bottom"
              aria-label="bottom aligned"
            >
              Horror Games
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>
          
      <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-between'}>
        {data? <ProductSection  apiData={data} />:   <CircularProgress />} 
      </Stack>
    </Container>
  );
}
