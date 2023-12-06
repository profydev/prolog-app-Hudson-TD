import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

type CheckboxProps = {
  children: React.ReactNode;
  size?: CheckboxSize;
  onChange: () => void;
  isDisabled?: boolean;
};

export function Checkbox({
  children,
  size = CheckboxSize.sm,
  onChange,
  isDisabled = false,
}: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={classNames(styles[size])}
      onChange={onChange}
      disabled={isDisabled}
    >
      {children}
    </input>
  );
}

export default Checkbox;
