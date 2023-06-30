/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:3001";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchCities() {
      try {
        const response = await fetch(`${BASE_URL}/cities`);
        const json = await response.json();
        setCities(json);
      } catch (error) {
        alert("An error occurred while fetching cities");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={cities}>{children}</CitiesContext.Provider>
  );
}

export { CitiesProvider, CitiesContext };
