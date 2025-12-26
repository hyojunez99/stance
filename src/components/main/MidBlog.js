import "./MidBlog.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Banner2Img1 from "../../assets/images/icon/iconimg.jpg";

const MidBlog = () => {
  return (
    <section id="event">
      <div className="event-bg">
        <div className="event-box">
          <div className="event-txt">
            <h2>
              PEACY
              <br />
              EVENT
            </h2>
            <p>응모 이벤트 바로가기</p>
          </div>
          <img src={Banner2Img1} alt="배너2이미지1" />
          <div className="btn">
            <div className="prev">
              <IoIosArrowBack />
            </div>
            <div className="next">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <p>1/5</p>
      </div>
    </section>
  );
};

export default MidBlog;
