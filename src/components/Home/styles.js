import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "100vh",
    overflow: "hidden",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6, 0),
    minHeight: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: theme.spacing(8, 0, 6, 0),
    minHeight: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  toolbar: theme.mixins.toolbar,
  title: {
    marginLeft: "0px",
    paddingLeft: "0px",
    paddingBottom: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
