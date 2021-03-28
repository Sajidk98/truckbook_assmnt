import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "68dd962ff3419ee9a4ad27a845cbdfed",
    language: "en-US",
  },
});

export default instance;
