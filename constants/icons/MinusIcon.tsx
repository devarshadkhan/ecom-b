import React from "react";
import { SVGICONPROPS } from "typings/icon";

const MinusIcon = ({ size, color, ...rest }: SVGICONPROPS) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={size}
      fill={color}
      height={size}
      {...rest}
    >
      <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};

export default MinusIcon;