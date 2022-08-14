import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentCountryInfo } from './detailsSlice';
import { loadCurrentCountry, resetCurrentCountry } from './detailsSlice';

export const useDetails = (name) => {
  const dispatch = useDispatch();

  const details = useSelector(selectCurrentCountryInfo);
  
  useEffect(() => {
    dispatch(loadCurrentCountry(name));

    return () => dispatch(resetCurrentCountry())
  }, [name, dispatch]);

  return details;
}
