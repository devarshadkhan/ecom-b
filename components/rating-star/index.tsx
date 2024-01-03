import React from "react";

interface CSSStyleProps extends React.CSSProperties {
  span?: React.CSSProperties;
  svg?: React.CSSProperties;
}

interface StarRatingProps {
  count: number;
  value: number;
  inactiveColor: string;
  size: number;
  activeColor: string;
  onChange: (rating: number) => void;
  style?: CSSStyleProps;
}

function StarRating({
  count,
  value,
  inactiveColor = "#1ab47b",
  activeColor = "#1ab47b",
  onChange,
  style,
  size,
}: StarRatingProps) {
  const handleChange = React.useCallback(
    (value: number) => {
      if (onChange) {
        onChange(value + 1);
      }
    },
    [onChange]
  );
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: ".5rem",
      }}
    >
      {Array.from({ length: count }).map((_s, index) => {
        let color = inactiveColor;
        if (index < value) {
          color = activeColor;
        }
        const activeIndex = index < value;
        return (
          <span
            key={index}
            onClick={() => handleChange(index)}
            style={style?.span}
          >
            <SVGWraper
              height={size}
              width={size}
              fill={activeIndex ? activeColor : inactiveColor}
            >
              {activeIndex ? star.fill : star.outline}
            </SVGWraper>
          </span>
        );
      })}
      {/* {value} */}
    </div>
  );
}

export default StarRating;

const SVGWraper = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {props.children}
    </svg>
  );
};

const star = {
  fill: (
    <React.Fragment>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
    </React.Fragment>
  ),
  outline: (
    <React.Fragment>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
    </React.Fragment>
  ),
};
