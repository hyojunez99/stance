import { Outlet } from "react-router-dom"
import Header from "../components/main/Header"
const Layout = () => {
  return (
    <div id="app">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout