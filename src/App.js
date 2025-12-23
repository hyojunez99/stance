import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import MainPage from "./pages/MainPage"
import CartPage from "./pages/CartPage"
import CategoryPage from "./pages/CategoryPage"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}/>
        <Route path="/" element={<MainPage />}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App