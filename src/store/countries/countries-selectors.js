export const selectCountriesInfo = (store) => ({
  status: store.countries.status,
  error: store.countries.error,
  lng: store.countries.list.length
})

export const selectAllCountries = (store) => store.countries.list;

export const selectFilteredCountries = (store, { filter = '', region = ''}) => {
  return store.countries.list.filter(country => {
    return  country.name.toLowerCase().includes(filter.toLocaleLowerCase()) 
            && country.region.toLowerCase().includes(region.toLowerCase())
  });
}
