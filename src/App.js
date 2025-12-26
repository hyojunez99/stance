import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import { useState } from "react";
import "./assets/scss/global.scss";

const App = () => {
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
    setCartItems(items);
    } else{
      const items = [...cartItems, {...product, quantity:1}];
      setCartItems(items);
    }
  };
  //  const handleCartDelete = (id) => {
  //   const items = cartItems.filter((item) => item.id !== id);
  //   setCartItems(items);
  // };

  const onDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const handleCartDelete = (id)=>{
  const items = cartItems.filter((item)=>{
    return item.id !== id;
  });
  setCartItems(items);
}



  // const onUpdateQty = (id, delta) => {
  //   setCartItems((prev) =>
  //     prev.map((item) =>
  //       item.id === id
  //         ? { ...item, quantity: Math.max(1, item.quantity + delta) }
  //         : item
  //     )
  //   );
  // };

  // // ✅ 삭제
  // const onDelete = (id) => {
  //   setCartItems((prev) => prev.filter((item) => item.id !== id));
  // };

  return (
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
  );
};

export default App;
