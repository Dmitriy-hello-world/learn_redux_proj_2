export const selectCountriesInfo = (store) => ({
  status: store.countries.status,
  error: store.countries.error,
  lng: store.countries.list.length
})

export const selectAllCountries = (store) => store.countries.list;
