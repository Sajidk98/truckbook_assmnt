import API from "./config";

export const fetchRepoByRepo = (value) => {
  const query = value.query && value.query !== "" ? value.query : null;
  const page = value.page || 1;

  return API.get(
    `${query ? "search" : ""}/movie/${!query ? "top_rated" : ""}?page=${page}${
      query ? "&query=" + query : ""
    }`
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const getGenre = () => {
  return API.get("/genre/movie/list")
    .then((response) => {
      return response.data.genres;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const getDetails = (value) => {
  return API.get(`/movie/${value.payload}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
