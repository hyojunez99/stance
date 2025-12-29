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


