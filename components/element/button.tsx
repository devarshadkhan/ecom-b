import React from "react";
import css from "styles/element.module.scss";

const Button = React.forwardRef(
  (
    props: React.ComponentPropsWithRef<"button">,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <div className={css.button}>
        <button ref={ref} {...props} />
      </div>
    );
  }
);
Button.displayName = "Button";

export default Button;
