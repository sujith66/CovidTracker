import { GET_COVID_DAILY_DATA } from "../actionsType";

const initialState = {
  dailyData: {},
};

const CovidDailyDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_DAILY_DATA: {
      return { ...state, dailyData: action.payload };
    }
    default:
      return state;
  }
};

export default CovidDailyDataReducer;
