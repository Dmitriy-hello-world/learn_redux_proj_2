import { combineReducers } from "redux";
import { countryReducer } from "./countries/countries-reducer";
import { themeReducer } from "./theme/theme-reducer";
import { controlsReducer } from './controls/controls-reducer';

export const rootReducer = combineReducers({
    countries: countryReducer,
    theme: themeReducer,
    controls: controlsReducer
});
