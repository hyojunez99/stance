import React from 'react';
import './Footer.scss';
import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
      
        <section className="section-info">
          <div className="logo-img">로고이미지</div>
          <div className="brand">PACEY</div>
          <div className="company-select">
            PACEY <IoIosArrowDown className="arrow-icon" />
          </div>
          <p className="desc-txt">
            PACEY은 통신판매중개자이며, 통신판매의 당사자가 아닙니다.<br className="pc-only" />
            입점 판매자의의 상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.<br className="pc-only" />
            단, PACEY이 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.
          </p>
          <nav className="nav-links policy-links">
            <a href="#!">이용약관</a>
            <a href="#!">개인정보처리방침</a>
            <a href="#!">입점/제휴</a>
          </nav>
        </section>

        {/* 2. 중앙: 고객 센터 */}
        <section className="section-contact">
          <div className="section-header">
            <span className="title">CUSTOMER<br/>CENTER</span>
            <nav className="q-links">
              <a href="#!">자주묻는 질문</a>
              <a href="#!">1:1 문의</a>
            </nav>
          </div>
          <div className="phone">1255 - 1255</div>
          <p className="desc-txt">
            평일 10:00 - 17:00 (점심 12:00-13:00)
          </p>
          <nav className="nav-links pc-only-links">
            <a href="#!">자주묻는 질문</a>
            <a href="#!">1:1 문의</a>
          </nav>
        </section>

        {/* 3. 오른쪽: 스토리 및 SNS */}
        <section className="section-social">
          <div className="story-area">
            <div className="section-header">
              <span className="title">PACEY<br className="pc-only" />STORY</span>
              <a href="#!" className="story-link">PACEY 스토리</a>
            </div>
          </div>
          
          <div className="sns-area">
            <span className="title sns-title">SNS</span>
            <div className="sns-icons">
               <a href="#!" className="sns-icon"><FaInstagram /></a>
               <a href="#!" className="sns-icon"><FaYoutube /></a>
            </div>
          </div>
        </section>

      </div>
    </footer>
  );
};

export default Footer;