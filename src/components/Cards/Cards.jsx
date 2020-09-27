import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCovidData } from "../../redux/actions";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CssBaseline,
} from "@material-ui/core";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import styles from "./Cards.module.css";
import cx from "classnames";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Cards({ covidData, fetchData }) {
  const classes = useStyles();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline>
        <Container>
          {Object.keys(covidData.covidData).length !== 0 && (
            <Grid
              container
              spacing={3}
              justify="center"
              className={styles.marginImage}
            >
              {[
                {
                  name: "Infected",
                  text: "Number of active cases for covid 19",
                  count: covidData?.covidData?.confirmed?.value,
                  className: cx(styles.card, styles.infected),
                },
                {
                  name: "Recovered",
                  text: "Number of recovered cases for covid 19",
                  count: covidData?.covidData?.recovered?.value,
                  className: cx(styles.card, styles.recovered),
                },
                {
                  name: "Deaths",
                  text: "Number of death cases for covid 19",
                  count: covidData?.covidData?.deaths?.value,
                  className: cx(styles.card, styles.death),
                },
              ].map((item) => (
                <Grid
                  item
                  component={Card}
                  xs={12}
                  md={3}
                  className={item.className}
                >
                  <CardContent m={30}>
                    <Typography color="textSecondary" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      <CountUp
                        start={0}
                        end={item.count}
                        duration={2}
                        separator=","
                      />
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {moment(covidData?.covidData?.lastUpdate).format(
                        "DD MMM YYYY",
                      )}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {item.text}
                    </Typography>
                  </CardContent>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
        ;
      </CssBaseline>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(getCovidData()),
  };
};

const mapStateToProps = (state) => {
  return {
    covidData: state.covidData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
