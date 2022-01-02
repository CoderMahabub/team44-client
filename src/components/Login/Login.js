import { Google } from '@mui/icons-material';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';


const Login = () => {
      const { googleSignIn, user, emailSignIn, logOut } = useAuth()
      const [info, setInfo] = useState({})

      const handleSignIn = (e) => {
            e.preventDefault()
            emailSignIn(info?.email, info?.password)
      }
      const handleBlur = e => {
            e.preventDefault()
            const field = e.target.name;
            const value = e.target.value;
            const newValue = { ...info }
            newValue[field] = value;
            setInfo(newValue)
      }
      return (
            <Container>
                  <Grid style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid xs={12} sm={9} md={6} lg={6}>
                              <form onSubmit={handleSignIn}>
                                    <h1>{user?.email}</h1>
                                    <h1 style={{ color: 'green' }}>Please Login Here</h1>
                                    <TextField onBlur={handleBlur} sx={{ width: '100%', marginTop: '10px' }} type='email' label="Email" name='email' placeholder='Enter your Email' variant="standard" />
                                    <br />
                                    <TextField onBlur={handleBlur} sx={{ width: '100%', marginTop: '10px' }} type='password' label="Password" name='password' placeholder='Enter your passoword' variant="standard" />
                                    <Button style={{ width: '100%', marginTop: '25px', marginBottom: '15px' }} variant='contained' type='submit'>Login</Button>
                                    <br />
                              </form>
                              <Typography variant='caption'>Do not have an account?<Link to='/register'>Register Here</Link></Typography>
                              <br />
                              <Button onClick={googleSignIn} style={{ width: '50%', marginTop: '25px', marginBottom: '15px', backgroundColor: 'lightBlue', color: 'green' }} ><Google /> LogIn With Google</Button>

                              <Button onClick={logOut}>LogOut</Button>
                        </Grid>
                  </Grid>
            </Container >
      );
};

export default Login;