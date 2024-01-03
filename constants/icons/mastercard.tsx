import React from "react";
import { SVGICONPROPS } from "typings/icon";

const MasterCard = ({ size, color, ...rest }: SVGICONPROPS) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   width={size}
    //   fill={color}
    //   height={size}
    //   {...rest}
    // >
    //   <path fill="none" d="M0 0h24v24H0z" />
    //   <path d="M12 18.294a7.3 7.3 0 1 1 0-12.588 7.3 7.3 0 1 1 0 12.588zm1.702-1.384a5.3 5.3 0 1 0 0-9.82A7.273 7.273 0 0 1 15.6 12c0 1.89-.719 3.614-1.898 4.91zm-3.404-9.82a5.3 5.3 0 1 0 0 9.82A7.273 7.273 0 0 1 8.4 12c0-1.89.719-3.614 1.898-4.91zM12 8.205A5.284 5.284 0 0 0 10.4 12c0 1.488.613 2.832 1.6 3.795A5.284 5.284 0 0 0 13.6 12 5.284 5.284 0 0 0 12 8.205z" />
    // </svg>
    <svg
      viewBox="0 0 38 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width={size}
      fill={color}
      height={size}
      {...rest}
      aria-labelledby="pi-master"
    >
      <title id="pi-visa">MasterCard</title>

      <path
        opacity=".07"
        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
      ></path>
      <path
        fill="#fff"
        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
      ></path>
      <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
      <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
      <path
        fill="#FF5F00"
        d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
      ></path>
    </svg>
  );
};

export default MasterCard;
