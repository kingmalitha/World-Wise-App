import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='product' element={<Product />} />
          <Route path='app' element={<AppLayout />}>
            <Route index element={<p>Listing countries</p>} />
            <Route path='cities' element={<p>List of cities</p>} />
            <Route path='countries' element={<p>List of countries</p>} />
            <Route path='form' element={<p>Form</p>} />
          </Route>
          <Route path='login' element={<Login />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;