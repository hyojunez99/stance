import { useEffect, useMemo, useState } from "react";
import "./CartPage.scss";

const CartPage = ({ cartItems, onUpdateQty, onDelete }) => {
  // 선택된 상품들
  const [checkedIds, setCheckedIds] = useState(() => new Set());

  // cartItems 바뀌면 기본값 = 전체 선택
  useEffect(() => {
    setCheckedIds(new Set(cartItems.map((i) => i.id)));
  }, [cartItems]);

  // 전체선택 여부
  const allChecked = useMemo(() => {
    if (cartItems.length === 0) return false;
    return cartItems.every((i) => checkedIds.has(i.id));
  }, [cartItems, checkedIds]);

  // 선택된 아이템 목록
  const selectedItems = useMemo(() => {
    return cartItems.filter((i) => checkedIds.has(i.id));
  }, [cartItems, checkedIds]);

  // 금액 계산
  const itemsTotal = useMemo(() => {
    return selectedItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
  }, [selectedItems]);
  //합계
  const totalQty = useMemo(() => {
    return selectedItems.reduce((acc, i) => acc + i.quantity, 0);
  }, [selectedItems]);

  // 배송비 (예: 기본 3000, 0원이면 0)
  const shippingFee = useMemo(() => {
    if (itemsTotal === 0) return 0;
    return 3000;
  }, [itemsTotal]);

  // 할인 
  const discount = useMemo(() => {
    // 설정 필요 
    if (itemsTotal >= 300000) return 30000;
    return 0;
  }, [itemsTotal]);

  const finalTotal = itemsTotal - discount + shippingFee;

  // 이벤트
  const toggleAll = () => {
    if (allChecked) setCheckedIds(new Set());
    else setCheckedIds(new Set(cartItems.map((i) => i.id)));
  };

  const toggleOne = (id) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleSelectedDelete = () => {
    selectedItems.forEach((i) => onDelete(i.id));
  };

  return (
    <div className="cart-page">
      <div className="back" >
        <p className="back-icon"> ← </p>
        <p className="cart-title">장바구니</p>
      </div>

      <div className="cart-layout">
        {/* 목록 */}
        <section className="cart-left">
          <div className="cart-card">
            <div className="cart-toolbar">
              <label className="check">
                <input type="checkbox" checked={allChecked} onChange={toggleAll} />
                전체 선택
              </label>
              <button className="delete-btn" onClick={handleSelectedDelete}>
                선택삭제
              </button>

            </div>

            <ul className="cart-list">
              <p className="brand">PACEFY</p>
              {cartItems.map((item) => (
                <li className="cart-item" key={item.id}>
                  <label className="check item-check">
                    <input
                      type="checkbox"
                      checked={checkedIds.has(item.id)}
                      onChange={() => toggleOne(item.id)}
                    />
                  </label>

                  {/* 이미지 일단 빈칸 */}
                  

                  <div className="item-info">
                    <div className="up">
                    <div className="list-img" >
                    <img
                      src={require(`../assets/images/Shoes/${item.image}`)}
                      alt={`${item.title} ${item.category}`} />
                  </div>
                    <div className="sameline">
                      <div className="txt">
                      <p className="item-title">PACEFY {item.title}</p>
                      <p className="sub-title">subname 들어갈 곳</p>
                      </div>
                      <button className="remove" onClick={() => onDelete(item.id)}><i className="fa-solid fa-x"></i></button>
                    </div>
                    
                    </div>

                    <div className="item-row">


                      <div className="prices">

                        <div className="count">
                          <button className="count-btn" onClick={() => onUpdateQty(item.id, -1)}><i className="fa-solid fa-minus"></i></button>
                          <span className="count-num">{item.quantity}</span>
                          <button className="count-btn" onClick={() => onUpdateQty(item.id, +1)}><i className="fa-solid fa-plus"></i></button>
                          
                        </div>
                        <p className="sum">₩ {(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mini-summary">
              <div className="row-txt">
                <span>주문금액</span>
                <span>₩ {itemsTotal.toLocaleString()}</span>
              </div>
              <div className="row-txt">
                <span>상품할인</span>
                <span className="red-txt">-₩ {discount.toLocaleString()}</span>
              </div>
              <div className="row-txt">
                <span>
                  배송비 <span className="gray-txt">(묶음배송 적용)</span>
                </span>
                <span>₩ {shippingFee.toLocaleString()}</span>
              </div>
              <div className="row-txt total">
                <span>결제금액</span>
                <span>₩ {finalTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 오른쪽 영역 */}
        <aside className="cart-right">
          <div className="summary-card">
            <h3 className="summary-title">전체 합계</h3>

            <div className="summary-row">
              <span>상품수</span>
              <span>{totalQty}개</span>
            </div>
            <div className="summary-row">
              <span>주문금액</span>
              <span>₩ {itemsTotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>상품할인</span>
              <span className="red-txt">-₩ {discount.toLocaleString()}</span>
            </div>
            <div className="summary-row dashed">
              <span>
                배송비 <span className="gray-txt">(제주/도서 산간 배송비 포함)</span>
                <span className="mobile-txt">(묶음배송 적용)</span>
              </span>
              <span>₩ {shippingFee.toLocaleString()}</span>
            </div>

            <div className="summary-divider" />

            <div className="summary-total">
              <span>총 결제금액</span>
              <span>₩ {finalTotal.toLocaleString()}</span>
            </div>
            <div className="order-btn-wrap">
              <button className="order-btn">
                총 {totalQty}개 | {finalTotal.toLocaleString()}원 주문하기
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default CartPage;