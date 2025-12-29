import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import "./assets/scss/global.scss";



const App = () => {

  return (
    <HashRouter>
      <Routes>-
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/cart"
            element={
              <CartPage
                
              />
            }
          />
          <Route
            path="/category"
            element={<CategoryPage />}
          />
          <Route
            path="/detail/:id"
            element={<DetailPage  />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;


