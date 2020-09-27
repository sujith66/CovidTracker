import { GET_COUNTRY_DATA } from "../actionsType";

const initialState = {
  countryData: [],
};

const CovidCountryDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_DATA: {
      return { ...state, countryData: action.payload };
    }
    default:
      return state;
  }
};

export default CovidCountryDataReducer;
