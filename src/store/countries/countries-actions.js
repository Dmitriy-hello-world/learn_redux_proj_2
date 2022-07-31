export const ADD_COUNTRIES = '@@countries/ADD_COUNTRIES';
export const START_LOADING = '@@countries/START_LOADING';
export const ADD_ERROR = '@@countries/ADD_ERROR';

const addCountries = (countries) => ({
  type: ADD_COUNTRIES,
  payload: countries
})

const startLoading = () => ({
  type: START_LOADING
})

const addError = (error) => ({
  type: ADD_ERROR,
  payload: error
})

export const loadingCountries = () => (dispatch, getState, { client, api }) => {
  dispatch(startLoading());
  
  client.get(api.ALL_COUNTRIES)
    .then(({ data }) => {
      dispatch(addCountries(data.filter(country => country.name !== 'Russian Federation')))
    })
    .catch((error) => dispatch(addError(error)))
};
