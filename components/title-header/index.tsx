import React from "react";
import css from "./title.module.scss";
import isUrlValid from "utils/is-url-valid";

interface TitleHeaderProps {
  title: string;
  background?: string;
}
const TitleHeader = ({
  title,
  background = "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
}: TitleHeaderProps) => {
  const validUrl = isUrlValid(background);

  const backgroundColor = validUrl
    ? `#000,
url(${background})`
    : background;

  return (
    <div className={`colored ${css["container"]}`}>
      <div className="container">
        <h1>{title}</h1>
      </div>
      <style jsx>
        {`
          .colored {
            background: ${backgroundColor};
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
        `}
      </style>
    </div>
  );
};
export default TitleHeader;
