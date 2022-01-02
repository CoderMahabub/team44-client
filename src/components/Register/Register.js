import { Google } from '@mui/icons-material';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
      const [regdata, setRegdata] = useState({});

      const handleBlur = e => {
            e.preventDefault()
            const field = e.target.name;
            const value = e.target.value;
            const newValue = { ...regdata }
            newValue[field] = value;
            console.log(newValue);
            setRegdata(newValue)
      }
      return (
            <Container>
                  <Grid style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} sm={9} md={6} lg={6}>
                              <h1 style={{ color: 'green' }}>Register</h1>
                              <TextField onBlur={handleBlur} sx={{ width: '100%', marginTop: '10px' }} type='text' label="Name" name='name' placeholder='Enter your Name' variant="standard" />
                              <br />
                              <TextField onBlur={handleBlur} sx={{ width: '100%', marginTop: '10px' }} type='email' label="Email" name='email' placeholder='Enter your Email' variant="standard" />
                              <br />
                              <TextField onBlur={handleBlur} sx={{ width: '100%', marginTop: '10px' }} type='password' name='password' label="Password" placeholder='Type passoword' variant="standard" />
                              <br />
                              <TextField onBlur={handleBlur} sx={{ width: '100%', marginTop: '10px' }} type='password' name='password2' label="Password" placeholder='Confirm passoword' variant="standard" />

                              <Button style={{ width: '100%', marginTop: '25px', marginBottom: '15px' }} variant='contained'>Register</Button>
                              <br />
                              <Typography variant='caption'>Already have an account?<Link to='/login'>Login Here</Link></Typography>

                              <br />

                              <Button style={{ width: '50%', marginTop: '25px', marginBottom: '15px', backgroundColor: 'lightBlue', color: 'green' }} ><Google /> SingIn With Google</Button>

                        </Grid>
                  </Grid>
            </Container >
      );
};

export default Register;