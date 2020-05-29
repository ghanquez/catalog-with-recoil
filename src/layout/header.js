import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState } from "../store";

function Header() {
  const { totalQty, totalCost } = useRecoilValue(cartState);
  return (
    <div className="header">
      <div>
        <Link to="/">
          <h1>My store</h1>
        </Link>
      </div>
      <div style={{ fontWeight: "bolder", fontSize: "14px" }}>
        Total: ${totalCost}
      </div>
      <div>
        <Link className="ui button primary" to="cart">
          Cart: {totalQty}
        </Link>
      </div>
    </div>
  );
}

export default Header;
