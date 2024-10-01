import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box
    sx={{
        bgcolor:"#2b3445",
        py:1.3,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    }}>
    <Typography variant="h6" color="HighlightText"
    display={'flex'}

    justifyContent={'center'}
    alignItems={"center"}
    sx={{fontSize:18}}
    >
      Designed and Development By Abdullrahman

    </Typography>
    </Box>
  )
}
