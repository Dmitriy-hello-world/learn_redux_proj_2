import { combineReducers } from "redux";
import { countryReducer } from "./countries/countries-reducer";
import { themeReducer } from "./theme/theme-reducer";
import { controlsReducer } from './controls/controls-reducer';
import { detailsReducer } from "./details/details-reducer";

export const rootReducer = combineReducers({
    countries: countryReducer,
    theme: themeReducer,
    controls: controlsReducer,
    details: detailsReducer
});
