import React from "react";
import { SVGICONPROPS } from "typings/icon";

const ArrowLeft = (props: SVGICONPROPS) => {
  const { color = "currentColor", size = "18px" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      fill={color}
      height={size}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
    </svg>
  );
};
export default ArrowLeft;