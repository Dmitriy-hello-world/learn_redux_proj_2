import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentCountryInfo } from '../store/details/details-selectors';
import { loadCurrentCountry, resetCurrentCountry } from '../store/details/details-actions';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useEffect } from 'react';


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { currentCountry, error, status } = useSelector(selectCurrentCountryInfo);

  useEffect(() => {
    dispatch(loadCurrentCountry(name));

    return () => dispatch(resetCurrentCountry())
  }, [name, dispatch]);

  return (
    <div>

      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h4>Try again... Something went wrong!</h4>}

      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
