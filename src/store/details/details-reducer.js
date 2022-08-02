import { ADD_CURRENT_COUNTRY, ADD_ERROR, START_LOADING, RESET, ADD_NEIGHBORS } from './details-actions'

const initialState = {
    currentCountry: null,
    status: 'idle', // received | loading | rejected
    error: null,
    neighbors: [],
}

export const detailsReducer = (store = initialState, {type, payload}) => {
    switch(type) {
        case START_LOADING: {
            return {
                ...store,
                status: 'loading',
                error: null
            }
        }
        case ADD_CURRENT_COUNTRY: {
            return {
                ...store,
                status: 'received',
                currentCountry: payload
            }
        }
        case ADD_NEIGHBORS: {
            return {
                ...store,
                neighbors: payload
            }
        }
        case ADD_ERROR: {
            return {
                ...store,
                status: 'rejected',
                error: payload
            }
        }
        case RESET: {
            return initialState
        }
        default: {
            return store
        }
    }
}
