import React, { useEffect } from "react";
import PerPageLayout from "layout/perpage";
import TitleHeader from "components/title-header";
import css from "styles/order.module.scss";
import useAppSelector from "store/hooks/useselector";
import { useRouter } from "next/router";
import useAppDispatch from "store/hooks/usedispatch";
import { clearCart } from "store/slices/cart";

function OrderSuccess() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  console.log(router);
  
  const { cartItems } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (router?.query?.orderId) {
      dispatch(clearCart());
    }
  }, [dispatch, router?.query?.orderId]);

  return (
    <React.Fragment>
      <TitleHeader
        background={`https://images.unsplash.com/photo-1589691962030-8d2b7f2a1ffe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
        title="Order Placed Successfully"
      />

      <div className={css["container"]}>
        <div className={css["order-container"]}>
          <div className={css["confirmation"]}>
            <h4>Thank you, your order has beed received</h4>
          </div>
          <div className={css["order-summary"]}>
            <div className={css["order-contents"]}>
              <p>Order number</p>
              <h4>#{router?.query?.orderId}</h4>
            </div>
            <div className={css["order-contents"]}></div>
            <div className={css["order-contents"]}>
              <p>Date</p>
              <h4>{router?.query?.createdAt as any}</h4>
            </div>
            <div className={css["order-contents"]}>
              <p>Payment Method</p>
              <h4>{router?.query?.paymentMethod}</h4>
            </div>
          </div>

          <div className={css["title"]}>
            <h2>Product Summary</h2>
          </div>
          <div className={css["product-summary"]}>
            <div className={css["summary-head"]}>
              <p>Product</p>
              <p>Pay and confirm your order</p>
            </div>

            {cartItems &&
              cartItems?.map((data: any, index: number) => {
                return (
                  <div key={index} className={css["product-details"]}>
                    <ProductListSummary {...data} />
                  </div>
                );
              })}
            <div className={css["summary-list"]}>
              <p>Sub Total (Incl.of taxes)</p>
              <p>£{Number(router?.query?.price)?.toFixed(2)}</p>
            </div>
            {/* <div className={css["summary-list"]}>
              <p>Shipping</p>
              <p>Free</p>
            </div> */}
            <div className={css["summary-list"]}>
              <p>Total</p>
              <p>£{Number(router?.query?.price)?.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OrderSuccess;

OrderSuccess.getLayout = PerPageLayout;

interface ItemsSummaryProps {
  bed: any;
  accessories: any;
}

const ProductListSummary = ({ bed, accessories }: ItemsSummaryProps) => {
  return (
    <React.Fragment>
      <div className={css["details-list"]}>
        <h4>{bed.name}</h4>
        <ul>
          <li>
            <span>Bed Size </span>
            <span>:</span>
            <span>{bed?.size}</span>
          </li>
          <li>
            <span>Bed Color </span>
            <span>:</span>
            <span>{accessories?.color?.name?.label}</span>
          </li>
          <li>
            <span>Storage </span>
            <span>:</span>
            <span>{accessories?.storage?.name?.label}</span>
          </li>
          <li>
            <span>Headboard </span>
            <span>:</span>
            <span>{accessories?.headboard?.name?.label}</span>
          </li>
          <li>
            <span>Feet </span>
            <span>:</span>
            <span>{accessories?.feet?.name?.label}</span>
          </li>
          <li>
            <span>Mattressess </span>
            <span>:</span>
            <span>{accessories?.mattress?.name?.label}</span>
          </li>
        </ul>
      </div>
      <div className={css["price"]}>£{bed?.price?.toFixed(2)}</div>
    </React.Fragment>
  );
};
