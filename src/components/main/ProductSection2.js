import listDate from "../../assets/data/Item.json";
import "./ProductSection2.scss";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const ProductSection2 = () => {
  const bestItems = listDate.filter((item) => item.category === "pick");

  const calculateDiscount = (price1, price2) => {
    return Math.floor(((price1 - price2) / price1) * 100);
  };

  return (
    <section id="paceypick">
      <h2>PACEY PICK</h2>
      <ul>
        {bestItems.map((item) => {
          const discountPercentage = calculateDiscount(
            item.price1,
            item.price2
          );
          return (
            <li key={item.id}>
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
                    {item.price1.toLocaleString()}원
                  </span>
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
