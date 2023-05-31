import React, { useState } from 'react'
import { Typography, makeStyles, Grid,  OutlinedInput, Button } from "@material-ui/core";
import emailjs from 'emailjs-com';


const useStyles = makeStyles((theme) => ({
    filed: {
        width: "55%",
        backgroundColor: "white",
        borderRadius: "20px",
        margin: "20px 0px",
        [theme.breakpoints.down('md')]: {
            width: "90%"
        },

    },
    image:{
        marginTop:'20px',
    },
    center: {
        display: "flex",
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: "center",
        },
        // backgroundColor: 'yellow'
    },
    inputField: {
        // fontSize: "1.6em",
        width: "100%",
    },
    head: {
        fontFamily: "Mukta",
        [theme.breakpoints.down('md')]: {
            marginLeft: "5%",
        }
    },
    btn: {
        padding: "10px 20px",
        backgroundColor: "red",
        color: "#faf3dd !important",
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: "5px",
        [theme.breakpoints.down('md')]: {
        },
        "&:hover": {
            backgroundColor: "#5e6472",
            color: "#faf3dd",
        }
    }
}));

const ProductForm = () => {
    const classes = useStyles();


    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('service_u92xt1r', 'template_bsw5n3b', e.target, 'VtgmgoIUhA7rLbrNk')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        // e.target.reset();
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <div>
                <Grid container>
                    <Grid className={classes.center} item xs={12}>
                        <Typography variant="h3" className={classes.head} >Add Product</Typography>
                    </Grid>
                    <Grid item className={classes.center} xs={12}>
                            <OutlinedInput
                                required
                                className={classes.image}
                                type='file'
                                name="image"
                            />
                    </Grid>
                    <Grid item className={classes.center} xs={12}>
                            <OutlinedInput
                                placeholder="Product Name"
                                className={classes.filed}
                                required
                                name="name"
                            />
                    </Grid>
                    <Grid item className={classes.center} xs={12}>
                            <OutlinedInput
                                placeholder="Price"
                                className={classes.filed}
                                required
                                name="price"
                            />
                    </Grid>
                    <Grid item className={classes.center} xs={12}>
                        {/* <TextField label="What are you looking for?" type="text" className={classes.filed} style={{backgroundColor:"white",borderRadius:"10px"}} variant="filled" /> */}
                        <OutlinedInput
                            required
                            multiline
                            rows={5}
                            placeholder="Description"
                            className={`${classes.filed} ${classes.multiline}`}
                            // onChange={e => setMessage(e.target.value)}
                            // value={message}
                            name="description"
                        />
                    </Grid>
                    <Grid item className={classes.center} xs={12}>
                        <Button type="submit" value="Send" className={classes.btn}>Submit Now</Button>
                    </Grid>
                </Grid>
            </div>
        </form>
    )
}

export default ProductForm