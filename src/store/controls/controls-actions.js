export const ADD_FILTER = 'ADD_FILTER';
export const ADD_REGION = 'ADD_REGION';

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  payload: filter
});

export const addRegion = (region) => ({
  type: ADD_REGION,
  payload: region
});
