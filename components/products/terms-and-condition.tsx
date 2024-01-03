import React from "react";
import css from "../../styles/terms.module.scss";
import CloseIcon from "icons/CloseIcon";
interface TermsConditionProps {
  onClose: () => void;
}

function TermsCondition({ onClose }: TermsConditionProps) {
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
        <h3>Warranty</h3>

        <p>
          <strong>Beds Sets: </strong> You will receive a full one-year exchange
          guarantee with a full bed set (like for like).
        </p>
        <p>
          <strong> Beds Sets: </strong> Purchased separately come with a 30-day
          exchange warranty.
        </p>
        <p>
          {" "}
          <strong> Mattresses : </strong> Purchased separately come with a
          30-day exchange warranty.
        </p>
        <h3>Refunds, Returns and Exchanges</h3>
        <p>
          <strong>Changing your order</strong> You can make any changes within
          48 hours of placing your order, such as colour, bed size and quantity.
        </p>
        <p>
          <strong>Cancelling your order</strong> If you wish to cancel your
          order, please either call or email us to discuss further.
        </p>
        <p>
          To complete your return, we require proof of purchase. This could be
          an order confirmation or invoice.
        </p>
        <p>
          Refunds take 5-7 working days to the original method of payment,
          depending on your bank.
        </p>
        <h3>Returns after delivery</h3>
        <p>You can return your order within 30 days after delivery.</p>
        <p>
          Items can be returned if the item is unused, in its original condition
          and in its original packaging.
        </p>
        <p>
          Items can be returned at your own cost, or we can arrange for
          collection with one of our drivers. The collection is subject to a
          courier charge of £62.
        </p>
        <p>
          Please ensure you use a tracking service if you are returning items at
          your own cost so we can safely receive your returned item. The item
          must clearly contain your name, order number and full address so that
          we can process your return.
        </p>
        <p>
          All returns must be approved by DBZKHAN LTD before any return is
          processed. Once your return is received and inspected, we will send
          you an email to notify you that we have received your returned item.
          You will then receive an email notifying you of the approval or
          rejection of your refund.
        </p>
        <p>
          <strong>What if my item doesn’t fit?</strong> It is your
          responsibility to make sure you carefully check the measurements
          before placing your order. If the item has been delivered and does not
          fit, you are liable for returning the item back or arranging
          collection subject to a courier charge of £62 in its original
          condition and in its original packaging, for a refund to be processed.
        </p>
        <p>
          <strong>Faulty products</strong> Our products are handled with care
          and usually arrive in good condition. If your item is faulty this must
          be reported within 24-48 hours of receiving your delivery.
        </p>
        <p>
          Reported faults will result in a dispute claim which require
          photographic evidence for our friendly after sales team to resolve the
          issue.
        </p>
        <h3>Refunds</h3>
        <p>
          If your return is approved, a refund will be processed, and a credit
          will automatically be applied to your original method of payment
          within 5-7 working days depending on your bank. We want you to be
          satisfied with your purchase. If you aren’t, we’d like to help. Please
          contact us on info@bedDivans.co.uk
        </p>
        <h3>Exchanges</h3>
        <p>
          If for any reason you are not satisfied with your bed purchase
          regarding manufacturing purposes, then we are more than happy to offer
          an exchange.
        </p>
        <h3>Klarna Payment Privacy Policy</h3>
        <p>
          If you wish to use Klarna’s payment methods to pay for your goods,
          then your personal data will be passed on to Klarna.
        </p>
        <p>
          This is for Klarna to assess your individual eligibility and criteria
          subject to a credit check. This process enables Klarna to establish
          what would be a suitable payment method to suit your individual needs.
        </p>
        <p>
          Therefore, please be aware, this is all subject to your personal data
          transferred to Klarna in line with Klarna’s own privacy notice.
        </p>
      </div>
      {/* <h4>Warranty</h4> */}
      {/* <p>
            Garden Furniture The colour of wooden
          furniture is affected eventually by UV rays and is not covered by our
          guarantee. Therefore, you the customer are responsible to maintain and
          treat the equipment. </p><p>Please note that shaking (small cracks) in wood
          outdoor furniture is normal and is not a structural fault.</p><p> All other
          products e.g., Cushions are guaranteed for 2 years against any
          structural fault. This excludes colour change.</p><p> All our guarantees do
          not cover any of our garden products used in a contract environment
          (non-domestic), i.e., in hotels, bars, hostelries, inns, taverns,
          restaurants, holiday lets, rented accommodation, campsites etc.</p><p> After
          28 days from purchase, it is the responsibility (this includes both
          cost and effort) of the customer to return and collect any goods to
          the address below in the event of a guarantee claim. In the event of
          any claim, the customer must provide proof of purchase in the form of
          the original sales invoice or the payment method.</p><p> Bed Divans Unit 7,
          Stag Industrial Estate, Bilston, WV14 7HZ.</p><p> Our guarantees are only
          applicable to private individuals who purchased goods for domestic
          use. Where the goods are used other than for domestic purposes,
          including without limitation, communal use and/or commercial use, our
          guarantees will not apply. Our guarantees shall not apply to persons
          acquiring goods second hand or at auction.</p><p> Our 2-year structural
          guarantee does not cover the normal wear and tear of furniture or any
          damages that arise due to misuse, negligence, or incorrect assembly.</p>
         <p> <strong>Beds / Mattresses</strong> You will receive a full 1 Year Exchange Guarantee
          with a full bed set (like for like).</p><p> Bed bases or mattresses purchased
          separately come with a 30-day exchange warranty. </p><h4>Refunds, Returns and
          Exchanges</h4>
          
          <p> <strong>Changing your order</strong> You can make any changes within 48 hours
          of placing your order, such as colour, bed size and quantity.</p><p>
          Cancelling your order if you wish to cancel your order please either
          call or email us and we can get this done for you.</p><p> To complete your
          return, we require proof of purchase. This could be an order
          confirmation or invoice. Refunds take 5-7 working days to the original
          method of payment, depending on your bank. </p>
          <h4>Returns after delivery</h4>
          <p> You
          can return your order within 14 days after delivery. </p><p>Items can be
          returned at your own cost or we can arrange for collection with one of
          our drivers. The collection is subject to a courier charge of £62 if
          the item is unused, in its original condition and in its original
          packaging.</p><p> Please ensure you use a tracking service if you are
          returning items at your own cost so we can safely receive your
          returned item. The item must clearly contain your name, order number
          and full address so that we can process your return. </p><p>All returns must
          be approved by DBZKHAN LTD before any return is processed. Once your
          return is received and inspected, we will send you an email to notify
          you that we have received your returned item. You will then receive an
          email notifying you of the approval or rejection of your refund.</p><p><strong> What
          if my item doesn’t fit?</strong> It is your responsibility to make sure you
          carefully check the measurements before placing your order. If the
          item has been delivered and does not fit, you are liable for returning
          the item back or arranging collection subject to a courier charge of
          £62 in its original condition and in its original packaging, for a
          refund to be processed.</p><p><strong> Faulty products</strong> Our products are handled with
          care and usually arrive in good condition. If your item is faulty this
          must be reported within 24-48 hours of receiving your delivery.</p><p>
          Reported faults will result in a dispute claim which require
          photographic evidence for our friendly after sales team to resolve the
          issue. </p>
          <h4>Refunds</h4>
          <p> If your return is approved, a refund will be processed,
          and a credit will automatically be applied to your original method of
          payment within 5-7 working days depending on your bank.</p><p> We want you to
          be satisfied with your purchase. If you aren’t, we’d like to help.
          Please contact us on info@bedDivans.co.uk or via our live chat
          service.</p>
          <h4>Exchanges</h4><p>  If for any reason you are not satisfied with your
          bed purchase in regard to manufacturing purposes, then we are more
          than happy to offer an exchange.</p>
          <h4>Klarna Payment Privacy Policy</h4>
          <p>  If you
          wish to use Klarna’s payment methods to pay for your goods, then your
          personal data will be passed on to Klarna. This is for Klarna to
          assess your individual eligibility and criteria subject to a credit
          check. This process enables Klarna to establish what would be a
          suitable payment method to suit your individual needs. Therefore,
          please be aware, this is all subject to your personal data transferred
          to Klarna in line with Klarna’s own privacy notice.
        </p> */}
    </div>
  );
}

export default TermsCondition;
