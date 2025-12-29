import { useState } from "react";
import "./Footer.scss";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import logoImg from "../../assets/images/logo/logo.jpg";
import logoHoverImg from "../../assets/images/logo/logo_hover.jpg";

function Footer() {
  const [isDescOpen, setIsDescOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="section brand">
          <div className="logo-img">
            <span className="logo-label"><img
              src={isHover ? logoHoverImg : logoImg}
              alt="PACEFY 로고"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            /></span>
            <div className="footer-logo">PACEY</div>
          </div>
          <p className="tap" onClick={() => setIsDescOpen(prev => !prev)}>PACEY{""}<span className="tap-arrow">{isDescOpen ? "∧" : "∨"}</span></p>

          <p className={`footer-txt ${isDescOpen ? "is-open" : ""}`}>
            PEACY는 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
            <br />
            입점 판매자의의 상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.
            <br />
            단, PEACY는 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.
          </p>

          <div className="link">
            <a href="#!" className="de-link">
              이용약관
            </a>
            <a href="#!" className="de-link">
              개인정보처리방침
            </a>
            <a href="#!" className="de-link">
              입점/제휴
            </a>
          </div>
        </div>

        <div className="section center">
          <div className="center-title">CUSTOMER<br />CENTER</div>
          <div className="phone">1255 - 1255</div>
          <p className="time">
            평일 10:00 - 17:00 (점심 12:00 - 13:00)
          </p>
          <div className="link small">
            <div className="right-arr">
              <a href="#!" className="de-link">
                자주 묻는 질문
              </a>
              <a href="#!" className="de-link">
                1:1 문의
              </a>
            </div>
          </div>
        </div>

        <div className="section right">
          <div className="story-txt">PACEY <br />STORY</div>
          <div className="right-arr">
            <a href="#!" className="de-link">
              PACEY 스토리
            </a>
          </div>

          <div className="sm-block sns">
            <div className="footer-title">SNS</div>

            <div className="sns-icons ">
              <a href="#!" aria-label="instagram" className="sns-icon">
                <FaInstagram />
              </a>
              <a href="#!" aria-label="youtube" className="sns-icon">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;