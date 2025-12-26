import { NavLink } from "react-router-dom";
import "../common/Gnb.scss";
const Gnb = () => {
  return (
    <nav className="gnb">
      <ul>
        <li>
          <NavLink to="/category/story">
            <span>PACEY STORY</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/men">
            <span>MEN</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/women">
            <span>WOMEN</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/event">
            <span>EVENT</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/news">
            <span>RUNNING NEWS</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
