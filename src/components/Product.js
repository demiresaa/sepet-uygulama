function Product({ product, total, money, basket, setBasket }) {
  const basketItem = basket.find((item) => item.id === product.id); //bu sepeteki ürünleri göstgeriyor bize

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id); // BURADA İSE SEPETE URUN EKLEME  YAPTIK İLK ONCE İTEM İDNİN PRODUCT İD YE EŞİT OLDUGUNDA DŞYE CONSTLADIK  ĞERE DOĞRUYSA
    // SEPETTEKİ AMONUNT YANİ 0 DEĞERİNİ 1 ARTTRIR DEDİK
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        // YANLIŞ OLDUGUNDA İSE YANİ  BOŞ OLAN SEPETE BİŞİ YAPMA DİYORUZ
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket, { id: product.id, amount: 1 }]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id); // BURADA SEPETTEKİ URUNU SİLİLYORUZ
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <>
      <div className="product">
        <img src={product.image} alt=""></img>
        <h6>{product.name}</h6>
        <div className="price">{product.price} TL</div>
        <div className="actions">
          <button
            className="buy-btn"
            disabled={total + product.price > money}
            onClick={addBasket}
          >
            Sepete Ekle
          </button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button
            className="sell-btn"
            disabled={!(basketItem && basketItem.amount)}
            onClick={removeBasket}
          >
            Sil
          </button>
        </div>
        <style jsx>{`
          .product {
            padding: 10px;
            background: linear-gradient(to bottom, grey, #bbb);
            margin-bottom: 20px;
            width: 24%;
            border-radius: 10px;
          }
          .product img {
            width: 100%;
            height: 300px;
          }

          .product h6 {
            font-size: 20px;
            margin-bottom: 10px;
          }

          .product .actions {
            display: flex;
            align-items: center;
            margin-top: 10px;
          }
          .actions button {
            height: 40px;
            padding: 0 10px;
            flex: 1;
            cursor: pointer;
          }
          .actions button[disabled] {
            cursor: not-allowed;
          }
          .actions .amount {
            width: 40px;
            text-align: center;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
          }

          .actions .buy-btn {
            background: #f2f2f2;
            font-size: 12px;
            font-weight: 500;
            border-radius: 10px 0 0 10px;
          }
          .actions .sell-btn {
            background: #f2f2f2;
            font-size: 12px;
            font-weight: 500;
            border-radius: 0 10px 10px 0;
          }
          .actions .buy-btn:hover {
            opacity: 0.9;
          }
          .actions .sell-btn:hover {
            opacity: 0.9;
          }
        `}</style>
      </div>
    </>
  );
}
export default Product;
