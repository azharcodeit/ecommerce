import React from "react";
import {
  Typography,
  Button,
  CssBaseline,
  Grid,
  Container,
} from "@material-ui/core";
import hero from "../../assets/flooring.jpg";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import About from "../About/About";

const styles = {
  bg: {
    backgroundImage: `url(${hero})`,
  },
};

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent} style={styles.bg}>
          <div className={classes.overlay}>
            <Container maxWidth="lg">
              <Typography
                component="h1"
                variant="subtitle1"
                align="left"
                color="textPrimary"
                padding="5%"
                gutterBottom
                style={{ fontFamily: "Proxima Nova" }}
              >
                {"  SUBTITLE "}
              </Typography>
              <Typography
                component="h1"
                variant="h2"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                Напольные покрытия
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/products"
                      variant="contained"
                      color="primary"
                      style={{
                        fontSize: "1rem",
                        fontFamily: "Proxima Nova",
                        fontWeight: "15",
                      }}
                    >
                      Смотреть каталог
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </div>
      </main>
      <About />
    </>
  );
}
