import React from "react";
import { SVGICONPROPS } from "typings/icon";

const MenuIcon = ({ size, color, ...rest }: SVGICONPROPS) => {
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
      <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
    </svg>
  );
};
export default MenuIcon;
