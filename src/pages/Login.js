import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Button } from '@mui/material';
import blog from "../assets/blogpost.jpeg";

export default function FormPropsTextFields() {
  return (
    <div className="newBlog">
      <div className="avatar">
        <Avatar sx={{ height: 200, width: 200 }} alt='blog' src={blog} />
        <h2>Login</h2>
      </div>
      <div>
        <Box
          component='form'
          sx={{
            "& > :not(style)": { m: 2, width: "50ch", display: 'flex' },
          }}
          noValidate
          autoComplete='off'>
          <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
            required
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
        />
            <Button variant="contained" size="large">SUBMIT</Button>
        </Box>
      </div>
    </div>
  );
}
