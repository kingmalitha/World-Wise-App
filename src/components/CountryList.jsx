/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";

const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((accumulator, currentvalue) => {
    if (
      !accumulator.map((item) => item.country).includes(currentvalue.country)
    ) {
      return [...accumulator, currentvalue];
    }
    return accumulator;
  }, []);

  if (!countries.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem key={index} city={country} />
      ))}
    </ul>
  );
};

export default CountryList;
