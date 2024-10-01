import { Container } from '@mui/material'
import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'
import HeroIcons from './HeroIcons'

export default function Hero() {
  return (
    <>
    <Container sx={{mt:2.5,display:'flex',alignItems:'center',gap:2}}>
      <LeftHero />
      <RightHero/>
     
    </Container>
    <Container>
      <HeroIcons/>
    </Container>
    </>
  )
}
