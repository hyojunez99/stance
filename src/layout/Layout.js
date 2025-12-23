import { Outlet } from "react-router-dom"
import Gnb from "../components/common/Gnb"
const Layout = () => {
  return (
    <div id="app">
      <Gnb />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout