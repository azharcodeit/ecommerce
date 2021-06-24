import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  rotate: {
    animation: "rotation 1s infinite",
    animationDuration: "1s",
  },
  rotateNoLoader: { animation: "rotation 8s infinite linear" },
  "@global": {
    "@keyframes rotation": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(359deg)",
      },
    },
  },
}));
