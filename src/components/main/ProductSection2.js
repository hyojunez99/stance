import { useNavigate } from "react-router-dom";
import listDate from "../../assets/data/Item.json";
import "./ProductSection2.scss";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductSection2 = () => {
  const navigate = useNavigate();
  const bestItems = listDate.filter((item) => item.category === "pick");
  const calculateDiscount = (price1, price2) => {
    return Math.floor(((price1 - price2) / price1) * 100);
  };

  // ScrollTrigger 적용

  const sectionRef = useRef(null);
  useEffect(() => {
    const items = sectionRef.current.querySelectorAll("ul li");
    items.forEach((item) => {
      // 초기 상태 세팅
      gsap.set(item, { y: 70, opacity: 0 });

      // 스크롤 시 애니메이션
      gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%", // 화면 아래에서 10% 남은 위치에서 시작
          end: "bottom 20%",
          toggleActions: "play none none reverse", // 스크롤 올리면 다시 숨김
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
            <li key={item.id} onClick={()=>{navigate(`/detail/${item.id}`)}}>
              <div className="img-wrap">
                <img
                  src={require(`../../assets/images/Shoes/${item.image}`)}
                  alt={item.sub1}
                />
                <span className="heart">
                  <FaRegHeart />
                </span>
              </div>
              <div className="best-txt">
                <p className="title">{item.title}</p>
                <p className="sub1">{item.sub1}</p>
                <div className="price">
                  <span className="original-price">
                    {Number(item.price1).toLocaleString()}원
                  </span>
                  <div className="price-row">
                    <span className="discount">{discountPercentage}%</span>
                    <span className="sale-price">
                      {Number(item.price2).toLocaleString()}원
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
