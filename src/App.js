import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import "./assets/scss/global.scss";

import { useState } from "react";
import DetailPage from "./pages/DetailPage";
const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existItem = cartItems.find((item) => item.id === product.id);

    if (existItem){
      const items = cartItems.map((cart)=>
        cart.id === [product].id ? { ...cart,quantity: cart.quantity +1}
      : cart
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

  const handleUpdateQuantity = (id, type) => {
    const update = cartItems.map((item)=> {
      if(item.id === id) {
        if(type === "plus"){
          return {...item, quantity: item.quantity +1};
        } else if ( type === "minus" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1};
        }
      }
      return item;
    });
    setCartItems(update);
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
    // <BrowserRouter>
    <HashRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/" element={<MainPage onAdd={handleAddToCart}/>} />
        <Route path="/cart" element={<CartPage
          cartItems={cartItems}
          onUpdate={handleUpdateQuantity}
          onDelete={handleCartDelete} />} />
        <Route path="/category" element={<CategoryPage  onAdd={handleAddToCart}/>} />
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
};

export default App;
