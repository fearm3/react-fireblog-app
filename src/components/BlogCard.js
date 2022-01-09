

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import blog2 from "../assets/blogpost.jpg";

export default function MultiActionAreaCard() {
  return (
    <div className='App'>
      <h1>DASHBOARD</h1>
      <Card sx={{ maxWidth: 445 }} className="card">
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={blog2}
            alt='green iguana'
          />
          <CardContent sx={{background:'#EFEEFE'}}> 
            <Typography gutterBottom variant='h5' component='div'>
              Python
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography gutterBottom variant='h6' component='div'>
          <AccountCircleIcon sx={{ mr: '10px', mb:'-5px', ml:'-160px' }} />
          <span>mltm0204@gmail.com</span>
        </Typography>
        <CardActions>
          <Button>
            <FavoriteBorderIcon />
            <span>2</span>
          </Button>
          <Button>
            <ChatBubbleOutlineIcon />
            <span>0</span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
