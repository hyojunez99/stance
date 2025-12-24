import React, { useState, useEffect } from "react";
import "./BottomBlog.scss";
import listDate from "../../assets/data/Keyword.json";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const BottomBlog = () => {
  const itemsPerView = 4; // 한 화면에 4개 보여주기
  const moveCount = 2;    // 한 번에 2개씩 이동
  const totalItems = listDate.length;

  // 앞뒤로 충분히 복제
  const extendedList = [...listDate, ...listDate, ...listDate];
  const startIndex = totalItems; // 중앙에서 시작

  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [transition, setTransition] = useState(true);
  const liWidthPercent = 100 / itemsPerView; // li 폭

  const nextSlide = () => setCurrentIndex(prev => prev + moveCount);
  const prevSlide = () => setCurrentIndex(prev => prev - moveCount);

  // 무한루프 처리
  useEffect(() => {
    if (currentIndex >= totalItems * 2) {
      // 오른쪽 끝 → 중앙으로 점프
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(currentIndex - totalItems);
      }, 500);
    } else if (currentIndex < totalItems) {
      // 왼쪽 끝 → 중앙으로 점프
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(currentIndex + totalItems);
      }, 500);
    } else {
      setTransition(true);
    }
  }, [currentIndex, totalItems]);

  return (
    <section id="keyword">
      <h2>#HOT PEACY KEYWORD</h2>
      <div className="slider-wrapper">
        <ul
          className="slider"
          style={{
            display: "flex",
            gap: "0.5rem",
            transform: `translateX(-${currentIndex * liWidthPercent}%)`,
            transition: transition ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {extendedList.map((item, idx) => (
            <li key={idx}>
              <img
                src={require(`../../assets/images/keyword/${item.image}`)}
                alt={item.title}
              />
              <h2>#{item.title}</h2>
            </li>
          ))}
        </ul>
        <div className="btn">
          <div className="prev" onClick={prevSlide}>
            <IoIosArrowBack />
          </div>
          <div className="next" onClick={nextSlide}>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBlog;
