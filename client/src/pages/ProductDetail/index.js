import { useParams } from "react-router-dom";
import React from "react";
import { useQuery } from "react-query";
import { Button, Box, Text } from "@chakra-ui/react";

import { fetchProduct } from "../../api";

function ProductDetail() {
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "An error has occured:" + error.message;
  }

  console.log(JSON.stringify(data));

  return <Box>Product Detail {product_id}</Box>;
}

export default ProductDetail;
