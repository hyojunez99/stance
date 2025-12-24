import listDate from "../../assets/data/Item.json";
import "./ProductSection.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const ProductSection = () => {
  const bestItems = listDate.filter((item) => item.category === "best");
  const totalItems = bestItems.length;
  const visibleCount = 4; // 한 화면에 4개
  const [currentIndex, setCurrentIndex] = useState(0);

  // 할인율 계산 함수
  const calculateDiscount = (price1, price2) => {
     // 소수점 없이 할인율 계산
    return Math.floor(((price1 - price2) / price1) * 100);
  };

  // 다음 슬라이드
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % totalItems); // 2개씩 이동
  };

  // 이전 슬라이드
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 + totalItems) % totalItems);
  };

  // 인디케이터 클릭 시 해당 인덱스로 이동
  const handleIndicatorClick = (idx) => {
    setCurrentIndex(idx * 2); // 2개 단위로 이동
  };

  // 슬라이드 반복용 배열 (복제)
  const slides = [...bestItems, ...bestItems.slice(0, visibleCount)];

  return (
    <section id="best-seller">
      <h2>BEST SELLER</h2>
      <div className="slider-wrap">
        <ul
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {slides.map((item, idx) => {
            // 할인율 계산
            const discountPercentage = calculateDiscount(
              item.price1,
              item.price2
            ); 
            return (
              <li key={idx}>
                <div className="img-wrap">
                  <img
                    src={require(`../../assets/images/Shoes/${item.image}`)}
                    alt={item.sub1}
                  />
                  <h2 className="num">{item.id}</h2>
                  <span className="heart">
                    <FaRegHeart />
                  </span>
                </div>
                <div className="best-txt">
                  <p className="title">{item.title}</p>
                  <p className="sub1">{item.sub1}</p>
                  <div className="price">
                    <div className="price-row">
                      <span className="discount">{discountPercentage}%</span>
                      <span className="sale-price">
                        {item.price2.toLocaleString()}원
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
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
      <div className="indi-bottom">
        <div className="indicator">
          {Array.from({ length: Math.ceil(totalItems / 2) }).map((_, idx) => (
            <span
              key={idx}
              className={Math.floor(currentIndex / 2) === idx ? "active" : ""}
              onClick={() => handleIndicatorClick(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
