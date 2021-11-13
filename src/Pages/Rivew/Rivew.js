import { Card, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Rivew = (props) => {
  const { id, name, img, description, rating } = props.review;
  return (
    <Grid item md={3} xs={12}>
      <Item style={{ marginLeft: "40px" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Item>
    </Grid>
  );
};

export default Rivew;
