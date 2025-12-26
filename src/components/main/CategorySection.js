import { useEffect, useRef } from "react";
import listDate from "../../assets/data/RunnigNews.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CategorySection.scss";

gsap.registerPlugin(ScrollTrigger);

const CategorySection = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const items = sectionRef.current.querySelectorAll("ul li");
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            // 요소가 뷰포트 85%에 들어오면
            start: "top 85%",
            // 요소가 뷰포트 아래로 나가기 전까지
            end: "bottom 20%",
            // 스크롤 올라가면 다시 숨김
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        }
      );
    });
  }, []);
  return (
    <section id="runningnews" ref={sectionRef}>
      <h2>Running News</h2>
      <ul>
        {listDate.map((item, idx) => (
          <li key={idx}>
            <img
              src={require(`../../assets/images/News/${item.image}`)}
              alt={item.title}
            />
            <div className="news-title">
              <p>{item.title}</p>
              <div className="news-txt">
                <p>#{item.sub1}</p>
                <p>#{item.sub2}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategorySection;
