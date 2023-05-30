import React from 'react'
import { Stack, Typography, Box, Grid, TextField, Container, Button } from '@mui/material'
import { Form } from 'react-router-dom'
import Hero from '../../Components/Hero'

const AddProduct = () => {
  return (
    <>
        <Hero name='Add Product'></Hero>
        <Box width='100vw' height='100vh' alignItems='center' justifyContent='center' my={10} bgcolor='rgba(18,18,18,0)'>
            <Container component="main" alignItems='center' justifyContent='center' maxWidth="xs" bgcolor='black' sx={{backgroundColor:'warning.light' ,padding:'30px', borderColor:'black', borderRadius:'10px'}}>
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <form>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="name"
                            label="Enter Name of Product"
                            name="name"
                            autoComplete="name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="price"
                            label="Enter Price"
                            name="price"
                            autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="description"
                            label="Enter Description"
                            id="description"
                            autoComplete="new-password"
                            />
                        </Grid>
                        </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor:'warning.dark' }}
                        >
                            Add Product
                        </Button>
                    </Box>
                </form>
                </Box>
            </Container>
        </Box>
    </>
  )
}

export default AddProduct