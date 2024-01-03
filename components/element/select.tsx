import DeleteIcon from "icons/delete";
import css from "styles/element.module.scss";
import { SelectProps } from "typings/ui";

const Select = ({
  options,
  label,
  onDelete,
  deletable,
  error,

  ...rest
}: SelectProps) => {
  return (
    <div className={css.input}>
      {label && <label>{label}</label>}
      <div className={css.field}>
        <select {...rest}>
          {options?.map((d, i) => (
            <option key={i} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
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

export default Select;
