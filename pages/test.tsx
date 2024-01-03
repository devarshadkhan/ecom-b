import React, { useEffect } from "react";
import SnapFinanceButton from "components/payments/snap-finance-component";
import PerPageLayout from "layout/perpage";

const Test = () => {

  useEffect(() => {
   
  }, [])
  
  return (
    <div>
      <h1>Hello</h1>
      <SnapFinanceButton
        transaction={transaction}
        onApplicationId={(id) => console.log("onApplicationId", id)}
      />
    </div>
  );
};
export default Test;
Test.getLayout = PerPageLayout;

const transaction = {
  invoiceNumber: 51174155,
  deliveryDate: "2023-11-05",
  shippingCost: 50,
  customer: {
    firstName: "John",
    lastName: "Smith",
    email: "johnsmith@snapfinance.co.uk",
    mobileNumber: "07712345678",
    streetAddress: "The Quays",
    city: "Manchester",
    postcode: "M50 3BE",
    houseName: "",
    houseNumber: "7",
    unit: "Flat 165",
  },
  products: [
    {
      quantity: 2,
      productId: "iphone",
      price: 500.1,
      description: "Apple iPhone 11 Pro 256GB",
    },
  ],
};
