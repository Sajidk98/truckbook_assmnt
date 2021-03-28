import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    textAlign: "center",
  },
  select: {
    paddingRight: 0,
    "& select": {
      padding: 14,
      width: 250,
    },
  },
  container: {
   padding:32
  },
  media: {
    height: 700,
  },
}));
