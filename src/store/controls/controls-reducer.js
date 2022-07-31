import { ADD_FILTER, ADD_REGION, RESET_CONTROLS } from "./controls-actions";

const initialState = {
  filter: '',
  region: '',
}

export const controlsReducer = (store = initialState, {type, payload}) => {
  switch(type) {
    case ADD_FILTER: {
      return {
        ...store,
        filter: payload
      }
    }
    case ADD_REGION: {
      return {
        ...store,
        region: payload
      }
    }
    case RESET_CONTROLS: {
      return initialState
    }
    default: {
      return store;
    }
  }
};
