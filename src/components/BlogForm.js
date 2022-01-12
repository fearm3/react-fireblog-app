/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Avatar, Button } from "@mui/material";
import blog from "../assets/blogpost.jpeg";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import { getDatabase, set, ref } from "firebase/database";
import { uid } from "uid";

const BlogForm=({setContent,setImageUrl,setTitle,handleClick,title, imageUrl,content})=>{


  return (
    
    <div className="newBlog">
      <div className="avatar">
        <Avatar sx={{ height: 200, width: 200 }} alt='blog' src={blog} />
        <h2>New Blog</h2>
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
              id='outlined-basic'
              label='Title'
              variant='outlined'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
            required
              id='outlined-basic'
              label='Image URL'
              variant='outlined'
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <TextField
                required
              id='outlined-multiline-static'
              label='Multiline'
              multiline
              rows={12}
              label='Content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button onClick={handleClick} variant="contained" size="large">SUBMIT</Button>
        </Box>
      </div>
    </div>
  );
}
export default BlogForm
