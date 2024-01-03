import React from "react";
import css from "../../styles/terms.module.scss";
import CloseIcon from "icons/CloseIcon";
interface DeliveryPolicyProps {
  onClose: () => void;
}

function DeliveryPolicy({ onClose }: DeliveryPolicyProps) {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "1000px",
        margin: "0 auto",
        height: "calc(100vh - 100px)",
      }}
    >
      <div className={css["cross-btn"]} onClick={onClose}>
        <a>
          <CloseIcon size={30} color="#fff" />
        </a>
      </div>
      <div className={css["size-parent"]}>
        <h4>Delivery</h4>
        <p>Once you have successfully placed your order, you’ll receive an order confirmation via email. Please ensure you provide the correct contact number for the couriers to contact you regarding delivery</p>
        <p>We deliver to UK mainland. Off shore deliveries can take 7-14 days which may be an additional charge depending on the postcode.</p>
        <p>Standard Free UK Delivery is within working 2-5 working days. </p>
        <p>If you wish to cancel your order please provide us with 48 hours notice</p>
        <h4>Shipping</h4>
        <p>Orders are dispatched within 24-48 hours upon receiving the order. </p>
        <p>We provide the very best two-man home delivery in the UK provided by our couriers BJS.</p>
        <h4>Customers can expect:</h4>
        <ul style={{"listStyleType":"disc"}}>
          <li>
          Call to arrange a suitable delivery time
          </li>
          <li>
          Three hour delivery window
          </li>
          <li>Pre-delivery courtesy call prior to arrival</li>
          <li>Delivering to a room of choice, carefully, safely and without damage or fuss.</li>
          <li>Smiles on their doorstep, whatever the weather</li>
        </ul>
      </div>
    </div>
  );
}

export default DeliveryPolicy;
