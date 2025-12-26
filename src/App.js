import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import "./assets/scss/global.scss";

import { useState } from "react";
import DetailPage from "./pages/DetailPage";
const App = () => {
  //장바구니 아이템 임시입니다
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "테스트 상품",
      price: 80000,
      quantity: 1,
      image: "shoes01-1.jpg",
    },
    {
      id: 2,
      title: "테스트 상품2",
      price: 129000,
      quantity: 2,
      image: "shoes01-1.jpg",
    },
  ]);
  const onUpdateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // ✅ 삭제
  const onDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    // <BrowserRouter>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
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
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
};

export default App;
