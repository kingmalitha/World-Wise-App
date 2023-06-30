import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:3001";

function App() {
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
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='product' element={<Product />} />
          <Route path='app' element={<AppLayout />}>
            <Route index element={<Navigate replace to='cities' />} />
            <Route
              path='cities'
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path='cities/:id' element={<City />} />
            <Route
              path='countries'
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path='form' element={<Form />} />
          </Route>
          <Route path='login' element={<Login />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
