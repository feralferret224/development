
// import { getImageUrl } from './utils.js';
// import React from "react";
// // import { Button, Container } from '@mui/material';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Paper, Rating } from '@mui/material';

// export function StoreItem({ name, description, price, image, item, add }) {
//   return (

//     <Card>
//       <Card.Img variant="top" src={image} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>
//         {description}
//         </Card.Text>
//         <Card.Text>
//           <b>{price}</b>
//         </Card.Text>
//         <Button onClick={()=>{add(item)}}>Add to Cart</Button>
//       </Card.Body>
//     </Card>

//   );
// }



export function StoreItem({ name, description, price, image, item, add }) {
  return (
    <Card sx={{ minWidth: 150, maxWidth: 200, minHeight: 300, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          src={item.image}
          alt={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <br></br>
          <Rating name="half-rating-read" value={((13-item.popular)/2.5)} precision={0.1} readOnly />
          <Typography variant="body1" color="text.primary">
            {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{add(item)}}>
          Add to cart
        </Button>
      </CardActions>
      <Paper elevation={3} />
    </Card>
  );
}