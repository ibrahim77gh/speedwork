import * as React from 'react';
import * as MuiIcon from '@mui/icons-material';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryIcon from '@mui/icons-material/Category';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack, TextField, Chip, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HistoryIcon from '@mui/icons-material/History';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from "@material-ui/core/styles";

import { useNavigate, useLocation, } from 'react-router';

import { connect } from "react-redux";

import logo from '../Assets/logo.png'

import {
    // getCurrentUser
} from "../Redux/User/UserAction"
import Footer from './Footer';
import AccountMenu from './AccountMenu';

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
    selectedListItem: {
        cursor: 'pointer',
        borderLeft: '4px solid #FF0000 !important',
        backgroundColor: '#EDEDED !important',
        borderRadius: '10px !important',

    },
    notSelectedListItem: {
        cursor: 'pointer',
        "&:hover": {
            borderBottom: '4px solid #FF0000 !important'
        },
    },
    cartLengthChip: {
        fontSize: '13px',
        fontWeight: 'bold',
        backgroundColor: 'red',
        color: 'white',
        position: 'absolute',
        right: '6px',
        top: '5px',
        padding: '2px',
        borderRadius: '9px',
        width: '19px',
        height: '22px'
    },
    loginHome: {
        backgroundColor: "black",
        marginRight: "5vw",
        color: "#FCBF10",
        padding: "0px 22px",
        borderRadius: "50px",
        "&:hover": {
            backgroundColor: "black",
            color: "#FCBF10",
        },
        [theme.breakpoints.down('md')]: {
            marginRight: "2vw",
            padding: "0px 12px",
        }
    },
    logo: {
        width: '70px',
        height: '40px',
        margin: '5px',
        [theme.breakpoints.down('xs')]: {
            width: '60px',
            height: '40px',
        }
    }
}));

function SectionOne({uidState, currentUser}){
    const navigate = useNavigate();

    return(
        <Stack spacing={5} py={2} width='100%' alignItems='center' direction='row' justifyContent='center' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <img style={{ objectFit:'cover', height:'100px', margin: '5px', cursor: 'pointer' }} src={logo} onClick={() => navigate('/')} />
            
            <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                style={{ width: '700px', }}
                InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <IconButton style={{ backgroundColor: 'red' }} edge="end" size='large' aria-label="search">
                        <SearchIcon sx={{color:'white'}}/>
                    </IconButton>
                    </InputAdornment>
                ),
                style: { borderRadius: '20px', backgroundColor: 'white', },
                inputProps: {
                    style: { borderRadius: '20px', backgroundColor: 'white' },
                },
                }}
            />
                

            {(localStorage.getItem('uid') || uidState) && <>
                {Object.keys(currentUser).length > 0 && <AccountMenu />}
            </>}
            
            <Stack direction='row' spacing={1}>
                <IconButton aria-label="Login" component="span" 
                    onClick={() => navigate('/login')}
                >
                    
                    <PersonIcon sx={{transform: `scale(1.7)`}} fontSize='large' style={{ color: 'black' }} />
                </IconButton>
                <Stack color='black'>
                    <Typography>Login Here</Typography>
                    <Typography variant='h6' fontWeight='bold'>My Account</Typography>
                </Stack>
            </Stack>
            
            <Stack direction='row' spacing={1}>
                <IconButton aria-label="shopping Cart" component="span" 
                    onClick={() => navigate('/cart')}
                >
                    <ShoppingCartOutlinedIcon sx={{transform: `scale(1.7)`}} fontSize='large' style={{ color: 'black' }} />
                </IconButton>
                <Stack color='black'>
                    <Typography>Shopping Cart</Typography>
                    <Typography variant='h6' fontWeight='bold'>$0.00</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}





function ResponsiveDrawer(props) {
    

    const classes = styles();
    const { window, children,
        cart,
        // getCurrentUser,
        currentUser, loading } = props;
    let uid = localStorage.getItem('uid');
    const [uidState, setUid] = React.useState(localStorage.getItem('uid'));
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { pathname } = useLocation();
    const [catId, setCatId] = React.useState(0);


    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    function logout (){
        localStorage.removeItem('token')
        localStorage.removeItem('uid')
        localStorage.clear();
        setUid(null);
        navigate('/')
    }

    function SectionTwo(){
        // const navigate = useNavigate();
        return(
            <Stack spacing={5} py={2} width='100%' alignItems='center' direction='row' justifyContent='center' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button onClick={() => navigate('/')}>
                    <Typography color='black' variant='h6'>Home</Typography> 
                </Button>
                <Button onClick={() => navigate('/shop')}>
                    <Typography color='black' variant='h6'>Shop</Typography> 
                </Button>
                <Button onClick={() => navigate('/privacy-policy')}>
                    <Typography color='black' variant='h6'>Privacy Policy</Typography> 
                </Button>
                <Button onClick={() => navigate('/terms-and-conditions')}>
                    <Typography color='black' variant='h6'>Terms and Conditions</Typography> 
                </Button>
                <Button onClick={() => navigate('/contact')}>
                    <Typography color='black' variant='h6'>Contact</Typography> 
                </Button>
                <Button onClick={() => navigate('/add-product')}>
                    <Typography color='black' variant='h6'>Add Product</Typography> 
                </Button>
                <Button onClick={() => logout()}>
                    <Typography color='black' variant='h6'>Logout</Typography> 
                </Button>
            </Stack>
        )
    }

    React.useEffect(() => {
        // getCategories();
        if (uid) {
            // getCurrentUser(uid);
        }
    }, [])

    let categories = ['ALL', 'Batteries/Charges', 'Brakes', 'Engine', 'Fuel', 'Head/Porting Services']



    const drawer = (
        <div style={{ height: 'inherit', position: 'relative', display: { xs: 'flex', sm:'flex', md: 'none', lg:'none' }, flexDirection: 'column' }} >
            <Toolbar />
            <Divider />
            <Stack >
                <Button onClick={() => navigate('/')}>
                    <Typography color='black' variant='h6'>Home</Typography> 
                </Button>
                <Button onClick={() => navigate('/shop')}>
                    <Typography color='black' variant='h6'>Shop</Typography> 
                </Button>
                <Button onClick={() => navigate('/privacy-policy')}>
                    <Typography color='black' variant='h6'>Privacy Policy</Typography> 
                </Button>
                <Button onClick={() => navigate('/terms-and-conditions')}>
                    <Typography color='black' variant='h6'>Terms and Conditions</Typography> 
                </Button>
                <Button onClick={() => navigate('/contact')}>
                    <Typography color='black' variant='h6'>Contact</Typography> 
                </Button>
                <Button onClick={() => navigate('/add-product')}>
                    <Typography color='black' variant='h6'>Add Product</Typography> 
                </Button>
                <Button onClick={() => logout()}>
                    <Typography color='black' variant='h6'>Logout</Typography> 
                </Button>
            </Stack>
            
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#F7F7F7' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#F7F7F7' }}>
                <Toolbar style={{ display: 'flex'}} alignItems='center'>
                    {!props?.hideDrawer && 
                    <Stack sx={{ display: { md: 'none' }}} direction='row' justifyContent="space-between">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, color: '#FE0000' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img style={{edge:'end', objectFit:'cover', height:'40px', margin: '5px', cursor: 'pointer' }} src={logo} />
                        
                    </Stack>
                    }

                    <Stack width='100%' spacing={2}>
                        <SectionOne uidState={uidState} currentUser={currentUser}/>
                        <SectionTwo uidState={uidState} currentUser={currentUser}/>
                    </Stack>
                    

                </Toolbar>
            </AppBar>
            {!props?.hideDrawer && <Box
                component="nav"
                sx={{ flexGrow: 1, width: '100%' }} 
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#F7F7F7' },
                    }}
                >
                    {drawer}
                </Drawer>
                
            </Box>}
            
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {/* <Toolbar /> */}
                {children}
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

// export default ResponsiveDrawer;
const mapStateToProps = (store) => ({
    categories: store.user.categories,
    cart: store.user.cart,
    currentUser: store.user.currentUser,
    loading: store.user.loading
});


const mapDispatchToProps = (dispatch) => ({
    // getCurrentUser: (id) => dispatch(getCurrentUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);