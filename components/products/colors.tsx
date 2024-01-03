/* eslint-disable @next/next/no-img-element */
import React from "react";
import css from "styles/product/page.module.scss";

interface ColorsProps {
  colorName: string;
  colorArray: any[];
  activeColor: boolean;
  onPickColor: (value: string) => void;
}
const Colors = ({
  colorName,
  colorArray,
  onPickColor,
  activeColor,
}: ColorsProps) => {
  // console.log(activeColor);
  return (
    <div>
      <div className={css["colors"]}>
        <label>
          <span style={{ color: "red" }}>*</span>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            Choose Colour
          </span>
          {colorName && (
            <span className={css["active-color"]}>{colorName}</span>
          )}
        </label>
        <div className={css["color-options"]}>
          <ul>
            {colorArray?.map((data: any, index: number) => {
              const readyForActive = {
                image: data.image,
                name: data.name.label,
              };

              // console.log(data.name.label);
              return (
                <li
                  key={index}
                  onClick={() => onPickColor(data) }
                  style={{
                    overflow: "hidden",
                    borderRadius: "4px",
                    transition: `all 200ms ease-in`,
                    outline: `3px solid ${
                      data.name.label === activeColor
                        ? "#222178"
                        : "transparent"
                    }`,
                  }}
                >
                  <img
                    src={data?.name?.image}
                    alt={data?.name?.label}
                    height={40}
                    width={40}
                  ></img>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Colors;
