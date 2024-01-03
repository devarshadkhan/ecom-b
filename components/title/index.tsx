import React from "react";
import css from "styles/title.module.scss";

interface SectionTitleProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description?: string;
}

const Title = ({ description, title, ...rest }: SectionTitleProps) => {
  return (
    <div className={css.container} {...rest}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
export default Title;
