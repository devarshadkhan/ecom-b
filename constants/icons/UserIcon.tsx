import { SVGICONPROPS } from "typings/icon";

const UserIcon = (props: SVGICONPROPS) => {
  const { color = "currentColor", size = "24px" } = props;
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      height={size}
      stroke={color}
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M344,144c-3.92,52.87-44,96-88,96s-84.15-43.12-88-96c-4-55,35-96,88-96S348,90,344,144Z"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M256,304c-87,0-175.3,48-191.64,138.6C62.39,453.52,68.57,464,80,464H432c11.44,0,17.62-10.48,15.65-21.4C431.3,352,343,304,256,304Z"
        fill="none"
        stroke="undefined"
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
    </svg>
  );
};

export default UserIcon;

// import React from "react";
// import { SVGICONPROPS } from "typings/icon";

// const UserIcon = ({ size, color, ...rest }: SVGICONPROPS) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       width={size}
//       height={size}
//       {...rest}
//     >
//       <path fill="none" d="M0 0h24v24H0z" />
//       <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
//     </svg>
//   );
// };
// export default UserIcon;
