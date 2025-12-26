import React from "react";
import ItemData from "../../assets/data/Item.json"; // 상품 데이터 가져오기
import "./DetailContent.scss";

const DetailContent = ({ id }) => {
  // URL에서 받은 id로 상품 찾기
  const product = ItemData.find((item) => item.id === id);

  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  return (
    <section className="detail-content">
      <div className="content-header">
        <h3>상품 정보</h3>
      </div>
      <div className="content-imgs">
        {product.detailimage.map((imgFileName, idx) => (
          <div className="img-wrap" key={idx}>
            <img
              src={require(`../../assets/images/Shoes/${imgFileName}`)}
              alt={`상품 상세 이미지 ${idx + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailContent;
