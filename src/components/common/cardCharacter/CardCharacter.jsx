import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import React from "react";


const CardCharacter = ({ character }) => {
    
  let { image, name, status } = character;

  return (
    <Card sx={{ width: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="green iguana"
          height="170"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCharacter;
