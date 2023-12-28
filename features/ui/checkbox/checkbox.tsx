import { useState } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

type CheckboxProps = {
  value?: string;
  size?: CheckboxSize;
  isDisabled?: boolean;
};

export function Checkbox({
  value,
  size = CheckboxSize.sm,
  isDisabled = false,
}: CheckboxProps) {
  const [isChecked, setChecked] = useState(false);
  return (
    <div className={classNames(styles.container, styles[size])}>
      <input
        id={value}
        type="checkbox"
        className={classNames(styles.checkbox, styles[size])}
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
        disabled={isDisabled}
      />
      <label htmlFor={value} className={classNames(styles.label, styles[size])}>
        {value}
      </label>
    </div>
  );
}

export default Checkbox;
