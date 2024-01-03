import React from "react";
import AddIcon from "icons/add";
import css from "styles/element.module.scss";
import { ButtonProps } from "typings/ui";

const AddMoreButton = (props: ButtonProps) => {
  return (
    <div className={css.addMore}>
      <button type="button" {...props}>
        <AddIcon fill="#fff" height={18} width={18} /> {props.title}
      </button>
    </div>
  );
};
export default AddMoreButton;
