import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import "./assets/scss/global.scss";

import { useState } from "react";

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  // ⭐ 장바구니 담기 (같은 상품 + 같은 사이즈면 수량만 증가)
  const addToCart = (product) => {
    setCartItems(prev => {
      const exist = prev.find(
        (item) => item.id === product.id && item.size === product.size
      );

      if (exist) {
        return prev.map(item =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const onUpdateQty = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const onDelete = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage onAdd={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onUpdateQty={onUpdateQty}
                onDelete={onDelete}
              />
            }
          />
          <Route
            path="/category"
            element={<CategoryPage onAdd={addToCart} />}
          />
          <Route
            path="/detail/:id"
            element={<DetailPage onAdd={addToCart} />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;


