import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 400,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    margin: "20px",
  },
  content: {
    alignItems: "center",
    flex: "1 0 auto",
  },
  icon: {
    height: 38,
    width: 38,
  },
}));
