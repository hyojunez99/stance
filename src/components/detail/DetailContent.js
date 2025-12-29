import React from "react";
import ItemData from "../../assets/data/Item.json"; // 상품 데이터 가져오기
import "./DetailContent.scss";

const DetailContent = ({ id }) => {
  // URL에서 받은 id로 상품 찾기
  const product = ItemData.find((item) => item.id === id);

  // 상품이 없을 경우 에러 메시지 반환
  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  // 첫 번째 이미지 한 개만 보여주기
  const firstImage = product.detailimage ? product.detailimage[4] : null;

  // 이미지 경로가 존재하는지 확인
  if (!firstImage) {
    return <p>이미지가 없습니다.</p>;
  }

  // 이미지 경로 생성
  let imagePath;
  try {
    imagePath = require(`../../assets/images/Shoes/${firstImage}`);
  } catch (error) {
    // 이미지 경로가 잘못된 경우 오류 처리
    console.error("이미지 로드 오류", error);
    return <p>이미지가 없습니다.</p>;
  }

  return (
    <section className="detail-content">
      <div className="content-header">
        <h3>상품 정보</h3>
      </div>
      <div className="content-imgs">
        <div className="img-wrap">
          <img
            src={imagePath} // 첫 번째 이미지
            alt="상품 상세 이미지 1"
          />
        </div>
      </div>
    </section>
  );
};

export default DetailContent;
