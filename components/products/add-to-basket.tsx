import dynamic from "next/dynamic";
import React, { useState } from "react";
import css from "styles/product/page.module.scss";

const SizeGuide = dynamic(() => import("components/products/size-guide"));

interface AddToBasketProps {
  onChange: (value: number) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const AddToBasket = ({ onClick, onChange }: AddToBasketProps) => {
  const [count, setCount] = React.useState(1);

  const increaseCount = React.useCallback(() => {
    setCount((i) => i + 1);
    onChange(count + 1);
  }, [count, onChange]);

  const decreaseCount = React.useCallback(() => {
    if (count > 1) {
      setCount((i) => i - 1);
      onChange(count - 1);
    }
  }, [count, onChange]);

  const [sizeGuide, setsizeGuide] = useState(false);

  return (
    <div>
      {sizeGuide && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background: "rgba(0,0,0,0.4)",
          }}
        >
          <SizeGuide onClose={() => setsizeGuide(false)} />
        </div>
      )}
      <div className={css["basket-row"]}>
        <div className={css["basket-count"]}>
          <button onClick={decreaseCount}>-</button>
          <div className={css["input"]}>
            <input
              type={"number"}
              value={count}
              onChange={(e) => {
                onChange(Number(e.target.value));
                setCount(Number(e.target.value));
              }}
            />
          </div>
          <button onClick={increaseCount}>+</button>
          <button className={css["addToBasket"]} onClick={onClick}>
            ADD TO BASKET
          </button>
        </div>
        <button
          className={css["size-guide"]}
          onClick={() => setsizeGuide(true)}
        >
          SIZE GUIDE
        </button>
      </div>
    </div>
  );
};

export default AddToBasket;
