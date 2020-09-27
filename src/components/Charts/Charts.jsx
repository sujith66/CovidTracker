import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDailyData } from "../../redux/actions";
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { Container } from "@material-ui/core";
import styles from "./Charts.module.css";
function Charts(
  {
    covidDailyData,
    fetchDailyData,
    countryData:{covidData:{confirmed, recovered, deaths}},
    country,
  },
) {
  useEffect(() => {
    fetchDailyData();
  }, []);

  const LineChart = covidDailyData?.dailyData?.length
    ? (
      <Line
        data={{
          labels: covidDailyData?.dailyData.map(({ date }) => date),
          datasets: [
            {
              data: covidDailyData?.dailyData.map(({ confirmed }) => confirmed),
              label: "infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: covidDailyData?.dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: true,
            },
          ],
        }}
      />
    )
    : null;

  const barChart = confirmed
    ? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgb(0, 0, 255, 0.5)",
                "rgba(58, 158, 89, 0.5)",
                "rgb(255, 0, 0, 0.5)",
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    )
    : null;

  return <Container>{country ? barChart : LineChart}</Container>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDailyData: () => dispatch(getDailyData()),
  };
};

const mapStateToProps = (state) => {
  return {
    covidDailyData: state.dailyData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Charts);
