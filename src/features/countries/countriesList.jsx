
import { useNavigate } from 'react-router-dom';
import { List } from '../../components/List';
import { Card } from '../../components/Card';
import { useLoadCountries } from './use-load-countries';

export default function CountriesList() {
  const navigate = useNavigate();
  const [countries, {status, error}] = useLoadCountries();

  return (
    <>
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
  )
}
