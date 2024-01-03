import React from "react";
import TrustBoxCardWidget from "components/trustpilot/card-widget";
import TrustBoxProductWidget from "components/trustpilot/product-widget";

const Test = () => {
  return (
    <div>
      <h1>Card Trust</h1>
      <TrustBoxCardWidget />
      <h1>Product Trust</h1>
      <TrustBoxProductWidget />
    </div>
  );
};
export default Test;
