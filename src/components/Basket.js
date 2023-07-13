import BasketItem from "./BasketItem";

function Basket({ basket, resetBasket, products, total }) {
  return (
    <>
      <div className="basket-container container">
        <h3>Alışveriş Detayları</h3>
        {basket.map((item) => (
          <ul>
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          </ul>
        ))}
        <div className="total">Toplam : {total} TL</div>
        <button className="basket-reset" onClick={resetBasket}>
          Sepeti Sil
        </button>
      </div>
      <style jsx>{`
        .basket-container {
          padding: 20px;
          background: linear-gradient(to bottom, grey, #bbb);
          border-radius: 10px;
        }
        .basket-container h3 {
          font-size: 20px;
          margin-bottom: 15px;
        }
        .basket-container .total {
          border-top: 1px solid white;
          padding-top: 10px;
          margin-top: 10px;
          font-size: 20px;
          font-weight: bold;
          text-align: right;
          color: white;
        }
        .basket-reset {
          background: #f2f2f2;
          height: 40px;
          padding: 0 20px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 10px;
          cursor: pointer;
        }
        .basket-reset:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}
export default Basket;
