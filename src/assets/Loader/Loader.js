import React from 'react';
import useStyles from './styles';
import loader from '../logo512.png';

export default function Loader() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar} />

      <div className={classes.loader}>
        <img src={loader} className={classes.rotate} width="50" height="50" />
      </div>
    </>
  );
}
