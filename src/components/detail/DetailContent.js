// import React from 'react';
// import './DetailContent.scss'; // SCSS 파일 연결

// const DetailContent = () => {
//   const tabItems = ['상품정보', '리뷰', '문의']; // 탭 메뉴 아이템
//   const descriptionImages = [
//     'https://via.placeholder.com/800x600?text=Description+Image+1',
//     'https://via.placeholder.com/800x800?text=Description+Image+2',
//     'https://via.placeholder.com/800x400?text=Description+Image+3',
//   ];

//   return (
//     <section className="detail-content-section">
//       <nav className="content-tab-menu">
//         <ul>
//           {tabItems.map((item, index) => (
//             <li key={index} className={index === 0 ? 'active' : ''}> {/* 첫 번째 탭을 활성화 상태로 가정 */}
//               <a href={`#${item}`}>{item}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="description-images-container">
//         {descriptionImages.map((src, index) => (
//           <img key={index} src={src} alt={`상품 상세 이미지 ${index + 1}`} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default DetailContent;   





import React from 'react';
import ItemData from '../../assets/data/Item.json'; 
import './DetailContent.scss';

const DetailContent = () => {
  const product = ItemData.find((item) => item.id === "19");
  // 상세 이미지가 Shoes 폴더에 있다면 아래 경로, detail 폴더면 "/assets/images/detail"
  const imgPath = "/assets/images/Shoes"; 

  if (!product) return null;

  return (
    <section className="detail-content">
      <div className="content-header">
        <h3>상품 정보</h3>
      </div>
      <div className="content-imgs">
        {product.detailimage.map((img, idx) => (
            <div className="img-box" key={idx}>
                <img src={`${imgPath}/${img}`} alt={`detail content ${idx}`} />
            </div>
        ))}
      </div>
    </section>
  );
};

export default DetailContent;


