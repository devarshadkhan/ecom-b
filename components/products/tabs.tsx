/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Styles from "styles/product/page.module.scss";
import { useReviewsByBedId } from "network-requests/queries";
import { useCreateReview } from "network-requests/mutations";
import moment from "moment";
import StarRating from "components/rating-star";

interface ContentTabsProps {
  tabsName: string;
}

const TabsArray = [
  {
    name: "Description",
    value: "description",
  },
  {
    name: "Reviews",
    value: "reviews",
  },
  {
    name: "Policy & Warranty",
    value: "warranty",
  },
  {
    name: "Return Policy.",
    value: "returnpolicy",
  },
  {
    name: "Delivery & Shipping Policy",
    value: "deliveyshippingpolicy",
  },
];

type Props = {
  description?: string;
  productId: string;
};
const ContentTabs = ({ productId, description }: Props) => {
  const [tabsName, setTabsName] = React.useState("description");

  const D = React.useMemo(() => {
    switch (tabsName) {
      case "description":
        return <Description description={description} />;
      case "reviews":
        return <Reviews productId={productId && productId} />;
      case "warranty":
        return <PolicyWarranty />;
      case "returnpolicy":
        return <RetunPolicy />;
      case "deliveyshippingpolicy":
        return <DeliveryShippingPolicy />;
      default:
        return null;
    }
  }, [description, productId, tabsName]);

  return (
    <section className={Styles.descriptiontabs}>
      <div className={`${Styles.mwfullesd} container`}>
        <ul className={`${Styles["descriptionul"]}`} id={"tab-title-reviews"}>
          {TabsArray.map((data, index) => (
            <li
              onClick={() => setTabsName(data.value)}
              key={index}
              style={{
                borderColor: data.value === tabsName ? "#252782" : "",
              }}
            >
              {data.name}
            </li>
          ))}
        </ul>
        <div>{D}</div>
      </div>
    </section>
  );
};

export default ContentTabs;

const Description = ({ description }: any) => {
  return (
    <div
      className={Styles.desctab1}
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
    // <div className={Styles.desctab1}>
    //   <h3>Specifications:</h3>
    //   <ul>
    //     <li>Variety of colours available in many different fabrics</li>
    //     <li>Various drawer options available</li>
    //     <li>free castor wheel’s legs are included</li>
    //     <li>3 different Mattress options and 4 headboard options available</li>
    //     <li>Made in the UK</li>
    //     <li>1-year guarantee included on a full set</li>
    //     <li>
    //       Headboard can be fitted on either side of the base for a 2 draw same
    //       side option
    //     </li>
    //     <li>Base height is 12” without the feet</li>
    //   </ul>
    //   <h3>Dimensions:</h3>
    //   <ul>
    //     <li>Single W: 90cm L: 190cm</li>
    //     <li>Small Double W: 120cm L: 190cm</li>
    //     <li>Double W: 135cm L: 190cm</li>
    //     <li>King Size W: 150cm L: 200cm</li>
    //     <li>Super King Size W: 180cm L: 200cm</li>
    //     <p>
    //       <strong>Luxury base</strong> will add a touch of class to any bedroom.
    //       This <strong>Luxury divan bed</strong> will look great with your
    //       bedroom decor.
    //     </p>
    //   </ul>
    //   <h3>
    //     4 Headboards options available as an optional extra, shop our range of
    //     matching headboards here:
    //   </h3>
    //   <ul>
    //     <li>
    //       <strong>Option 1</strong> – 26 Inch Diamond Button Cube Headboard
    //     </li>
    //     <li>
    //       <strong>Option 2</strong> – 26 Inch Matching Button Cube Headboard
    //     </li>
    //     <li>
    //       <strong>Option 3</strong> – 48 Inch Floor Standing Diamond Cube
    //       Headboard
    //     </li>
    //     <li>
    //       <strong>Option 4</strong> – 48 Inch Floor Standing Matching Cube
    //       Headboard
    //     </li>
    //   </ul>
    //   <h3>
    //     3 optional Mattresses available separately, shop our range of mattresses
    //     here:
    //   </h3>
    //   <ul>
    //     <li>
    //       <strong>Option 1</strong> – Orthopedic Mattress -Medium to Soft
    //       Firmness
    //     </li>
    //     <li>
    //       <strong>Option 2</strong> – 1500 pocket tinsel top – Medium Firmness
    //     </li>
    //     <li>
    //       <strong>Option 3</strong> – 1500 Pillow top Mattress – Medium to Hard
    //       Firmness
    //     </li>
    //     <p>
    //       Our luxury base is an upgrade of our classic divan offering a superior
    //       sleep experience. Classic divans are designed to offer great value, in
    //       our essential range of colours and fabrics. The luxury divan is
    //       upholstered in a range of premium fabrics available in neutral
    //       colours.
    //     </p>
    //   </ul>
    //   <h3>Please note:</h3>
    //   <ul>
    //     <li>
    //       For the 2-drawer divan option, the drawers can be positioned on either
    //       the left or the right side of the bed as the headboard can be fixed at
    //       either end of the base.
    //     </li>
    //     <li>In the 4-drawer divan option, the drawers appear either side.</li>
    //     <li>
    //       The divan base comprises of two halves split north to south, with the
    //       exception of the single which is one complete base
    //     </li>
    //   </ul>
    // </div>
  );
};
const Reviews = ({ productId }: { productId: string }) => {
  const [ratings, setRatings] = React.useState(1);
  const [review, setReview] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const { data } = useReviewsByBedId(productId);
  const { mutate } = useCreateReview();

  const onSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutate(
        {
          name,
          email,
          ratings,
          review,
          productId,
        },
        {
          onSuccess: () => {
            setEmail("");
            setName("");
            setReview("");
            setRatings(1);
            alert("Review Uploaded Successfully");
          },
        }
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [email, name, productId, ratings, review]
  );

  const reviewsData = React.useMemo(() => {
    return data?.pages[0]?.reviews || [];
  }, [data?.pages]);

  //   {
  //     "_id": "63ecd2466b9d0381327fe0d3",
  //     "name": "simpleneeraj",
  //     "productId": "63808aec266c4df678072657",
  //     "email": "simpleneeraj@gmail.com",
  //     "review": "Hello World with simple",
  //     "ratings": 1,
  //     "images": [],
  //     "isApproved": true,
  //     "createdAt": "2023-02-15T12:38:30.985Z",
  //     "updatedAt": "2023-02-15T12:41:03.760Z",
  //     "__v": 0
  // }

  console.log({ data });

  return (
    <div>
      <div className={`${Styles.review} container`}>
        <div className="row">
          {reviewsData?.length > 0 && (
            <div className="col-md-6">
              <h1>
                258 REVIEWS FOR GREY LINEN DIVAN BED BASE OR SET HEADBOARD &
                MATTRESS
              </h1>
              <section className={Styles.reviewContent}>
                <div className={Styles.commentList}>
                  {reviewsData.map((item, index) => {
                    console.log(item?.ratings);
                    return (
                      <ul key={index} className={Styles.commentBox}>
                        <div className={Styles.commentWarp}>
                          <li>
                            <h4>
                              {item?.name} –{" "}
                              {moment(item?.createdAt).format(`MMMM DD, YYYY`)}
                            </h4>
                          </li>
                          <li>
                            
                            <StarRating
                              count={5}
                              size={20}
                              inactiveColor={"#aaa"}
                              activeColor={"#0ab67b"}
                              value={item?.ratings}
                            />
                          </li>
                          <hr />
                          <li>
                            <p>{item?.review}</p>
                          </li>
                        </div>
                      </ul>
                    );
                  })}
                </div>
              </section>
            </div>
          )}

          <div className="col-md-6">
            <section className={Styles.reviewForm}>
              <h3>Add a review</h3>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <p>Your rating *</p>
              <span>Star ({ratings})</span>
              <StarRating
                count={5}
                size={40}
                inactiveColor={"#aaa"}
                activeColor={"#0ab67b"}
                value={ratings}
                onChange={(rating) => setRatings(rating)}
              />
              <form className={Styles.form} onSubmit={onSubmit}>
                <label htmlFor="#">Your review *</label>
                <textarea
                  name="review"
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>
                <label htmlFor="#">Name *</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
              {/* <div className={Styles.trust_img}>
                <Image
                  alt="trust"
                  width={210}
                  height={60}
                  src="/Trustpilot__logo_.png"
                />
              </div> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const RetunPolicy = () => {
  return (
    <div className={Styles.desctab3}>
      {/* <p>
                DUE TO COVID-19 WE CANNOT ACCEPT ANY RETURNS OF ITEMS BEING
                OPENED OR USED.
              </p> */}
      <p>
        To complete your return, we require a receipt or proof of purchase. This
        could be through a form of email or invoice. Any returns must be
        approved by DBZKHAN LTD (BedsDivans) before any return is made. Our
        sales teams are always here to help you with any enquirers.
      </p>
      <p>
        Please do not send your purchase back to the manufacturer before a
        booking is made as this will delay the process.
      </p>
      <p>
        Our policy lasts 30 days. If 30 days have gone by since your purchase,
        we can’t offer you a refund or exchange. To be eligible for a return,
        your item must be unused and in the same condition that you received it.
        It must also be in the original packaging. So, you must make sure that
        the base bag is kept in good condition.
      </p>
      <p>
        Please ensure you clearly mark your name, order number, and full
        address, so that we can process your return for you. Use a tracking
        service so we can safely receive your returned item.
      </p>
      <p>
        Any cancellations after 48 hours will incur a £30.00 cancellation fee.
        Please note if any items are no longer wanted within 30 days, and a
        change of mind occurs, you must return the item to us at your own cost
        or pay a collection fee of £62.
      </p>
      <h5>Refunds (if applicable) </h5>
      <p>
        Once your return is received and inspected, we will send you an email to
        notify you that we have received your returned item. We will also notify
        you of the approval or rejection of your refund.
      </p>
      <p>
        If approved, your refund will be processed and a credit will
        automatically be applied to your original method of payment.
      </p>
      <h5>Late or missing refunds (if applicable)</h5>
      <p>
        If you haven’t received a refund yet, first check your bank account
        again, or credit card company. It may take some time before your refund
        is officially processed.
      </p>
      <p>
        If you’ve done all of this and you still have not received your refund
        yet, please contact us on the email link provided on our website.
      </p>
      <h5>Exchanges (if applicable) </h5>
      <p>
        We only replace items if they are defective or damaged. If you need to
        exchange it for the same item, send us an email or call the office to
        arrange the collection.
      </p>
      <p>
        You will be responsible for paying for your own shipping costs for
        returning your item. Shipping costs are non-refundable. If you receive a
        refund, the cost of return shipping will be deducted from your refund.
      </p>
    </div>
  );
};
const DeliveryShippingPolicy = () => {
  return (
    <div className={Styles.desctab3}>
      <h5>Delivery</h5>
      <p>
        Once you have successfully placed your order, you’ll receive an order
        confirmation via email. Please ensure you provide the correct contact
        number for the couriers to contact you regarding delivery
      </p>
      <p>
        We deliver to UK mainland. Off shore deliveries can take 7-14 days which
        may be an additional charge depending on the postcode.
      </p>
      <p>Standard Free UK Delivery is within working 2-5 working days.</p>
      <p>
        If you wish to cancel your order please provide us with 48 hours notice
      </p>
      <h5>Shipping</h5>
      <p>Orders are dispatched within 24-48 hours upon receiving the order. </p>
      <p>
        We provide the very best two-man home delivery in the UK provided by our
        couriers BJS.
      </p>
      <h5>Customers can expect:</h5>
      <ul>
        <li>Call to arrange a suitable delivery time</li>
        <li>Three hour delivery window</li>
        <li>Pre-delivery courtesy call prior to arrival</li>
        <li>
          Delivering to a room of choice, carefully, safely and without damage
          or fuss.
        </li>
        <li>Smiles on their doorstep, whatever the weather</li>
      </ul>
    </div>
  );
};
const PolicyWarranty = () => {
  return (
    <div className={Styles.desctab3}>
      <h5> Warranty</h5>
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
        <strong> Mattresses : </strong> Purchased separately come with a 30-day
        exchange warranty.
      </p>
      <h5>Refunds, Returns and Exchanges</h5>
      <p>
        <strong>Changing your order</strong> You can make any changes within 48
        hours of placing your order, such as colour, bed size and quantity.
      </p>
      <p>
        <strong>Cancelling your order</strong> If you wish to cancel your order,
        please either call or email us to discuss further.
      </p>
      <p>
        To complete your return, we require proof of purchase. This could be an
        order confirmation or invoice.
      </p>
      <p>
        Refunds take 5-7 working days to the original method of payment,
        depending on your bank.
      </p>
      <h5>Refunds</h5>
      <p>
        If your return is approved, a refund will be processed, and a credit
        will automatically be applied to your original method of payment within
        5-7 working days depending on your bank. We want you to be satisfied
        with your purchase. If you aren’t, we’d like to help. Please contact us
        on info@bedDivans.co.uk
      </p>
      <h5>Exchanges</h5>
      <p>
        If for any reason you are not satisfied with your bed purchase regarding
        manufacturing purposes, then we are more than happy to offer an
        exchange.
      </p>
      <h5>Klarna Payment Privacy Policy</h5>
      <p>
        If you wish to use Klarna’s payment methods to pay for your goods, then
        your personal data will be passed on to Klarna.
      </p>
      <p>
        This is for Klarna to assess your individual eligibility and criteria
        subject to a credit check. This process enables Klarna to establish what
        would be a suitable payment method to suit your individual needs.
      </p>
      <p>
        Therefore, please be aware, this is all subject to your personal data
        transferred to Klarna in line with Klarna’s own privacy notice.
      </p>
    </div>
  );
};
