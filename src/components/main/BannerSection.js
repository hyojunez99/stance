import "./BannerSection.scss";
import { useEffect, useState } from "react";

//이미지 import
import banner01 from "../../assets/images/banner/banner-1.jpg";
import banner02 from "../../assets/images/banner/banner-2.jpg";
import banner03 from "../../assets/images/banner/banner-3.jpg";
import banner04 from "../../assets/images/banner/banner-4.jpg";
import banner05 from "../../assets/images/banner/banner-5.jpg";


const banners = [
  { img: banner01, x: "65% 85%"},
  { img: banner02, x: "60%"},
  { img: banner03, x: "85%"},
  { img: banner04, x: "50%"},
  { img: banner05, x: "35%"},
];
const SLIDE_DURATION = 8000;
const TRANSITION_TIME = 600;

const BannerSection = () => {
  const [ current,  setCurrent ] = useState(0); //현재 슬라이드
  const [ direction, setDirection ] = useState("unll"); //이동방향
  const [ isAnimating, setIsAnimating ] = useState(false); //중복 클릭 방지

  const total = banners.length;
  const nextIndex = (current + 1) % total;
  const prevIndex = (current - 1 + total) % total;

  //자동슬라이드
const changeSlide = (next, dir) =>{
  if (isAnimating) return;

  setDirection(dir);
  setIsAnimating(true);
  
  setTimeout(()=>{
    setCurrent(next);
    setDirection(null);
    setIsAnimating(false);
  }, TRANSITION_TIME);
};

  //버튼 핸들러
const handlenext = ()=>{
  changeSlide(nextIndex, "right");
};
const handlePrev = ()=>{
  changeSlide(prevIndex, "left");
};

// 자동 슬라이드
useEffect(()=>{  
  const interval = setInterval(()=>{
    setDirection("right");
    setIsAnimating(true);

    setTimeout(()=>{
      setCurrent((prev)=>(prev + 1 )% total);
      setIsAnimating(false);
    }, TRANSITION_TIME);
  },SLIDE_DURATION);
  return () => clearInterval(interval);
},[]);

//렌더
return(
  <section className={`banner ${direction ? `slide-${direction}`:""}`}>
          {/* 현재 이미지 */}
    <div
    className="banner-bg current"
    style={{
      backgroundImage: `url(${banners[0].img})`,      
      backgroundPosition: banners[current].x,
    }}
    />
    {/* 다음이미지 */}
      <div
        className="banner-bg next"
        style={{
          backgroundImage: `url(${
            direction === "right"
              ? banners[nextIndex].img
              : banners[prevIndex].img
          })`,
          backgroundPositionX:
            direction === "right"
              ? banners[nextIndex].x
              : banners[prevIndex].x,
        }}
      />

      {/* 오버레이 */}
      <div className="banner-overlay" />
      {/* 고정 텍스트 */}
      <div className="banner-content">
      <h1>
        <span className="title-top">PACEY</span>
        <span className="title-box">RUN YOUR</span>
        <span className="title-box">FACE</span>
      </h1>
      <p>러닝부터 일상까지, 하나로.</p>
      <span className="banner-link">더보기 →</span>
  </div>

      {/* 진행바 */}
      <div className="banner-progress-wrap">
      <div className="banner-progress">
        <span
        style={{
          width: `${((current + 1 )/ total) * 100}%`
        }}
        />
      </div>
      {/* 슬라이드 카운터 */}
      <div className="banner-count">
        <span className="current">{current + 1 }</span>
        <span className="slash"> / </span>
        <span className="total">{total}</span>
        <span className="plus">＋</span>
      </div>
    </div>

      {/* 화살표 */}
      <button className="arrow left" onClick={handlePrev}>＜</button>
      <button className="arrow right" onClick={handlenext}>＞</button>
  </section>
);
};

export default BannerSection