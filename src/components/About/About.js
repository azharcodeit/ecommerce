import React from "react";
import { Typography } from "@material-ui/core";
import Decoration from "../Loader/Decorative";
import useStyles from "./styles";
import ScrollHandler from "./ScrollHandler";

export default function About() {
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
            Напольные покрытия
          </Typography>
        </div>
      </ScrollHandler>
    </>
  );
}
