import { GET_COVID_DATA } from "../actionsType";

const initialState = {
  covidData: {},
};
const CovidDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_DATA: {
      return { ...state, covidData: action.payload };
    }
    default:
      return state;
  }
};

export default CovidDateReducer;
