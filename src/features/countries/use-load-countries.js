import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { 
    loadCountries,
    selectCountriesInfo,
    selectFilteredCountries
  } from './countriesSelector';
import { selectFilter, selectRegion } from '../controls/controlsSlice';

export const useLoadCountries = () => {
  const dispatch = useDispatch();

  const { status, error, lng } = useSelector(selectCountriesInfo);

  const region = useSelector(selectRegion);
  const filter = useSelector(selectFilter);
  const countries = useSelector((store) => selectFilteredCountries(store, { filter, region }));

  useEffect(() => {
    if (!lng) {
      dispatch(loadCountries());
    }
  }, [lng, dispatch]);

  return [ countries, {status, error, lng} ];
}
