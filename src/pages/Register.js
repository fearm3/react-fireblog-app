/** @format */

import { useState, useContext } from "react";
import { continueWithGoogle, createUser } from './../helpers/firebase';
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, TextField } from "@mui/material";
import blog from "../assets/blogpost.jpeg";


const Register = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);

  const handleSubmit = () => {
    const user = { email, password };
    createUser(user.email, user.password);
    navigate('/')
    console.log(user)
  };

  const handleProviderRegister = () => {
    continueWithGoogle();
    // navigate('/')
  }
  if (currentUser) {
    //  navigate('/')
  }

  return (
    <div className='newBlog'>
      <div className='avatar'>
        <Avatar sx={{ height: 200, width: 200 }} alt='blog' src={blog} />
        <h2>Register</h2>
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
            REGISTER
          </Button>
          <Button type="" onClick={handleProviderRegister} size='large'>
          Register with your <img className="google-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="google"/>account
         </Button>
          </Box>
        
      </div>
    </div>
  );
};
export default Register;
