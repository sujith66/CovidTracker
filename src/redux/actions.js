import axios from "axios";
import {
  GET_COVID_DATA,
  GET_COVID_DAILY_DATA,
  GET_COUNTRY_DATA,
} from "./actionsType";

const url = "https://covid19.mathdro.id/api";

export const getData = (response) => ({
  type: GET_COVID_DATA,
  payload: response,
});

export const getCovidDailyData = (response) => ({
  type: GET_COVID_DAILY_DATA,
  payload: response,
});

export const getCountryData = (response) => ({
  type: GET_COUNTRY_DATA,
  payload: response,
});
export function getCovidData(country) {
  let changeableURL = url;
  if (country) {
    changeableURL = `${url}/countries/${country}`;
  }
  return async function (dispatch) {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableURL);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    dispatch(getData(modifiedData));
  };
}

export function getDailyData() {
  return async function (dispatch) {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    dispatch(getCovidDailyData(modifiedData));
  };
}

export function getCountryListData() {
  return async function (dispatch) {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    const modifiedData = countries.map((country) => country.name);
    dispatch(getCountryData(modifiedData));
  };
}
