import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.scss";
const CartPage = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const [previewImg, setPreviewImg] = useState(null); //
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(saved);
  }, []);

  const syncCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };


  const [checkedIds, setCheckedIds] = useState(() => new Set());


  useEffect(() => {
    setCheckedIds(new Set(cartItems.map((_, idx) => idx)));
  }, [cartItems]);
  const allChecked = useMemo(() => {
    if (cartItems.length === 0) return false;
    return cartItems.every((_, idx) => checkedIds.has(idx));
  }, [cartItems, checkedIds]);
  const selectedItems = useMemo(
    () => cartItems.filter((_, idx) => checkedIds.has(idx)),
    [cartItems, checkedIds]
  );
  const toggleAll = () => {
    if (allChecked) {
      setCheckedIds(new Set());
    } else {
      setCheckedIds(new Set(cartItems.map((_, idx) => idx)));
    }
  };
  const toggleOne = (index) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };
  const handleSelectedDelete = () => {
  
    if (checkedIds.size === 0) {
      alert("선택된 상품이 없습니다.");
      return;
    }
    const updated = cartItems.filter((_, idx) => !checkedIds.has(idx));
    syncCart(updated);

    setCheckedIds(new Set());
  };


  const handleUpdateQty = (id, action) => {
    const updated = cartItems.map((item) => {
      if (item.id !== id) return item;
      if (action === "plus") {
        return { ...item, quantity: item.quantity + 1 };
      }
      if (action === "minus" && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    syncCart(updated);
  };
  const handleDelete = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    syncCart(updated);
  };


  const itemsTotal = useMemo(
    () => selectedItems.reduce((acc, i) => acc + i.price * i.quantity, 0),
    [selectedItems]
  );
  const totalQty = useMemo(
    () => selectedItems.reduce((acc, i) => acc + i.quantity, 0),
    [selectedItems]
  );
  const shippingFee = useMemo(() => {
    if (itemsTotal === 0) return 0;
    return 3000;
  }, [itemsTotal]);
  // 30만원 이상 3만원 할인
  const discount = useMemo(() => {
    if (itemsTotal >= 300000) return 30000;
    return 0;
  }, [itemsTotal]);
  const finalTotal = itemsTotal - discount + shippingFee;


  return (
    <div className="cart-page">
      <div className="back">
        <p className="back-icon" onClick={handleBack}>
          ←
        </p>
        <p className="cart-title">장바구니</p>
      </div>
      <div className="cart-layout">

        <section className="cart-left">
          <div className="cart-card">

            <div className="cart-toolbar">
              <label className="check">
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={toggleAll}
                />
                전체 선택
              </label>
              <button className="delete-btn" onClick={handleSelectedDelete}>
                선택삭제
              </button>
            </div>


            <ul className="cart-list">
              <p className="brand">PACEFY</p>
              {cartItems.map((item, index) => (
                <li className="cart-item" key={index}>

                  <label className="check item-check">
                    <input
                      type="checkbox"
                      checked={checkedIds.has(index)}
                      onChange={() => toggleOne(index)}
                    />
                  </label>

                  <div className="item-info">
                    <div className="up">
                      <div className="list-img">
                        <img
                          src={require(`../assets/images/Shoes/${item.image}`)}
                          alt={item.title}
                          onClick={() => setPreviewImg(item.image)}
                          style={{ cursor: "zoom-in" }}
                        />
                      </div>
                      <div className="sameline">
                        <div className="txt">
                          <p className="item-title">PACEFY {item.sub1}</p>
                          <p className="sub-title">{item.size}</p>
                        </div>
                        <button
                          className="remove"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="fa-solid fa-x" />
                        </button>
                      </div>
                    </div>
                    <div className="item-row">
                      <div className="prices">
                        <div className="count">
                          <button
                            className="count-btn"
                            onClick={() =>
                              handleUpdateQty(item.id, "minus")
                            }
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <span className="count-num">{item.quantity}</span>
                          <button
                            className="count-btn"
                            onClick={() => handleUpdateQty(item.id, "plus")}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                        <p className="sum">
                          ₩ {(item.price * item.quantity).toLocaleString()}
                        </p>
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
                배송비{" "}
                <span className="gray-txt">(제주/도서 산간 배송비 포함)</span>
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
      {previewImg && (
        <div className="image-modal" onClick={() => setPreviewImg(null)}>
          <div className="image-box" onClick={(e) => e.stopPropagation()}>
            <img
              src={require(`../assets/images/Shoes/${previewImg}`)}
              alt="preview"
            />
            <button className="close-btn" onClick={() => setPreviewImg(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>

  );
};


export default CartPage;
