import { useNavigate } from "react-router-dom";
import listDate from "../../assets/data/Item.json";
import "./ProductSection2.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductSection2 = () => {
  const navigate = useNavigate();
  const bestItems = listDate.filter((item) => item.category === "pick");

  const [liked, setLiked] = useState({});
  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const calculateDiscount = (price1, price2) => {
    return Math.floor(((price1 - price2) / price1) * 100);
  };

  // ScrollTrigger 적용
  const sectionRef = useRef(null);
  useEffect(() => {
    const items = sectionRef.current.querySelectorAll("ul li");
    items.forEach((item) => {
      gsap.set(item, { y: 70, opacity: 0 });
      gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
    });
  }, []);

  return (
    <section id="paceypick" ref={sectionRef}>
      <h2>PACEY PICK</h2>
      <ul>
        {bestItems.map((item) => {
          const discountPercentage = calculateDiscount(
            item.price1,
            item.price2
          );
          return (
            <li
              key={item.id}
              onClick={() => {
                // 페이지 이동 시 상품 id를 URL에 포함시켜 DetailPage로 이동
                navigate(`/detail/${item.id}`);
                setTimeout(() => {
                  window.scrollTo({ top: 0, left: 0 });
                });
              }}
            >
              <div className="img-wrap">
                <img
                  src={require(`../../assets/images/Shoes/${item.image}`)}
                  alt={item.sub1}
                />
                <span
                  className={`heart ${liked[item.id] ? "on" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();      // 👈 li 클릭(상세페이지 이동) 막기
                    toggleLike(item.id);
                  }}
                >
                  {liked[item.id] ? <FaHeart /> : <FaRegHeart />}
                </span>
              </div>
              <div className="best-txt">
                <p className="title">{item.title}</p>
                <p className="sub1">{item.sub1}</p>
                <div className="price">
                  <span className="original-price">
                    {Number(item.price1).toLocaleString()}
                  </span>
                  <div className="price-row">
                    <span className="discount">{discountPercentage}%</span>
                    <span className="sale-price">
                      {Number(item.price2).toLocaleString()}<span>원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="indi-bottom">
        <div className="indicator">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="indi-txt">
            <p>
              상품 더 보기 <IoIosArrowForward />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection2;
