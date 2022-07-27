import { ADD_COUNTRIES, START_LOADING, ADD_ERROR } from "./countries-actions";

const initialState = {
    status: 'idle', // received | loading | rejected
    list: [],
    error: null, 
}

export const countryReducer = (store = initialState, { type, payload }) => {
    switch(type) {
        case START_LOADING: {
            return {
                ...store,
                status: 'loading',
                error: null
            }
        }
        case ADD_COUNTRIES: {
            return {
                ...store,
                list: payload,
                status: 'received'
            }
        }
        case ADD_ERROR: {
            return {
                ...store,
                status: 'rejected',
                error: payload
            }
        }
        default: {
            return store;
        }
    }
};
