import React, { useState } from "react";
import ItemData from "../../assets/data/Item.json"; // 상품 데이터
import "./DetailTop.scss";
import { useParams, useNavigate } from "react-router-dom"; // useParams로 id 가져오기, useNavigate로 페이지 이동

const DetailTop = () => {
  const { id } = useParams(); // URL에서 id 가져오기
  const product = ItemData.find((item) => item.id === id); // id에 맞는 상품 찾기
  const navigate = useNavigate();
  const [mainImg, setMainImg] = useState(product ? product.image : ""); // 상품 이미지 설정
  const [selectedSize, setSelectedSize] = useState(null); // 사이즈 선택

  if (!product) return <div className="loading">Loading...</div>; // 상품이 없다면 로딩 표시

  // 사이즈 옵션 배열
  const sizes = [225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280];

  // 장바구니에 상품 추가하는 함수
  const handleAddToCart = () => {
    if (selectedSize) {
      const cartItem = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price2,
        quantity: 1,
        size: selectedSize,
      };

      // 로컬 스토리지에서 기존 장바구니 가져오기
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      cartItems.push(cartItem); // 새로 추가된 상품 추가
      localStorage.setItem("cart", JSON.stringify(cartItems)); // 로컬 스토리지에 저장

      // 장바구니 페이지로 이동
      navigate("/cart");
    } else {
      alert("사이즈를 선택하세요.");
    }
  };

  return (
    <section className="detail-top">
      <div className="detail-top__inner">
        {/* 왼쪽: 이미지 영역 */}
        <div className="img-area">
          <div className="main-img-container">
            <img
              src={require(`../../assets/images/Shoes/${mainImg}`)} // 이미지 경로
              alt={product.title}
              className="main-img"
            />
          </div>
          <div className="sub-imgs">
            {/* 썸네일 이미지 클릭 시 메인 이미지 변경 */}
            <div
              className={`thumb ${mainImg === product.image ? "active" : ""}`}
              onClick={() => setMainImg(product.image)}
            >
              <img
                src={require(`../../assets/images/Shoes/${product.image}`)}
                alt="main thumb"
              />
            </div>
            {product.detailimage.slice(0, 4).map((img, idx) => (
              <div
                key={idx}
                className={`thumb ${mainImg === img ? "active" : ""}`}
                onClick={() => setMainImg(img)}
              >
                <img
                  src={require(`../../assets/images/Shoes/${img}`)}
                  alt={`detail-${idx}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽: 정보 영역 */}
        <div className="info-area">
          <div className="product-header">
            <span className="category">{product.sub1} (WIDE)</span>
            <h2 className="title">{product.title}</h2>
            <div className="price-box">
              <span className="discount-rate">30%</span>
              <span className="price">
                {Number(product.price2).toLocaleString()}원
              </span>
              <span className="original-price">
                {Number(product.price1).toLocaleString()}원
              </span>
            </div>
          </div>

          {/* 상품 옵션: 색상 및 사이즈 선택 */}
          <div className="product-options">
            <div className="option-section">
              <p className="option-title">색상</p>
              <div className="color-chips">
                <span className="chip blue active"></span>
                <span className="chip purple"></span>
                <span className="chip pink"></span>
                <span className="chip lime"></span>
                <span className="chip black"></span>
              </div>
            </div>

            <div className="option-section">
              <p className="option-title">사이즈</p>
              <div className="size-grid">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 배송 정보 및 버튼 */}
          <div className="action-area">
            <div className="shipping-info">
              <p>
                <span>배송정보</span> 국내배송
              </p>
              <p>
                <span>배송비</span> 무료 (도서산간 제외)
              </p>
            </div>

            <div className="btn-group">
              {/* 장바구니 버튼 클릭 시 상품 추가 */}
              <button className="btn-cart" onClick={handleAddToCart}>
                장바구니
              </button>
              <button className="btn-buy">구매하기</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailTop;
