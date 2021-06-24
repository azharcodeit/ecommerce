import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(8, 0, 6, 0),
    backgroundColor: "#e1e3e3",
    minHeight: "50vh",
  },
  hr: {
    width: "2%",
    border: "none",
    borderTop: "3px solid #505459",
    margin: theme.spacing(5, 0, 5, 0),
  },
}));
