export const ADD_FILTER = '@@controls/ADD_FILTER';
export const ADD_REGION = '@@controls/ADD_REGION';
export const RESET_CONTROLS = '@@controls/RESET_CONTROLS';

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  payload: filter
});

export const resetControls = () => ({
  type: RESET_CONTROLS
})

export const addRegion = (region) => ({
  type: ADD_REGION,
  payload: region
});
