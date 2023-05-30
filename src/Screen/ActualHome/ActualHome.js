import React from 'react'
import Home from '../Home/Home'
import {
    Grid,
    Typography,
    CircularProgress,
    Divider,
    Box,
} from "@material-ui/core";
import HomeCarousell from '../../Components/HomeCarousell';
import { Stack } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    carousellcontnr: {
        [theme.breakpoints.down("xs")]: {
            marginBottom: '10px',

        },
    }
}));

const ActualHome = () => {
    const classes = styles();

  return (
    <>
        <Stack sx={{ display: { xs: 'none', md: 'flex' }}} height={200} width='100%'></Stack>
        <Stack px={5} xs={12} className={classes.carousellcontnr}  >
            <HomeCarousell />
            <Divider />
        </Stack>
        <Home/>
    </>
  )
}

export default ActualHome