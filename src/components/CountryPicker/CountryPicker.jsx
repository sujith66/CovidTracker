import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";
import NativeSelect from "@material-ui/core/NativeSelect";
import { connect } from "react-redux";
import styles from "./CountryList.module.css";
import { getCountryListData, getCovidData } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function CountryList(
  { countryList, countryData, fetchCountryData, handleChange },
) {
  const classes = useStyles();
  useEffect(() => {
    fetchCountryData();
  }, []);

  return (<FormControl className={classes.formControl}>
    <NativeSelect defaultValue="" onChange={(e) => handleChange(e)}>
      <option value="global">Global</option>
      {countryList?.countryData.map((item, i) => (
        <option key={i} value={item}>{item}</option>
      ))}
    </NativeSelect>
  </FormControl>);
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountryData: () => dispatch(getCountryListData()),
  };
};

const mapStateToProps = (state) => {
  return {
    countryList: state.countryData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
