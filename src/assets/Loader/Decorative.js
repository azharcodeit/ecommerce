import React from 'react';
import useStyles from './styles';
import loader from '../logo512.png';

export default function Decorative() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar} />

      <div className={classes.loader}>
        <img
          src={loader}
          className={classes.rotateNoLoader}
          width="100"
          height="100"
        />
      </div>
    </>
  );
}
