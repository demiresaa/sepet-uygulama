import { moneyFormat } from "./helpers";
function Header({ total, money }) {
  return (
    <>
      <div className="header-top">
        {total > 0 && money - total !== 0 && (
          <div className="header">
            Harcayacak <span>{moneyFormat(money - total)}</span>TL paranız kaldı
            !
          </div>
        )}
        {total === 0 && (
          <div className="header">
            Harcamak için <span>{moneyFormat(money)}</span> TL paranız kaldı !
          </div>
        )}
        {money - total === 0 && (
          <div className="header">
            Harcayacak <span>{money - total}</span> TL paranız kaldı !
          </div>
        )}

        <style jsx>{`
          .header {
            background: linear-gradient(to bottom, grey, #bbb);
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 25px;
            letter-spacing: 1px;
            position: sticky;
            top: 20px;
          }
          .header-top {
            position: sticky;
            top: 0px;
          }
          .header span {
            color: black;
            font-weight: bold;
            font-size: 30px;
            padding: 10px;
          }
        `}</style>
      </div>
    </>
  );
}
export default Header;
