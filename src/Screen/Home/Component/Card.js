import React from 'react'
import {
    Box,
    Typography,
    Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useNavigate } from 'react-router';
import { Link } from "react-router-dom"

const styles = makeStyles((theme) => ({
    prodctImage: {
        borderRadius: '25px',
        width: '50%',
        height: 'auto',
        objectFit: 'cover',
        aspectRatio: '3/2',
        // display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    productCard: {
        borderRadius: '25px',
        // height: '350px',
        margin: '10px 10px',
        backgroundColor: 'white',
        paddingTop: '20px',
        cursor: 'pointer',
        transition: 'transform .2s',
        display: 'flex',
        flexDirection: "column !important",
        // justifyContent: 'center',
        alignItems: 'center',
        outline: '2px solid #FF0000',
        padding: '10px',
        "&:hover": {
            boxShadow: "0 2px 5px 0 rgba(0, 0, 0, .25), 0 3px 10px 4px rgba(0, 0, 0, 0.5) !important;",
            // transform: 'scale(1.1)',
        },
    },
    price: {
        fontWeight: "bold"
    },
    postBtn: {
        backgroundColor: "#FF0000 !important",
        color: "white !important",
        border:'none',
        borderRadius:'5px',
        fontSize:'15px',
        cursor:'pointer',
        padding:'15px 20px',
        marginLeft: 'auto',
        "&:hover": {
            backgroundColor: "#FF0000 !important",
            color: "white !important",

        },
    }
}));

const Card = (props) => {

    const classes = styles();

    const navigate = useNavigate();

    const calculateDiscount = (discount, amount) => {
        let onePerc = amount / 100;
        let discountPerc = onePerc * discount;
        return amount - discountPerc;
    }

    const calculateWithoutDiscount = (discount, amount) => {
        let remainPerc = 100 - discount;
        let perc = amount * 100;
        return perc / remainPerc;
    }

    return (
        <Box className={classes.productCard} >

            <img className={classes.prodctImage} src={props?.image} alt="Product Image" />

            <Box>
                <Typography variant='h5' style={{ margin: '10px 0px', color: 'Black', fontWeight: 'bold', textOverflow:'ellipsis', textAlign:'center'}}  >{props?.name}</Typography>
            </Box>
            <Box>
                <Typography style={{ margin: '10px 0px', fontSize: '16px',textAlign:'center',color:'gray', textOverflow:'ellipsis' }}  >{props?.description}</Typography>
            </Box>
            {/* <Box style={{ margin: '0px 24px' }} >
                {props?.discount == 0 && <Typography variant="h6" className={classes.price} >
                    Rs. {props?.price}
                </Typography>}
            </Box> */}
            <Box style={{ display: "flex" }} mr={3}  >
                <button onClick={() => navigate(`/product/${props.id}`)} className={classes.postBtn} >
                    View
                </button>
            </Box>
        </Box>
    )
}

export default Card
