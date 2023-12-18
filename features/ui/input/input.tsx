import { useState } from "react";
import styles from "./input.module.scss";
import classNames from "classnames";

type InputProps = {
  className?: string;
  type: string;
  labelText: string;
  iconPath?: string;
  iconAlt?: string;
  placeholderText?: string;
  hintText?: string;
  inputError?: boolean;
  errorText?: string;
  isDisabled?: boolean;
  inputIdentifier: string;
  inputHandler: (arg: object) => void;
};

export function Input({
  className,
  type = "text",
  labelText = "",
  iconPath = "",
  iconAlt = "",
  placeholderText,
  hintText,
  inputError,
  errorText,
  isDisabled,
  inputIdentifier,
  inputHandler,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={classNames(styles.parentContainer, className)}>
      <label
        className={classNames(styles.label, labelText === "" && styles.remove)}
        htmlFor={labelText}
      >
        {labelText}
      </label>
      <div
        className={classNames(
          styles.contentContainer,
          isDisabled && styles.disabled,
          isFocused && styles.focused,
          inputError && styles.error,
        )}
      >
        <div className={styles.inputContent}>
          <div className={styles.inputContentLeft}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={classNames(
                styles.inputIcon,
                iconPath === "" && styles.remove,
              )}
              src={iconPath}
              alt={iconAlt}
            />
            <input
              id={labelText}
              type={type}
              className={classNames(
                styles.inputField,
                inputError && styles.error,
              )}
              placeholder={placeholderText}
              disabled={isDisabled}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) =>
                inputHandler({ [inputIdentifier]: e.target.value })
              }
            />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={inputError ? styles.alertIcon : styles.hidden}
            src={"../icons/alert-circle.svg"}
            alt="alert circle"
          />
        </div>
      </div>
      <p
        className={classNames(
          styles.message,
          inputError ? styles.error : styles.hint,
        )}
      >
        {inputError ? errorText : hintText}
      </p>
    </div>
  );
}
