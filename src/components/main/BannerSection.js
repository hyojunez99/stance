import "./BannerSection.scss";

//이미지 import
import banner01 from "../../assets/images/bannerimg/banner01.png";
import banner02 from "../../assets/images/bannerimg/banner01.png";
import banner03 from "../../assets/images/bannerimg/banner01.png";
import banner04 from "../../assets/images/bannerimg/banner01.png";
import banner05 from "../../assets/images/bannerimg/banner01.png";
import { useEffect, useState } from "react";

const images = [
  banner01,
  banner02,
  banner03,
  banner04,
  banner05,
];

const BannerSection = () => {
  const [ current,  setCurrent ] = useState(0);

  //자동슬라이드
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrent((prev) => (prev + 1) % images.length);
    },8000); //5초 동안 이동
    return () => clearInterval(interval);
  },[]);

  //이전 다음 버튼
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
  const nextSlide = ()=>{
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="banner">
      <div
        className="banner-track"
        style={{transform: `translateX(-${current * 100}%)`}}
      >
        {images.map((img, idx) => (
          <div className="banner-slide" key={idx}>
            <img src={img} alt={`banner-${idx}`} />
          </div>
        ))}
      </div>
      {/* 오버레이 */}
      <div className="banner-overlay" />

      {/* 고정 텍스트 */}
      <div className="banner-content">
        <h1>PEACEY <br/> RUN YOUR FACE</h1>
        <p>러닝의 변화, 지금 시작하세요.</p>
        <button>더보기 →</button>
      </div>

      {/* 화살표 */}
      <button className="arrow left" onClick={prevSlide}>＜</button>
      <button className="arrow right" onClick={nextSlide}>＞</button>
    </section>
  );
};

export default BannerSection