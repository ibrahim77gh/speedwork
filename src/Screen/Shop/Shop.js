import React from 'react'
import Hero from '../../Components/Hero'
import Home from '../Home/Home'
import { Stack } from '@mui/material'

const Shop = () => {
  return (
    <Stack>
        <Hero name='Shop'></Hero>
        <Home/>
    </Stack>
  )
}

export default Shop