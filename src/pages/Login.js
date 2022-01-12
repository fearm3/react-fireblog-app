/** @format */

import React, { useState, useContext } from "react";
import { continueWithGoogle, logIn } from './../helpers/firebase';
import { AuthContext } from "../contexts/AuthContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Avatar, Button } from "@mui/material";
import blog from "../assets/blogpost.jpeg";
// import { useHistory } from "react-router-dom";
// import { Redirect } from 'react-router'
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  // const history = useHistory();
   const navigate = useNavigate()

  const handleSubmit = () => {
    const user = {email, password}

    logIn(user.email, user.password)
    navigate('/')

  }

  const handleProviderRegister = () => {
    continueWithGoogle()
    navigate('/')
  }

  const { currentUser } = useContext(AuthContext);

  if (currentUser){
    // return <Redirect to:"/" />
  }

  
  return (
    <div className='newBlog'>
      <div className='avatar'>
        <Avatar sx={{ height: 200, width: 200 }} alt='blog' src={blog} />
        <h2>Login</h2>
      </div>
      <div>
        <Box
          component='form'
          sx={{
            "& > :not(style)": { m: 2, width: "50ch", display: "flex" },
          }}
          noValidate
          autoComplete='off'>
          <TextField
            required
            id='outlined-password-input'
            label='Password'
            type='password'
            value={password}
            autoComplete='current-password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            required
            id='outlined-email-input'
            label='Email'
            type='email'
            value={email}
            autoComplete='current-email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleSubmit} type='submit' variant='contained' size='large'>
            Login
          </Button>
          <Button size='large' onClick={handleProviderRegister}>
          Sign in with <img className="google-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="google" />
        </Button>
        </Box>
       
      </div>
    </div>
  );
};
export default Login;
