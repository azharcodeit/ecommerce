import React from "react";
import {
  Typography,
  Button,
  CssBaseline,
  Grid,
  Container,
  CardMedia,
  Card,
  CardContent,
} from "@material-ui/core";
import hero from "../../assets/flooring.jpg";
import floorImg from "../../assets/floor.jpg";
import useStyles1 from "./styles";
import { Link } from "react-router-dom";

const styles = {
  bg: {
    backgroundImage: `url(${hero})`,
  },
};

const cards = [1, 2, 3];

export default function Home() {
  const classes = useStyles1();

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
                      style={{ fontSize: "1rem" }}
                    >
                      Смотреть каталог
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={floorImg}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
