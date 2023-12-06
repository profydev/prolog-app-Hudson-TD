import { useState } from "react";
import styles from "./input.module.scss";

type InputProps = {
  type: string;
  label: string;
  iconPath?: string;
  iconAlt?: string;
  hint?: string;
  isRequired?: boolean;
  pattern?: string;
  errorMsg?: string;
};

export function Input({
  type = "text",
  label,
  iconPath,
  iconAlt,
  hint,
  isRequired,
  errorMsg,
}: InputProps) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconPath} alt={iconAlt} />
        <input
          id={label}
          type={type}
          required={isRequired}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
      </div>
      <p className={styles.test}>{hint}</p>
      <p>{errorMsg}</p>
    </div>
  );
}
