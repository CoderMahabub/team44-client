import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
      return (
            <Container>
                  <Grid style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid xs={12} sm={9} md={6} lg={6}>
                              <h1 style={{ color: 'green' }}>Register</h1>
                              <TextField sx={{ width: '100%', marginTop: '10px' }} type='text' label="Name" placeholder='Enter your Name' variant="standard" />
                              <br />
                              <TextField sx={{ width: '100%', marginTop: '10px' }} type='email' label="Email" placeholder='Enter your Email' variant="standard" />
                              <br />
                              <TextField sx={{ width: '100%', marginTop: '10px' }} type='password' label="Password" placeholder='Type passoword' variant="standard" />
                              <br />
                              <TextField sx={{ width: '100%', marginTop: '10px' }} type='password' label="Password" placeholder='Confirm passoword' variant="standard" />
                              <Button style={{ width: '100%', marginTop: '25px', marginBottom: '15px' }} variant='contained'>Login</Button>
                              <br />
                              <Typography variant='caption'>Already have an account?<Link to='/login'>Login Here</Link></Typography>
                        </Grid>
                  </Grid>
            </Container >
      );
};

export default Login;