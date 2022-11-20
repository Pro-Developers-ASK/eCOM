import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import Box from "@mui/material/Box";
import axios from "axios";

// const fetchProducts = async () => {
//   const data = await axios.get("https://dummyjson.com/products");
//   return data.data;
// };

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("https://dummyjson.com/products");
      await setProducts(data.data.products);
    }
    fetchData();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {products.map((product, idx) => {
          return (
            <Grid item xs={6} md={3} key={idx}>
              {/* <Item>xs=6 md=8</Item> */}
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
