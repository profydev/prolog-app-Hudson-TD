import { useState } from "react";
import styles from "./select.module.scss";
import classNames from "classnames";

interface option {
  value: string;
  text: string;
}

type SelectProps = {
  className?: string;
  labelText: string;
  optionsData: option[];
  iconPath?: string;
  iconAlt?: string;
  placeholderText?: string;
  hintText?: string;
  selectError?: boolean;
  errorText?: string;
  isDisabled?: boolean;
  inputIdentifier: string;
  inputHandler: (arg: object) => void;
  handleDisplayText: () => string;
};

export function Select({
  className,
  labelText,
  optionsData = [],
  iconPath = "",
  iconAlt = "",
  placeholderText,
  hintText,
  selectError,
  errorText,
  isDisabled = false,
  inputIdentifier,
  inputHandler,
  handleDisplayText,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const displayText = handleDisplayText();

  function handleSelect(selection: option) {
    inputHandler({ [inputIdentifier]: selection.value });
    setIsOpen(false);
    setIsFocused(false);
  }

  function handleSelectAccessiblity(
    event: React.KeyboardEvent,
    selection: option,
  ) {
    if (event.key === "Enter") {
      handleSelect(selection);
    }

    if (event.key === "Escape") {
      setIsOpen(false);
      setIsFocused(false);
    }
  }
  return (
    <div className={classNames(styles.parentContainer, className)}>
      <div className={styles.selectContainer}>
        <label className={styles.label} htmlFor={labelText}>
          {labelText}
        </label>
        <div
          className={classNames(
            styles.contentContainer,
            isDisabled && styles.disabled,
            isFocused && styles.focused,
            selectError && styles.error,
          )}
        >
          <div className={styles.selectContent}>
            <div className={styles.selectContentLeft}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={classNames(
                  styles.selectIcon,
                  iconPath === "" && styles.remove,
                )}
                src={iconPath}
                alt={iconAlt}
              />
              <div
                id={labelText}
                className={classNames(
                  styles.selectField,
                  selectError && styles.error,
                  displayText !== "" && styles.selected,
                )}
                placeholder={placeholderText}
              >
                {displayText !== "" ? displayText : placeholderText}
              </div>
              <button
                type="button"
                className={styles.button}
                disabled={isDisabled}
                tabIndex={0}
                // Required for custom styling to display correctly
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onClick={() => setIsOpen(!isOpen)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    isOpen
                      ? "../icons/chevron-up.svg"
                      : "../icons/chevron-down.svg"
                  }
                  alt={isOpen ? "Collapse options" : "Show options"}
                />
              </button>
            </div>
          </div>
        </div>
        <p
          className={classNames(
            styles.message,
            selectError ? styles.error : styles.hint,
            isOpen && styles.hidden,
            // Covers edge case of options being open when disabled = true is invoked
            isOpen && isDisabled && styles.visible,
          )}
        >
          {selectError ? errorText : hintText}
        </p>
      </div>
      <div
        className={classNames(
          styles.optionsContainer,
          isDisabled && styles.hidden,
        )}
      >
        {isOpen && (
          <ul
            className={classNames(styles.optionsList)}
            // Improved user experience when optionsList is no longer in focus
            onMouseLeave={() => setTimeout(() => setIsOpen(false), 500)}
          >
            {optionsData.map((option) => (
              <li
                className={classNames(
                  styles.option,
                  displayText === option.text ? styles.selected : null,
                )}
                // Organic tabbing for options list
                tabIndex={0}
                key={option.value}
                data-value={option.value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onClick={() => {
                  handleSelect(option);
                }}
                onKeyDown={(event) => handleSelectAccessiblity(event, option)}
              >
                {option.text}
                <span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={displayText === option.text ? "" : styles.hidden}
                    src={"../icons/checkmark-primary.svg"}
                    alt={"Selected option"}
                  />
                </span>
              </li>
            ))}
            <li
              className={classNames(classNames(styles.option))}
              onClick={() => {
                inputHandler({ [inputIdentifier]: null });
                setIsOpen(false);
              }}
            >
              Clear
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
