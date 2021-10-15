import * as React from 'react';
import {
    Grid,
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button, Link,
} from "@mui/material";
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import { blueGrey } from "@mui/material/colors";

import BootstrapDialog, { BootstrapDialogTitle } from '../common/BootstrapDialog';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const Header = () => {
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openSignup, setOpenSignup] = React.useState(false);


    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);

    const handleOpenSignup = () => {
        setOpenLogin(false);
        setOpenSignup(true);
    }
    const handleCloseSignup = () => {
        setOpenSignup(false);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: blueGrey[900] }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link underline="none" href={"/"} rel={"noopener"}>Lookup</Link>
                    </Typography>
                    <Button color="inherit" onClick={handleOpenLogin}>Login</Button>
                </Toolbar>
            </AppBar>
            {openLogin && (
                <BootstrapDialog
                    onClose={handleCloseLogin}
                    aria-labelledby="customized-dialog-title"
                    open={openLogin}
                    maxWidth={"xs"}
                    fullWidth={true}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseLogin}>
                        Login
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Box>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email Address"
                                    type="email"
                                    variant="standard"
                                    sx={{ minWidth: '95%' }}
                                />
                            </Box>
                            <Box>
                                <FormControl sx={{ m: 1, minWidth: '95%' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={'password'}
                                        onChange={() => { }}
                                        fullWidth={true}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => { }}
                                                    onMouseDown={() => { }}
                                                >
                                                    {true ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>
                            <Box sx={{ mt: 2, textAlign: 'center' }}>
                                <Button variant="outlined" color="primary">Login</Button>
                            </Box>
                            <Box sx={{ textAlign: 'center', mt: 4}}>
                                <Typography>Already a customer?</Typography>
                                <Button sx={{ mt: 1 }}
                                        variant="outlined"
                                        color="secondary"
                                        onClick={handleOpenSignup}
                                >Sign Up</Button>
                            </Box>
                        </Box>
                    </DialogContent>
                </BootstrapDialog>
            )}

            {openSignup && (
                <BootstrapDialog
                    onClose={handleCloseSignup}
                    aria-labelledby="customized-dialog-title"
                    open={openSignup}
                    maxWidth={"xs"}
                    fullWidth={true}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseSignup}>
                        Sign Up
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Box>
                                <Grid container>
                                    <Grid item md={6}>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="First Name"
                                            type="text"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Last Name"
                                            type="text"
                                            variant="standard"
                                        />
                                    </Grid>

                                </Grid>
                            </Box>
                            <Box>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email Address"
                                    type="email"
                                    variant="standard"
                                    sx={{ minWidth: '95%' }}
                                />

                            </Box>
                            <Box>
                                <FormControl sx={{ m: 1, minWidth: '95%' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={'password'}
                                        onChange={() => { }}
                                        fullWidth={true}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => { }}
                                                    onMouseDown={() => { }}
                                                >
                                                    {true ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>

                            <Box>
                                <FormControl sx={{ m: 1, minWidth: '95%' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-re-password">Re-enter Password</InputLabel>
                                    <Input
                                        id="standard-adornment-re-password"
                                        type={'password'}
                                        onChange={() => { }}
                                        fullWidth={true}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => { }}
                                                    onMouseDown={() => { }}
                                                >
                                                    {true ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>

                            <Box sx={{ textAlign: 'center', m: 1}}>
                                <Button sx={{ mt: 1 }} variant="outlined" color="secondary">Sign Up</Button>
                            </Box>
                        </Box>
                    </DialogContent>
                </BootstrapDialog>
            )}

        </Box>
    );
}

export default Header;