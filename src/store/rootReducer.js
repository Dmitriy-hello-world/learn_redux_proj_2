import { combineReducers } from "redux";
import { countryReducer } from "./countries/countries-reducer";

export const rootReducer = combineReducers({
    countries: countryReducer
}); 