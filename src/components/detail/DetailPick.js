// import React from 'react';
// import './DetailPick.scss'; // SCSS 파일 연결

// const DetailPick = ({ products }) => { // 추천 상품 데이터를 props로 받음
//   const sampleProducts = products || [ // 예시 데이터
//     { id: 1, imageUrl: 'https://via.placeholder.com/200x200?text=Pick+1', name: '추천 상품 1', price: '100,000원' },
//     { id: 2, imageUrl: 'https://via.placeholder.com/200x200?text=Pick+2', name: '추천 상품 2', price: '120,000원' },
//     { id: 3, imageUrl: 'https://via.placeholder.com/200x200?text=Pick+3', name: '추천 상품 3', price: '90,000원' },
//     { id: 4, imageUrl: 'https://via.placeholder.com/200x200?text=Pick+4', name: '추천 상품 4', price: '110,000원' },
//     { id: 5, imageUrl: 'https://via.placeholder.com/200x200?text=Pick+5', name: '추천 상품 5', price: '130,000원' },
//   ];

//   return (
//     <section className="detail-pick-section">
//       <h3 className="section-title">PACEY PICK</h3>
//       <div className="product-carousel">
//         {/* 실제로는 캐러셀 라이브러리를 사용하거나, 스크롤 가능한 형태로 구현 */}
//         {sampleProducts.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.imageUrl} alt={product.name} />
//             <p className="product-card-name">{product.name}</p>
//             <p className="product-card-price">{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default DetailPick;

import React from 'react';
import ItemData from '../../assets/data/Item.json'; // 스크린샷 구조 반영
import './DetailPick.scss';

const DetailPick = () => {
  const pickItems = ItemData.filter(item => item.category === 'pick').slice(0, 4);

  return (
    <section className="detail-pick">
      <div className="inner">
        <h2 className="title">MD'S PICK</h2>
        <ul className="pick-list">
            {pickItems.map((item) => (
                <li key={item.id} className="pick-item">
                    <div className="thumb">
                      <img src={require(`../../assets/images/Shoes/${item.image}`)} alt={item.title} />
                        {/* <img src={`${imgPath}/${item.image}`} alt={item.title} /> */}
                    </div>
                    <div className="text-box">
                        <p className="sub-title">{item.sub1}</p>
                        <h4 className="prod-title">{item.title}</h4>
                        <div className="price">
                            {Number(item.price2).toLocaleString()}원
                        </div>
                    </div>
                </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default DetailPick;


