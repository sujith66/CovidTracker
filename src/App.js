import React from "react";
import { Cards, Charts, CountryPicker, Header } from "./components";
import { connect } from "react-redux";
import { getCovidData } from "./redux/actions";
import coronaimage from "./images/image.png";
import styles from "./App.module.css";
function App({ countryData, fetchCovidData }) {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    const name = event.target.value;
    setCountry(name);
    fetchCovidData(name);
  };

  return (
    <div className={styles.container}>
      <img src={coronaimage} className={styles.covidImage} alt="Covid 19" />
      <Cards countryData={countryData} />
      <CountryPicker handleChange={handleChange} />
      <Charts countryData={countryData} country={country} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCovidData: (name) => dispatch(getCovidData(name)),
  };
};

const mapStateToProps = (state) => {
  return {
    countryData: state.covidData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
