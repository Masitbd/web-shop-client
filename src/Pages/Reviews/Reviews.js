import { styled } from "@mui/material/styles";
import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Rivew from "../Rivew/Rivew";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("./reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <Box
        style={{
          backgroundColor: " #fff2cc",
          color: "black",
          marginTop: "10px",
          marginBottom: "40px",
          marginLeft: "20px",
        }}
        sx={{ flexGrow: 1 }}
      >
        <Typography variant="h2">What our client says</Typography>

        <Grid container spacing={3}>
          {reviews.map((review) => (
            <Rivew key={review.id} review={review}></Rivew>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Reviews;
