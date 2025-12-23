import { Link } from "react-router-dom"
import Gnb from "../common/Gnb"
import "./Header.scss"
import { FiSearch } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
const Header = () => {
  return (
    <header>
      <div className="header-inner">
        {/* 로고 */}
        <h1 className="logo">
          <Link to="/">PACEY</Link>
        </h1>
        {/* Gnb */}
        <Gnb />
        {/* util */}
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
          <Link to="/cart" className="icon-btn"aria-label="장바구니">
            <PiShoppingCartSimple />
          </Link>
          <Link className="icon-btn" aria-label="위시리스트">
            <CiHeart />
          </Link>
          <Link className="icon-btn" aria-label="마이페이지">
            <CiUser />
          </Link>
        </div>
      </div>
      </header>
  )
}

export default Header