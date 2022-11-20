import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import { products } from "../utilities/products";

export default function ProductCard(props) {
  // const product = products[0];
  return (
    <Card sx={{ margin: "10px", maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.product.thumbnail}
          alt="image of the product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          style={{ background: "#6C4AB6", color: "white" }}
          size="medium"
          fullWidth={true}
        >
          Add to Cart
        </Button>
      </CardActions>
      <CardActions>
        <Button
          style={{ background: "#6C4AB6", color: "white" }}
          size="medium"
          // color="white"
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
