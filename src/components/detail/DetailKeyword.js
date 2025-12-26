// import React from 'react';
// import './DetailKeyword.scss'; // SCSS 파일 연결

// const DetailKeyword = ({ keywords }) => {
//   const sampleKeywords = keywords || [ // 예시 키워드 데이터
//     { id: 1, imageUrl: 'https://via.placeholder.com/180x180?text=Running' },
//     { id: 2, imageUrl: 'https://via.placeholder.com/180x180?text=Pacey' },
//     { id: 3, imageUrl: 'https://via.placeholder.com/180x180?text=Style' },
//     { id: 4, imageUrl: 'https://via.placeholder.com/180x180?text=Active' },
//   ];

//   return (
//     <section className="detail-keyword-section">
//       <h3 className="section-title">#HOT PEACY KEYWORD</h3>
//       <div className="keyword-gallery">
//         {sampleKeywords.map(keyword => (
//           <div key={keyword.id} className="keyword-item">
//             <img src={keyword.imageUrl} alt="키워드 이미지" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

import React from 'react';
import KeywordData from '../../assets/data/Keyword.json'; // 스크린샷 구조 반영
import './DetailKeyword.scss';

const DetailKeyword = () => {
    console.log( 'keyword page');
  return (
    <section className="detail-keyword">
        <div className="inner">
            <h2 className="title">#KEYWORD</h2>
            <div className="keyword-grid">
                {KeywordData.map((item) => (
                    <div key={item.id} className="keyword-item">
                        <img src={require(`../../assets/images/keyword/${item.image}`)} alt={item.title} />
                        {/* <img src={`${imgPath}/${item.image}`} alt={item.title} /> */}
                        <div className="overlay">
                            <span>#{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default DetailKeyword;
