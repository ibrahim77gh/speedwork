import React from 'react'
import { Stack, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Hero = ({name}) => {
  return (
    <>
        <Stack sx={{ display: { xs: 'none', md: 'flex' }}} height={200} width='100%'></Stack>
        <Stack spacing={2} bgcolor='black' justifyContent='center' alignItems='center' height={300} width='100%'>
            <Typography variant='h2' color='white'>
                {name}
            </Typography>
            <Typography color='white'>
                <NavLink style={{ color: 'red' }} to='/'>Home</NavLink> → {name}
            </Typography>
        </Stack>
    </>
  )
}

export default Hero