import React from 'react';
import { Typography } from '@material-ui/core';
import Decoration from '../../assets/Loader/Decorative';
import useStyles from './styles';
import ScrollHandler from './ScrollHandler';

const About = props => {
  const classes = useStyles();
  return (
    <>
      <ScrollHandler>
        <div className={classes.root}>
          <Decoration />
          <hr className={classes.hr} />
          <Typography
            component="h1"
            variant="h4"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            О нас
          </Typography>
        </div>
      </ScrollHandler>
    </>
  );
};
export default About;
