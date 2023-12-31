import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ShopCards = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "black",
        color: "white",
        margin: "1.5rem 0.5rem",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt={props.alt}
        />
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
            </span>
            <span>
              <h3>₹{props.price}</h3>
            </span>
          </div>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ backgroundColor: "black", color: "white" }}
          >
            {props.typo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          justifyContent: "space-between",
          padding: "1rem 2rem",
        }}
      >
        <Button size="medium" variant="contained" color="success">
          Buy Now
        </Button>
        <Button
          size="medium"
          variant="outlined"
          color="error"
          onClick={props.onAddToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShopCards;
