import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import type from "../../actions/constant";
import styles from "./style";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { details, genre } = useSelector((state) => state);
  const { id } = useParams();
  const classes = styles();

  // const details = repos.details && repos.details.find((item) => item.id == id);

  useEffect(() => {
    dispatch({ type: type.GET_DETAIL_REQUEST, payload: id });
  }, []);

  const getGenre = (list) => {
    const currentGenre = list.map((item) => item.name);
    return currentGenre.toString();
  };

  return (
    <Grid container justify="center" className={classes.container} spacing={3}>
      {details.data.poster_path && (
        <Grid item xs={12} md={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={
                  "https://image.tmdb.org/t/p/original" +
                  details.data.poster_path
                }
                title={details.data.title}
              />
            </CardActionArea>
          </Card>
        </Grid>
      )}
      <Grid item xs={12} md={6}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom gutterBottom variant="h5">
                {details.data.title}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {"Release details.data: " + details.data.release_date}
              </Typography>

              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {"Rating: " + details.data.vote_average}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Cast: N/A
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {`Genre: ${
                  details.data.genres !== 0 ? getGenre(details.data.genres) : ""
                }`}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {`Status: ${details.data.status}`}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {`Description: ${details.data.overview}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

// image, name, description, cast list, rating, genres
