

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
