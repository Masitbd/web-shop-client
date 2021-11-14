import { Card, Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import React from "react";

const Product = (props) => {
  const { name, img, description } = props.product;
  return (
    <Grid item md={4} xs={12}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
        </CardContent>
        <Button style={{ marginBottom: "16px" }} variant="contained">
          More
        </Button>
      </Card>
    </Grid>
  );
};

export default Product;
