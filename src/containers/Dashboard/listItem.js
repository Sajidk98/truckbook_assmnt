import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getGenre } from "../../utils";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 360,
  },
  media: {
    height: 200,
  },
});

const ListItem = ({ data }) => {
  const classes = useStyles();
  const { genre } = useSelector((state) => state);
  const history = useHistory();

  return (
    <Grid item spacing={3} xs={12} md={3}>
      <Card
        onClick={() => {
          history.push("/details/" + data.id);
        }}
        className={classes.root}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={"https://image.tmdb.org/t/p/w300" + data.backdrop_path}
            title={data.title}
            alt={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {"Release data: " + data.release_date}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {"Rating: " + data.vote_average}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`Genre: ${
                genre.data.length !== 0 ? getGenre(data.genre_ids, genre) : ""
              }`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ListItem;
