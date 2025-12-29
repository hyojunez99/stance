import { Outlet } from "react-router-dom";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
const Layout = () => {
  return (
    <div id="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
