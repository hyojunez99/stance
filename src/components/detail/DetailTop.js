// import './DetailTop.scss'; // SCSS 파일 연결
// import itemData from "../../assets/data/Item.json";

// const DetailTop = ({ product }) => { // 상품 데이터를 props로 받도록 변경
//   // product 객체는 예시 데이터입니다. 실제 데이터에 맞게 수정하세요.
//   const sampleProduct = product || itemData[0];
//   console.log(sampleProduct);

//   return (
//     <section className="detail-top-section">
//       <div className="product-images">
//         <img src={require(`../../assets/images/Shoes/${sampleProduct.image}`)} alt={sampleProduct.name} className="main-image" />
//         <div className="thumbnail-images">
//           {/* 썸네일 이미지가 있다면 여기에 반복해서 표시 */}
//           <img src={sampleProduct.imageUrl} alt="썸네일1" />
//           <img src={sampleProduct.imageUrl} alt="썸네일2" />
//         </div>
//       </div>
//       <div className="product-info">
//         <h2 className="product-name">{sampleProduct.title}</h2>
//         <p className="product-price">{sampleProduct.price1}</p>

//         {/* 옵션 선택 영역 */}
//         <div className="options-group">
//           <label htmlFor="size-select">사이즈</label>
//           <select id="size-select">
//             {sampleProduct.detailimage.map((option, index) => (
//               <option key={index} value={option}>{option}</option>
//             ))}
//           </select>
//         </div>

//         {/* <div className="options-group">
//           <label>색상</label>
//           <div className="color-options">
//             {sampleProduct.colors.map((color, index) => (
//               <span key={index} className="color-box" style={{ backgroundColor: color }}></span>
//             ))}
//           </div>
//         </div> */}

//         <button className="buy-button">구매하기</button>
//       </div>
//     </section>
//   );
// };




//////////////////////////////////////////////////////////////////////////////////////////////////////1차시안

// import React, { useState, useEffect } from 'react';
// import './DetailTop.scss';
// import itemData from "../../assets/data/Item.json";

// // 숫자 3자리마다 콤마 찍는 함수
// const formatPrice = (price) => {
//   return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };

// const DetailTop = ({ product }) => {
//   // 1. 데이터 초기화 (props가 없으면 json 데이터 사용)
//   const sampleProduct = product || itemData[0];
  
//   // 가상의 데이터 필드 (JSON에 없으면 기본값 사용) -> 실제 데이터 구조에 맞춰 수정 필요
//   const originalPrice = sampleProduct.priceOriginal || 519000; // 정가 (예시)
//   const salePrice = parseInt(sampleProduct.price1.replace(/[^0-9]/g, "")) || 38800; // 판매가
//   const discountRate = Math.round(((originalPrice - salePrice) / originalPrice) * 100); // 할인율 계산

//   // 2. 상태 관리
//   const [selectedSize, setSelectedSize] = useState(null); // 선택된 사이즈
//   const [selectedColor, setSelectedColor] = useState(null); // 선택된 색상 (데이터 필요)
//   const [quantity, setQuantity] = useState(1); // 수량

//   // 3. 수량 변경 핸들러
//   const handleQuantityChange = (type) => {
//     if (type === "plus") {
//       setQuantity(prev => prev + 1);
//     } else {
//       setQuantity(prev => (prev > 1 ? prev - 1 : 1));
//     }
//   };

//   // 4. 총 금액 계산
//   const totalPrice = salePrice * quantity;

//   // 가상의 사이즈/색상 데이터 (JSON에 없을 경우 대비)
//   const sizes = sampleProduct.detailimage || [220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270];
//   const colors = ["#8ae3ff", "#7e8dff", "#ff7ae8", "#ccff00", "#000000"]; // 이미지의 색상 코드 예시

//   return (
//     <section className="detail-top-section">
//       {/* --- 좌측: 이미지 영역 --- */}
//       <div className="product-images">
//         <div className="main-image-wrapper">
//           {/* require 경로는 실제 프로젝트 구조에 맞춰야 함 */}
//           <img 
//             src={require(`../../assets/images/Shoes/${sampleProduct.image}`)} 
//             alt={sampleProduct.name} 
//             className="main-image" 
//           />
//         </div>
//         <div className="thumbnail-images">
//           {/* 썸네일 예시 (반복) */}
//           {[1, 2, 3, 4].map((_, idx) => (
//              <div key={idx} className="thumb-item">
//                 <img src={require(`../../assets/images/Shoes/${sampleProduct.image}`)} alt={`thumb-${idx}`} />
//              </div>
//           ))}
//         </div>
//       </div>

//       {/* --- 우측: 상품 정보 영역 --- */}
//       <div className="product-info">
//         {/* 상단 유틸 (브랜드명, 공유 등) */}
//         <div className="info-header">
//           <span className="brand-tag">ODNR &gt;</span>
//           <div className="icons">
//             <span className="icon-heart">♡</span>
//             <span className="icon-share">⇪</span>
//           </div>
//         </div>

//         {/* 상품명 & 리뷰 */}
//         <h2 className="product-name">{sampleProduct.title}</h2>
//         <div className="review-link">★★★★☆ 3,450개 리뷰 보기</div>

//         {/* 가격 정보 */}
//         <div className="price-area">
//           <span className="original-price">{formatPrice(originalPrice)}원</span>
//           <div className="final-price-wrapper">
//             <span className="discount-rate">{discountRate}%</span>
//             <span className="sale-price">{formatPrice(salePrice)}원</span>
//           </div>
//         </div>

//         <hr className="divider" />

//         {/* 배송 정보 */}
//         <div className="info-row">
//           <span className="label">배송정보</span>
//           <div className="content">
//             <p><strong>배송비 3,000원</strong></p>
//             <p className="sub-text">해당 브랜드 상품으로 50,000원 이상 구매 시 무료배송</p>
//             <p className="sub-text">제주도 포함 도서/산간 지역 추가 배송비 6,000원</p>
//             <p className="delivery-date"><strong>출고일정</strong> 3일 이내 출고 (주말, 공휴일 제외)</p>
//           </div>
//         </div>

//         {/* 적립 혜택 */}
//         <div className="info-row">
//           <span className="label">적립혜택</span>
//           <div className="content">
//             <p>구매확정 시, 360p 적립 (1%)</p>
//           </div>
//         </div>

//         {/* 색상 선택 */}
//         <div className="options-group">
//           <span className="label">색상</span>
//           <div className="color-options">
//             {colors.map((color, index) => (
//               <button
//                 key={index}
//                 className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
//                 style={{ backgroundColor: color }}
//                 onClick={() => setSelectedColor(color)}
//                 aria-label="색상 선택"
//               />
//             ))}
//           </div>
//         </div>

//         {/* 사이즈 선택 (Grid 형태) */}
//         <div className="options-group">
//           <span className="label">사이즈</span>
//           <div className="size-grid">
//             {sizes.map((size, index) => (
//               <button 
//                 key={index} 
//                 className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* 선택된 옵션 요약 및 수량 조절 */}
//         {selectedSize && (
//           <div className="selected-summary">
//             <div className="summary-title">
//               {sampleProduct.title} / {selectedSize} / {selectedColor ? '선택됨' : '색상미선택'}
//             </div>
//             <div className="quantity-control">
//               <button onClick={() => handleQuantityChange("minus")}>-</button>
//               <span>{quantity}</span>
//               <button onClick={() => handleQuantityChange("plus")}>+</button>
//             </div>
//             <div className="summary-price">{formatPrice(totalPrice)}원</div>
//           </div>
//         )}

//         {/* 총 금액 */}
//         <div className="total-price-area">
//           <span className="total-label">총 금액</span>
//           <span className="total-amount">{formatPrice(totalPrice)}원</span>
//         </div>

//         {/* 하단 버튼 (장바구니 / 구매하기) */}
//         <div className="action-buttons">
//           <button className="btn-cart">장바구니</button>
//           <button className="btn-buy">구매하기</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DetailTop;





//////////////////////////////////////////////////////////////////////////////////////////////////////2차시안



import React, { useState } from 'react';
import ItemData from '../../assets/data/Item.json';
import './DetailTop.scss';
import { useParams } from 'react-router-dom';

const DetailTop = () => {
  const {id} = useParams();
  // 예시를 위해 id "1"번 데이터를 가져옵니다.
  const product = ItemData.find((item) => item.id === id);
  const [mainImg, setMainImg] = useState(product ? product.image : '');
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return <div className="loading">Loading...</div>;
  
  // 사이즈 옵션 배열 (시안 참고)
  const sizes = [225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280];

  return (
    <section className="detail-top">
      <div className="detail-top__inner">
        
        {/* 왼쪽: 이미지 영역 */}
        <div className="img-area">
          <div className="main-img-container">
            <img src={require(`../../assets/images/Shoes/${mainImg}`)} alt={product.title} className="main-img" />
          </div>
          <div className="sub-imgs">
             <div className={`thumb ${mainImg === product.image ? 'active' : ''}`} 
                  onClick={() => setMainImg(product.image)}>
                <img src={require(`../../assets/images/Shoes/${product.image}`)} alt="main thumb" />
             </div>
            {product.detailimage.slice(0, 4).map((img, idx) => (
              <div key={idx} 
                   className={`thumb ${mainImg === img ? 'active' : ''}`} 
                   onClick={() => setMainImg(img)}>
                <img src={require(`../../assets/images/Shoes/${img}`)} alt={`detail-${idx}`} />
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
                <span className="price">{Number(product.price2).toLocaleString()}원</span>
                <span className="original-price">{Number(product.price1).toLocaleString()}원</span>
            </div>
          </div>

          <div className="product-options">
            {/* 색상 선택 */}
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

            {/* 사이즈 선택 */}
            <div className="option-section">
              <p className="option-title">사이즈</p>
              <div className="size-grid">
                {sizes.map(size => (
                  <button 
                    key={size} 
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 구매 정보 및 버튼 */}
          <div className="action-area">
            <div className="shipping-info">
              <p><span>배송정보</span> 국내배송</p>
              <p><span>배송비</span> 무료 (도서산간 제외)</p>
            </div>
            
            <div className="btn-group">
                <button className="btn-cart">장바구니</button>
                <button className="btn-buy">구매하기</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DetailTop;



