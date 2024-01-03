import css from "styles/cart.module.scss";
import Button from "components/buttons/Button";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  disable?: boolean;
  paymentType: string;
  isLoading?: boolean;
}

const PaymentButton = ({ paymentType, disable, isLoading, ...rest }: Props) => {
  switch (paymentType) {
    case "stripe":
      return (
        <Button
          type="submit"
          disabled={disable}
          className={`${css.checkpro} ${disable ? css.disable : ""}`}
          loading={isLoading}
          {...rest}
          style={{}}
        >
          Pay via Checkout
        </Button>
      );
    case "cash-on-delivery":
      return (
        <Button
          type="submit"
          disabled={disable}
          className={`${css.checkpro} ${disable ? css.disable : ""}`}
          {...rest}
        >
          Place Order
        </Button>
      );
    case "clearpay":
      return (
        <Button
          type="submit"
          disabled={disable}
          className={`${css.checkpro} ${disable ? css.disable : ""}`}
          {...rest}
        >
          Pay via ClearPay
        </Button>
      );

    default:
      return null;
  }
};

export default PaymentButton;
