import React from "react";
import {
  Typography,
  Button,
  CssBaseline,
  Grid,
  Container,
} from "@material-ui/core";
// import hero from "../../assets/flooring.jpg";
import useStyles from "./styles";

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              SUBTITLE
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Album layout
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
