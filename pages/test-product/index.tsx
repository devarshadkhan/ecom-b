import { useFetchAllBeds } from "network-requests/queries";
import React from "react";

const TestProduct = () => {
  const { data } = useFetchAllBeds();

  console.log(data);
  return (
    <div>
      <h1>TestProduct</h1>
    </div>
  );
};
export default TestProduct;
