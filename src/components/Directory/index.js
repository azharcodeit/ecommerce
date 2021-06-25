import React from 'react';
import {
  Typography,
  Button,
  CssBaseline,
  Grid,
  Container,
} from '@material-ui/core';
import hero from '../../assets/flooring.jpg';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const styles = {
  bg: {
    backgroundImage: `url(${hero})`,
  },
};

const Directory = props => {
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
                align="left"
                color="textPrimary"
                padding="5%"
                className={classes.subTitle}
                gutterBottom
              >
                {'  двери/паркет/ламинат/линолеум/санфоянс/краски '}
              </Typography>
              <Typography
                component="h1"
                align="left"
                color="textPrimary"
                className={classes.mainTitle}
                gutterBottom
              >
                Всё для ремонта и стройки
                <br /> по доступным ценам
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/products"
                      variant="contained"
                      color="primary"
                      className={classes.linkText}
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
    </>
  );
};

export default Directory;
