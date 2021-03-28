import { FormControl, Grid, InputLabel, Select } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type from "../../actions/constant";
import SearchInput from "../../components/SearchInput";
import ListItem from "./listItem";
import styles from "./style";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [currentGenre, setGenre] = useState();
  const [query, setQuery] = useState();
  const [page, setPage] = useState(1);

  const classes = styles();

  const { repos, genre } = useSelector((state) => state);

  useEffect(() => {
    dispatch({
      type: type.GET_MOVIES_REQUEST,
      payload: { query: query, page: page },
    });
  }, [currentGenre, query, page]);

  const handleChange = (e) => {
    setGenre(e.target.value);
  };

  const handleSearch = (e) => {
    setTimeout(() => {
      setQuery(e.target.value);
    }, 2000);
  };

  const handlePagination = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SearchInput
            placeHolder="search movie"
            onChange={handleSearch}
            disabled={repos.isLoading}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Genre</InputLabel>
            <Select
              className={classes.select}
              fullWidth
              native
              value={currentGenre}
              onChange={handleChange}
              label="Genre"
              inputProps={{
                name: "genre",
                id: "outlined-age-native-simple",
              }}
            >
              <option aria-label="Select" value="" />
              {genre.data &&
                genre.data.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {repos.isLoading && <h5>Loading</h5>}
        {repos &&
          !repos.isLoading &&
          repos.data.map((item) => <ListItem key={item.id} data={item} />)}
      </Grid>
      {repos.data.length !== 0 && (
        <div className={classes.pagination}>
          <Pagination
            size="large"
            count={repos.pages}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handlePagination}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
