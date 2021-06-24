import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";
import Loader from "../Loader/Loader";

const Products = ({ products, onAdd }) => {
  const classes = useStyles();

  if (!products.length) return <Loader />;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Loader />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Каталог
      </Typography>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAdd={onAdd} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
