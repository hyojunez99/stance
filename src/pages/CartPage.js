import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.scss";

const CartPage = () => {
  const navigate = useNavigate();

  // 뒤로 가기
  const handleBack = () => navigate(-1);

  const [cartItems, setCartItems] = useState([]);

  // 장바구니 아이템을 로컬 스토리지에서 가져오기
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCartItems);
  }, []);

  // 수량 변경
  const handleUpdateQty = (id, action) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        if (action === "plus") item.quantity += 1;
        else if (action === "minus" && item.quantity > 1) item.quantity -= 1;
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems)); // 로컬 스토리지에 업데이트
  };

  // 아이템 삭제
  const handleDelete = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems)); // 로컬 스토리지에 업데이트
  };

  // 금액 계산
  const itemsTotal = useMemo(() => {
    return cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
  }, [cartItems]);

  return (
    <div className="cart-page">
      <div className="back">
        <p className="back-icon" onClick={handleBack}>
          ←
        </p>
        <p className="cart-title">장바구니</p>
      </div>

      <div className="cart-layout">
        {/* 왼쪽: 장바구니 목록 */}
        <section className="cart-left">
          <div className="cart-card">
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li className="cart-item" key={item.id}>
                  <div className="item-info">
                    <div className="up">
                      <div className="list-img">
                        <img
                          src={require(`../assets/images/Shoes/${item.image}`)}
                          alt={item.title}
                        />
                      </div>
                      <div className="sameline">
                        <div className="txt">
                          <p className="item-title">{item.title}</p>
                          <p className="sub-title">{item.size}</p>
                        </div>
                        <button
                          className="remove"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="fa-solid fa-x"></i>
                        </button>
                      </div>
                    </div>

                    <div className="item-row">
                      <div className="count">
                        <button
                          className="count-btn minus"
                          onClick={() => handleUpdateQty(item.id, "minus")}
                        >
                          -
                        </button>
                        <span className="count-num">{item.quantity}</span>
                        <button
                          className="count-btn plus"
                          onClick={() => handleUpdateQty(item.id, "plus")}
                        >
                          +
                        </button>
                      </div>
                      <div className="prices">
                        <span className="sum">
                          {Number(item.price * item.quantity).toLocaleString()}
                          원
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 오른쪽: 장바구니 요약 */}
        <section className="cart-right">
          <div className="summary-card">
            <div className="summary-title">장바구니 요약</div>
            <div className="summary-row">
              <span>합계</span>
              <span>{Number(itemsTotal).toLocaleString()}원</span>
            </div>
            <div className="order-btn-wrap">
              <button className="order-btn">주문하기</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
