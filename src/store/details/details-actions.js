export const START_LOADING = '@@details/START_LOADING';
export const ADD_CURRENT_COUNTRY = '@@details/ADD_CURRENT_COUNTRY';
export const ADD_ERROR = '@@details/ADD_ERROR';
export const RESET = '@@detaild/RESET';

const startLoading = () => ({
    type: START_LOADING
});

const addCurentCountry = (country) => ({
    type: ADD_CURRENT_COUNTRY,
    payload: country
});

const addError = (err) => ({
    type: ADD_ERROR,
    payload: err
});

export const resetCurrentCoutry = () => ({
    type: RESET
})

export const loadCurentCountry = (country) => (dispatch, getState, { client, api }) => {
    dispatch(startLoading());

    client.get(api.searchByCountry(country))
        .then(({ data }) => dispatch(addCurentCountry(data[0])))
        .catch((error) => dispatch(addError(error)))
};
