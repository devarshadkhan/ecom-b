import { SVGICONPROPS } from "typings/icon";

const BagOutline = (props: SVGICONPROPS) => {
  const { color = "currentColor", size = "18px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      stroke={color}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        fillRule="evenodd"
        d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        fillRule="evenodd"
        d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32"
      />
    </svg>
  );
};

export default BagOutline;
