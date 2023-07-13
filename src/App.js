import "./App.css";
import products from "../src/products.json";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Product from "./components/Product";
import Basket from "./components/Basket";
function App() {
  //burada 3 tane usestate tanımladık money ,basket: urunleri ssetleyerek bize yeni urun diye donecek birde,total urunleri gibi bir şey yapıp onları topladıık

  const [money] = useState(10000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  //  toplam urun paralarını  useeffect kullanarak totalleri kendi içinde toplayarak ne kadar totoal oldugunu yazdırdık  reduce : gelen itemleri toplayıp san veya carparak sana tek bir sonuc dödürtüür

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]); // nerede döndüreceğini yazarsın

  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {products.map((product) => (
          <Product
            money={money}
            total={total}
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            product={product}
          />
        ))}
      </div>
      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          total={total}
          products={products}
          basket={basket}
        />
      )}
    </>
  );
}

export default App;
