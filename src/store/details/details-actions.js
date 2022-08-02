export const START_LOADING = '@@details/START_LOADING';
export const ADD_CURRENT_COUNTRY = '@@details/ADD_CURRENT_COUNTRY';
export const ADD_ERROR = '@@details/ADD_ERROR';
export const RESET = '@@details/RESET';
export const ADD_NEIGHBORS = '@@details/ADD_NEIGHBORS';

const startLoading = () => ({
    type: START_LOADING
});

const addCurrentCountry = (country) => ({
    type: ADD_CURRENT_COUNTRY,
    payload: country
});

const addError = (err) => ({
    type: ADD_ERROR,
    payload: err
});

const addNeighbors = (neighbors) => ({
    type: ADD_NEIGHBORS,
    payload: neighbors
})

export const resetCurrentCountry = () => ({
    type: RESET
})

export const loadCurrentCountry = (country) => (dispatch, getState, { client, api }) => {
    dispatch(startLoading());

    client.get(api.searchByCountry(country))
        .then(({ data }) => dispatch(addCurrentCountry(data[0])))
        .catch((error) => dispatch(addError(error)))
};

export const loadNeighbors = (countryCodes) => (dispatch, getState, { client, api }) => {
    client.get(api.filterByCode(countryCodes))
        .then(({ data }) => dispatch(addNeighbors(data.map(n => n.name))))
        .catch((e) => console.error(e.message))
}
