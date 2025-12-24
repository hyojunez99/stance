import { NavLink } from "react-router-dom"
import "../common/Gnb.scss"
const Gnb = () => {
  return (
    <nav className="gnb">
      <ul>
        <li>
          <NavLink to="/category/story">PACEY STORY</NavLink>
        </li>
        <li>
          <NavLink to="/category/men">MEN</NavLink>
        </li>
        <li>
          <NavLink to="/category/women">WOMEN</NavLink>
        </li>
        <li>
          <NavLink to="/category/event">EVENT</NavLink>
        </li>
        <li>
          <NavLink to="/category/news">RUNNING NEWS</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Gnb