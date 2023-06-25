import React, { useEffect } from 'react';
import {
    Grid,
    Box,
    Typography,
    Button,
    Container,
    Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Hero from '../../Components/Hero';

import { Link } from "react-router-dom";
import { useNavigate, useParams, useLocation } from 'react-router';
import ProductForm from './ProductForm';


const styles = makeStyles((theme) => ({
    backBtn: {
        backgroundColor: 'white',
        color: '#FF0000 !important',
        width: '50px',
        height: '60px',
        borderRadius: '50% ',
        cursor:'pointer',
        "&:hover": {
            backgroundColor: 'white',
            color: '#FF0000',
        }
    },
    topMargin: {
        marginTop: '15vh'
    },
    a: {
        display: "flex",
        // justifyContent: "center",
        cursor: "pointer",
        textDecoration: "none",
        color: "black",
        opacity: "0.8",
        margin: "20px 0px",
    },
}));

const AddProduct = () => {
    const classes = styles();
    const navigate = useNavigate();
    const access = localStorage.getItem("addProductAccess")
    const goBack = () => {
        navigate('/')
    }

    useEffect(()=> {
        if(!access){
            navigate("/")
        }
    }, [access])

    return (
        <>
        <Hero name='Add Product'></Hero>
        <Container style={{ marginTop: '30px' }} >
            <Grid container style={{ margin: '20px 0px' }} >
                <Grid item xs={12} >
                    <button className={classes.backBtn} variant='contained' onClick={goBack} > <ArrowBackIcon fontSize="large" /> </button>
                </Grid>

                <Grid item xs={12} style={{ margin: '20px 0px' }} >
                    <Typography className={classes.breadCumbColor} variant='h6' >
                        <Link style={{ color: "#007BFF", textDecoration: "none" }} to="/">
                            Home
                        </Link>
                        <span style={{ color: "gray", textDecoration: "none" }}  > / Add Product</span>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container 
            // style={{ borderRight: "1px solid gray" }}
            >
                <Grid
                    item
                    xs={12}
                    md={12}
                    // style={{ backgroundColor: "#faf3dd", borderRadius: "10px" }}
                >
                <ProductForm/>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default AddProduct;
