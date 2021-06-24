import React from "react";
import useStyles from "./styles";
import loader from "../../assets/logo512.png";

export default function Decorative() {
  const classes = useStyles();

  return (
    <>
      <img
        src={loader}
        className={classes.rotateNoLoader}
        width="100"
        height="100"
      />
    </>
  );
}
