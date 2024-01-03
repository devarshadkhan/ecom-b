import React from "react";
import { SVGICONPROPS } from "typings/icon";

const ArrowIcon = ({ size, color, ...rest }: SVGICONPROPS) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      fill={color}
      height={size}
      {...rest}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 16l-6-6h12z" />
    </svg>
  );
};

export default ArrowIcon;
