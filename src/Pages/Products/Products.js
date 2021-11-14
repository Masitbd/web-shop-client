import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://radiant-plains-29625.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container
      style={{
        backgroundColor: " #fff2cc",
        color: "black",
        marginTop: "10px",
        marginBottom: "40px",
      }}
      sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={3}>
        {products.slice(0, 6).map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
