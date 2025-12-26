import React from "react";
import ItemData from "../../assets/data/Item.json";
import "./DetailContent.scss";

const DetailContent = () => {
  const product = ItemData.find((item) => item.id === "11");

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
              // public 폴더 내 이미지는 절대 경로로 접근
              src={`/assets/images/${imgFileName}`}
              alt={`상품 상세 이미지 ${idx + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailContent;
