/* eslint-disable @next/next/no-img-element */
import DeleteIcon from "icons/delete";
import Image from "next/image";
import css from "styles/element.module.scss";
import { InputProps } from "typings/ui";

const Input = ({
  label,
  onDelete,
  deletable,
  type,
  imageUrl,
  error,
  ...rest
}: InputProps) => {
  return (
    <div className={css.input}>
      <label>{label}</label>
      <div className={css.field}>
        {type === "file" && imageUrl && (
          <div className={css.fileupload}>
            <Image width={1000} height={700} src={imageUrl || "/image.png"} alt="i-image" />
          </div>
        )}
        <input
          type={type}
          accept={
            type === "image" ? "image/png, image/jpg, image/jpeg" : undefined
          }
          {...rest}
        />
        {deletable ? (
          <i title="Delete" onClick={onDelete}>
            <DeleteIcon height={18} width={18} />
          </i>
        ) : null}
      </div>
      {error ? <span className={css.error}>{error}</span> : null}
    </div>
  );
};

export default Input;
