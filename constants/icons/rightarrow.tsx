import React from "react";
import { SVGICONPROPS } from "typings/icon";

const RightIcon = ({ size, color, ...rest }: SVGICONPROPS) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M16 12l-6 6V6z" />
    </svg>
  );
};

export default RightIcon;
