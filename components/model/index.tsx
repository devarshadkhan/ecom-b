import React from "react";
import css from "./model.module.scss";
import CloseIcon from "icons/CloseIcon";

interface ModelProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  name: string;
  onClose?: () => void;
}

const Model = ({ children, onClose, name, show, ...rest }: ModelProps) => {
  return (
    <React.Fragment>
      {show && (
        <div {...rest} className={css["model-backdrop"]}>
          <div className={css["model-content"]}>
            <div className={css["model-header"]}>
              <p>{name}</p>
              <button onClick={onClose}>
                <CloseIcon height={20} width={20} fill={"#222"} />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Model;
