import { ADD_FILTER, ADD_REGION } from "./controls-actions";

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
    default: {
      return store;
    }
  }
};
