import { combineReducers } from "redux";
import repos from "./repos";
import genre from "./genre";
import details from './details'

export default combineReducers({
  repos,
  genre,
  details
});
