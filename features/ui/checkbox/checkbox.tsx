import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

type CheckboxProps = {
  value: string;
  size?: CheckboxSize;
  onChange: () => void;
  isDisabled?: boolean;
};

export function Checkbox({
  value,
  size = CheckboxSize.sm,
  onChange,
  isDisabled = false,
}: CheckboxProps) {
  return (
    <div>
      <input
        id={value}
        type="checkbox"
        className={classNames(styles.checkbox, styles[size])}
        onChange={onChange}
        disabled={isDisabled}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
}

export default Checkbox;
