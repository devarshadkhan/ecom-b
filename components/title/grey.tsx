import React from "react";
import css from "styles/title.module.scss";
import merge from "utils/merge";

interface SectionTitleProps {
  title: string;
  description?: string;
}

const TitleWIthBackground = ({ description, title }: SectionTitleProps) => {
  return (
    <div className={merge(css.container, css.background)}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      {/* {description && <p>{description}</p>} */}
    </div>
  );
};
export default TitleWIthBackground;
