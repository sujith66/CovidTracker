import { combineReducers } from "redux";
import CovidDateReducer from "./covidDataReducer";
import CovidDailyDataReducer from "./covidDailyDataReducer";
import CovidCountryDataReducer from "./countryDataReducer";

export default combineReducers({
  covidData: CovidDateReducer,
  dailyData: CovidDailyDataReducer,
  countryData: CovidCountryDataReducer,
});
