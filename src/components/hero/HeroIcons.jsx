import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import {
  ElectricBolt,
  CreditScoreOutlined,
  WorkspacePremiumOutlined,
  AccessAlarmOutlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
export default function HeroIcons() {
  const theme = useTheme();
  return (
    <Container sx={{bgcolor : theme.palette.mode === 'dark' ? "#000":"#fff",mt:3}}>
      <Stack divider={<Divider orientation="vertical" flexItem /> } flexWrap={'wrap'} direction={"row"} alignItems={"center"}>
        {[
          {
            icons: <ElectricBolt />,
            bigTitle: "Fast Deliver",
            title: "start from 10$",
          },
          {
            icons: <CreditScoreOutlined />,
            bigTitle: "money guarantee",
            title: "7 days back",
          },
          {
            icons: <WorkspacePremiumOutlined />,
            bigTitle: "356 day",
            title: "for free return",
          },
          {
            icons: <AccessAlarmOutlined />,
            bigTitle: "Payment",
            title: "secure system",
          },
        ].map((icon) => {
          return (
            <Box
              sx={{
                width: "200px",
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                gap: 3,
                justifyContent: "center",
                py: 1.6,
             color: theme.palette.text.primary
              }}
              key={icon}
            >
              {icon.icons}

             <Box>
                 <Typography  sx={{
                    
                     color: theme.palette.text.primary
                   }}  variant="body1" >
                   {icon.bigTitle}
                 </Typography>
                 <Typography
                   variant="body1"
                   sx={{
                     fontWeight: 300,
                     color: theme.palette.text.secondary
                   }}
                 >
                   {icon.title}
                 </Typography>
             </Box>

            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}
