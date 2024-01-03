import css from "styles/product/page.module.scss";

interface SelectOptionProps extends React.ComponentPropsWithoutRef<"select"> {
  label: string;
  dataArray: any;
  type?: string;
}

const SelectOption = (props: SelectOptionProps) => {
  const { label, dataArray, type, ...rest } = props;
  return (
    <div className={css["select-size"]}>
      <label>{props.label}</label>
      <div className={css["dropdown"]}>
        <select {...rest}>
          {dataArray?.map((data: any, index: number) => {
            return (
              <option
                key={index}
                value={type === "accessories" ? data?._id : data?.value}
              >
                {type === "accessories" ? data?.name?.label : data?.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectOption;
