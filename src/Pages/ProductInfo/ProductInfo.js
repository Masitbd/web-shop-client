import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    fetch(`https://radiant-plains-29625.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductInfo(data));
  }, []);
  return (
    <div>
      <h2>{productInfo.name}</h2>
      <p>{productInfo.description}</p>
      <Button style={{ marginBottom: "16px" }} variant="contained">
        Order Now
      </Button>
    </div>
  );
};

export default ProductInfo;
