import React from 'react';
import {
    Grid,
    Box,
    Button,
    Container,
    Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import fb from "../Assets/SocialIcons/facebook.svg";
import insta from "../Assets/SocialIcons/instagram.svg";

import { Link } from "react-router-dom";
import { useNavigate, useParams, useLocation } from 'react-router';
import { Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../Assets/logo.png'

const styles = makeStyles((theme) => ({
    backBtn: {
        backgroundColor: 'white',
        color: '#FF0000',
        width: '50px',
        height: '60px',
        borderRadius: '50%',
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
    mobileAlign: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0px',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'start',
        }
    }
}));

const Footer = () => {
    const classes = styles();
    const navigate = useNavigate();
    const location = useLocation();

    function logout (){
        localStorage.removeItem('token')
        localStorage.removeItem('uid')
        localStorage.clear();
        navigate('/')
    }

    return (
        <Stack width='100vw' py={5} bgcolor='#222' justifyContent='space-evenly' direction={{ sm: 'column', md: 'row' }} paddingTop={5} alignItems='flex-start'>
            <img style={{ objectFit:'cover', height:'100px', margin: '5px', cursor: 'pointer' }} src={logo} />
            <Stack width={150} alignItems='center' spacing={3}>
                <Typography variant='h5' color='white'>Social Media</Typography>
                <a href="https://www.facebook.com/speedworksperformance?_ga=2.163110076.1477238817.1684264712-943521976.1684264712"><FacebookIcon/></a>
                <a href="https://www.instagram.com/speedworksperformance/?hl=en&_ga=2.103520000.1477238817.1684264712-943521976.1684264712"><InstagramIcon/></a>
            </Stack>
            <Stack width={150} alignItems='center' spacing={1}>
                <Typography variant='h5' color='white'>Links</Typography>
                <Button onClick={() => navigate('/')}>
                    <Typography color='grey' >Home</Typography> 
                </Button>
                <Button onClick={() => navigate('/shop')}>
                    <Typography color='grey' >Shop</Typography> 
                </Button>
                <Button onClick={() => navigate('/privacy-policy')}>
                    <Typography color='grey' >Privacy Policy</Typography> 
                </Button>
                <Button onClick={() => navigate('/terms-and-conditions')}>
                    <Typography color='grey' >Terms and Conditions</Typography> 
                </Button>
                <Button onClick={() => navigate('/contact')}>
                    <Typography color='grey' >Contact</Typography> 
                </Button>
                <Button onClick={() => logout()}>
                    <Typography color='grey' >Logout</Typography> 
                </Button>
            </Stack>
            <Stack width={150} alignItems='center' spacing={3}>
                <Typography variant='h5' color='white'>My Account</Typography>
                <Typography color='grey'>Cart</Typography>
                <Typography color='grey'>Checkout</Typography>
                <Typography color='grey'>My Account</Typography>
            </Stack>
        </Stack>
    );
};

export default Footer;

