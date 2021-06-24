import React from "react";
import useStyles from "./styles";
import loader from "../../assets/logo512.png";

export default function Loader() {
  const classes = useStyles();

  return (
    <>
      <img src={loader} className={classes.rotate} width="100" height="100" />
    </>
  );
}
