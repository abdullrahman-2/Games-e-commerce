import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function RightHero() {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "block",
          width: "40.6%",
        
         
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="imgs/space-travel-collage-design_23-2150163764.avif"
        />
        <Stack
          sx={{
            position: "absolute",
            top: "40%",
            left: "71px",
            transform: "translateX(-50%)",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#fff",
              fontSize: "18px",
            }}
          >
            New Arrival
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontSize: "16px",
            }}
          >
            All Best Games
          </Typography>

          <Link
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: ".2s",
              "&:hover": {
                color: "#d23f57",
              },
            }}
            href="#"
            underline="none"
          >
            Explore Now
            <ArrowForwardIos sx={{ fontSize: "13px" }} />
          </Link>
        </Stack>
      </Box>

      <Box sx={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="imgs/epic-4k-gaming-wallpaper-pc_1046319-92115.avif"
        />
        <Stack
          sx={{
            position: "absolute",
            top: "40%",
            left: "71px",
            transform: "translateX(-50%)",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#fff",
              fontSize: "18px",
            }}
          >
            New Arrival
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontSize: "16px",
            }}
          >
            All Best Games
          </Typography>

          <Link
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: ".2s",
              "&:hover": {
                color: "#d23f57",
              },
            }}
            href="#"
            underline="none"
          >
            Explore Now
            <ArrowForwardIos sx={{ fontSize: "13px" }} />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
