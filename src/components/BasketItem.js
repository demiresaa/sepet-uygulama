function BasketItem({ item, product }) {
  return (
    <>
      <li className="basket-item">
        {product.name} <span className="x">x</span> <span>{item.amount}</span>
      </li>

      <style jsx>{`
        .basket-item {
          padding: 8px;
          font-size: 16px;
          font-weight: bold;
        }
        .basket-item span {
          color: white;
          font-weight: bold;
        }
        .basket-item span.x {
          font-size: 20px;
          color: #bbb;
          font-weight: bolder;
        }
      `}</style>
    </>
  );
}

export default BasketItem;
