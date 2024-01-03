import React from "react";
import css from "./coupon.module.scss";
import { useGetCouponById } from "network-requests/mutations";
import memoize from "constants/memoize";

interface CouponTypes {
  max: number;
  min: number;
  label: string;
  percent: number;
  description: string;
}
interface ApplyCouponProps {
  active?: boolean;
  cartTotal: number;
  couponList: CouponTypes[];
  onApply?: (value: CouponTypes) => void;
}

interface CouponListProps {
  label: string;
  active: boolean;
  disable: boolean;

  description: string;
  onApply?: () => void;
}

const ApplyCoupon = ({ couponList, onApply, cartTotal }: ApplyCouponProps) => {
  const { mutate } = useGetCouponById();

  const applicableRef = React.useRef(false);
  const [selectedCoupon, setSelectedCoupon] = React.useState<
    Partial<CouponTypes>
  >({});

  const _onApply = React.useCallback(
    (item: CouponTypes) => {
      if (onApply) {
        onApply(item);
      }
      setSelectedCoupon(item);
      if (item.label) {
        mutate(item.label, {
          onSuccess: (data) => {
            console.log({ data });
          },
          onError: (error) => {
            console.log(error);
          },
        });
      }
    },
    [mutate, onApply]
  );

  const inputRef = React.useRef<HTMLInputElement>(null);
  const _onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (applicableRef.current) {
        if (inputRef.current?.value) {
          mutate(inputRef.current?.value, {
            onSuccess: (data) => {
              if (data === null) {
                alert("No coupon found");
              }
              if (data !== null && onApply) {
                onApply(data);
              }
              if (data !== null) {
                setSelectedCoupon(data);
              }
            },
            onError: (error) => {
              console.log(error);
              alert("No coupon found");
            },
          });
        }
      }
    },
    [mutate, onApply]
  );

  return (
    <div className={css["container"]}>
      <h4 className={css["heading"]}>Top Coupon</h4>
      <ul>
        {couponList?.map((item, index) => {
          const applicable = memoize(() => {
            if (item.min) {
              const a = cartTotal > item.min;
              applicableRef.current = a;
              return a;
            }
          });

          return (
            <CouponList
              {...item}
              key={index}
              disable={applicable(undefined)}
              active={JSON.stringify(selectedCoupon) === JSON.stringify(item)}
              onApply={() => _onApply(item)}
            />
          );
        })}
        <li className={css["coupan-input"]}>
          <label>If you have a coupon code, please apply it below.</label>
        </li>
        <li className={css["coupan-input"]}>
          <form onSubmit={_onSubmit} className={css["inputs"]}>
            <input ref={inputRef} placeholder="Coupan Code" type="text" />
            <button
              type="submit"
              disabled={!applicableRef.current}
              style={{
                opacity: !applicableRef.current ? 0.5 : 1,
              }}
            >
              Apply coupon
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default ApplyCoupon;

const CouponList = ({
  label,
  description,
  onApply,
  active,
  disable,
}: CouponListProps) => {
  console.log({ disable });
  return (
    <li style={{ display: "none" }}>
      <div className={css["detail"]}>
        <h5>{label}</h5>
        <p>{description}</p>
      </div>
      <div className={css["apply-button"]}>
        <button
          disabled={!disable}
          className={active ? css["active"] : ""}
          onClick={onApply}
          style={{
            opacity: !disable ? 0.5 : 1,
          }}
        >
          {active ? "Applied" : !disable ? "Not Applicable" : "Apply"}
        </button>
      </div>
    </li>
  );
};
