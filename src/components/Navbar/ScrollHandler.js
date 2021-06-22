import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "#fff" : "transparent",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
    },
  });
};

export default ScrollHandler;
