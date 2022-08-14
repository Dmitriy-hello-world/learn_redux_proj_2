import { Info } from './Info';
import { useDetails } from './use-details';

export default function CountryDetails({name = '', navigate}) {
  const { error, status, currentCountry } = useDetails(name);

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h4>Try again... Something went wrong!</h4>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  )
}
