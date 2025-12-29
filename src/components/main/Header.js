import { Link } from "react-router-dom";
import Gnb from "../common/Gnb";
import "./Header.scss";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        {/* 로고 */}
        <div className="logo">
          <Link to="/">
            <div className="logoimg"></div>
          </Link>
        </div>

        {/* 네비게이션 */}
        <Gnb />
        {/* 로그인 */}
        <div className="util">
          <Link to="/login">LOG IN</Link>
          <span>·</span>
          <Link to="/join">JOIN US</Link>
        </div>

        {/* 우측 아이콘 */}
        <div className="icon-group">
          <Link className="icon-btn" aria-label="검색">
            <FiSearch />
          </Link>
          <Link to="/cart" className="icon-btn" aria-label="장바구니">
            <FiShoppingCart />
          </Link>
          <Link className="icon-btn" aria-label="위시리스트">
            <FiHeart />
          </Link>
          <Link className="icon-btn" aria-label="마이페이지">
            <FiUser />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
