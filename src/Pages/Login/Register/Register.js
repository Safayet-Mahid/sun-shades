import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {

    const [loginData, setLoginData] = useState({})
    const history = useHistory();

    const handleLoginData = e => {
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(loginData)
    }

    const { registerNewUser, isLoading, user, authError } = useAuth();


    const handleLoginSubmit = e => {
        registerNewUser(loginData.email, loginData.password, loginData.name, history)

        if (loginData.password !== loginData.password2) {
            alert("Your password did not match")
            return
        }

        e.preventDefault()
    }
    return (

        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" sx={{ mt: 8 }}>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            variant="standard"
                            onBlur={handleLoginData}
                            sx={{ m: 1, width: "75%" }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            variant="standard"
                            onBlur={handleLoginData}
                            sx={{ m: 1, width: "75%" }}
                        />
                        <TextField
                            id="standard"
                            label="Your Password"
                            name="password"
                            variant="standard"
                            type="password"
                            onBlur={handleLoginData}

                            sx={{ m: 1, width: "75%" }}
                        />
                        <TextField
                            id="standard"
                            label="Retype your password"
                            name="password2"
                            variant="standard"
                            type="password"
                            onBlur={handleLoginData}

                            sx={{ m: 1, width: "75%" }}
                        />
                        <Button sx={{ m: 1, width: "75%" }} variant="contained" type="submit">Register</Button>
                        <NavLink style={{ textDecoration: "none" }} to="/login"><Button variant="text">Already Registered? please login</Button></NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>
                    }



                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%", height: "100%" }} src="https://www.serengeti-eyewear.com/dw/image/v2/BFJW_PRD/on/demandware.static/-/Library-Sites-SerengetiEUSharedLibrary/default/dw4a8d8e1d/SERENGETI-B2C-HOMEPAGE-HAMEL-mobile.jpg" alt='' />

                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;