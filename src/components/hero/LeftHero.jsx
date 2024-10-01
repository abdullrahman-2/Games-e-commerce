import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules';
import "./swiper.css";

export default function LeftHero() {
    const theme = useTheme()
  return (
    <Swiper
         loop={true}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper"
    >
{[
  {imgPath:'imgs/swiper1.jpg'},
  {imgPath:'imgs/swiper2.jpg'},
  {imgPath:'imgs/swiper3.jpg'},
  {imgPath:'imgs/swiper4.jpg'},
  {imgPath:'imgs/swiper5.jpg'},
  {imgPath:'imgs/swiper6.jpg'},
  {imgPath:'imgs/swiper7.jpg'},
  {imgPath:'imgs/swiper8.jpg'},

].map((i)=>{
  return(
    <SwiperSlide key={i}>

        <img src={i.imgPath} />
        <Box sx={{ position: "absolute", left: "10%", textAlign: "left",
      
        
         }}>
          <Typography variant="h5" sx={{ color: "#FABC3F",
          
            [theme.breakpoints.down('sm')]: {
      fontSize:"13px"},
   
     
      
       }}>
            Games Collection
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#FABC3F", fontWeight: "400", my: 1,    [theme.breakpoints.down('sm')]: {
      fontSize:"13px"},
      }}>
            Pc
          </Typography>

          <Stack
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Typography variant="h4" mr={1} sx={{ color: "#FABC3F",    [theme.breakpoints.down('sm')]: {
      fontSize:"13px"},
       }}>
              Sale Up to
            </Typography>
            <Typography variant="h4"   sx={{ color: "#fff",    [theme.breakpoints.down('sm')]: {
      fontSize:"13px"},
      }}>
              30% OFF
            </Typography>
          </Stack>

          <Typography
            variant="body1"
            sx={{ fontWeight: "300", my: 1, color: "#FFE5CF",    [theme.breakpoints.down('sm')]: {
      fontSize:"13px"},
     }}
            color="initial"
          >
            Get Free Game on Order Over 99.99$
          </Typography>

          <Button
          onClick={()=>{
            window.scrollTo({
  top: 950,
  behavior: 'smooth' // Optional, for smooth scrolling
});
          }}
            sx={{
              px: 5,
              py: 1,
              mt: 2,
              background: "#222",
              boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
              color: "#fff",
              borderRadius: "7px",
              "&hover": {
                bgcolor: "#FF885B",
                boxShadow: "0px 4px 16px rgba(43,52,69,0.2)",
              },
              [theme.breakpoints.down('sm')]: {
      fontSize:"11px",width:"70%",height:"13%", px:1,py:1}
     
            }}
          >
            Shop Now
          </Button>
        </Box>
      </SwiperSlide>
  )
})}

     

      
    </Swiper>
  );
}
