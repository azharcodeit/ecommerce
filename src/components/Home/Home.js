import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import hero from "../../assets/flooring.jpg";
import useStyles from "./styles";

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <img src={hero} alt="hero" />
      </div>

      <div className={classes.overlay}>
        <Box
          height="100%"
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          color="#000"
          padding="100px"
        >
          <Typography className={classes.subtitle}>ПОДЗАГОЛОВОК</Typography>
          <Typography variant="h1" className={classes.title}>
            Заголовок
          </Typography>
          <Button
            color="primary"
            variant="contained"
            style={{ fontSize: 15, fontWeight: "10" }}
          >
            Смотреть каталог
          </Button>
        </Box>
      </div>
    </>
  );
}
