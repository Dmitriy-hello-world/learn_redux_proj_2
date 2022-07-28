import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCountriesInfo, selectAllCountries } from '../store/countries/countries-selectors';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useEffect } from 'react';
import { loadingCountries } from '../store/countries/countries-actions';

export const HomePage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { status, error, lng } = useSelector(selectCountriesInfo);
  const countries = useSelector(selectAllCountries);

  useEffect(() => {
    if (!lng) {
      dispatch(loadingCountries());
    }
  }, [lng]);

  return (
    <>
      <Controls />

      {error && <h2>try again, reload page please</h2>}
      {status === 'loading' && <h2>loading...</h2>}

      {
        status === 'received' &&
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      }
    </>
  );
};
