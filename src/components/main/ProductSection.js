import listDate from "../../assets/data/Item.json";
import "./ProductSection.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductSection = () => {
  const bestItems = listDate.filter((item) => item.category === "best");
  const totalItems = bestItems.length;
  const visibleCount = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 2) % totalItems);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 2 + totalItems) % totalItems);

  const calculateDiscount = (price1, price2) =>
    Math.floor(((price1 - price2) / price1) * 100);

  const slides = [...bestItems, ...bestItems.slice(0, visibleCount)];

  const [isTransition, setIsTransition] = useState(true);

  // ScrollTrigger 적용
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll("ul li");
    items.forEach((item) => {
      // 초기 상태 세팅
      gsap.set(item, { y: 70, opacity: 0 });
      // 스크롤시 애니메이션
      gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%", // 화면 아래에서 10% 남은 위치에서 시작
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
    });
  }, []);

  return (
    <section id="best-seller" ref={sectionRef}>
      <h2>BEST SELLER</h2>
      <div className="slider-wrap">
        <ul
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
            transition: isTransition ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {slides.map((item, idx) => {
            const discountPercentage = calculateDiscount(
              item.price1,
              item.price2
            );
            return (
              <li key={idx} className={idx === currentIndex ? "active" : ""}>
                <div className="img-wrap">
                  <img
                    src={require(`../../assets/images/Shoes/${item.image}`)}
                    alt={item.sub1}
                  />
                  <h2 className="num">{item.id}</h2>
                  <span
                    className={`heart ${liked[item.id] ? "on" : ""}`}
                    onClick={() => toggleLike(item.id)}
                  >
                    {liked[item.id] ? <FaHeart /> : <FaRegHeart />}
                  </span>
                </div>
                <div className="best-txt">
                  <p className="title">{item.title}</p>
                  <p className="sub1">{item.sub1}</p>
                  <div className="price">
                    <div className="price-row">
                      <span className="discount">{discountPercentage}%</span>
                      <span className="sale-price">
                        {Number(item.price2).toLocaleString()}
                        <span>원</span>
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
          {Array.from({ length: Math.ceil(totalItems / 2) }).map((_, idx) => {
            const isActive =
              currentIndex >= idx * 2 && currentIndex < idx * 2 + 2;
            return (
              <span
                key={idx}
                className={isActive ? "active" : ""}
                onClick={() => setCurrentIndex(idx * 2)}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
