import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Rivew from "../Rivew/Rivew";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://radiant-plains-29625.herokuapp.com/reviews")
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
