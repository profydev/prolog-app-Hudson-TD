import React from "react";
import classNames from "classnames";
import styles from "./error-alert.module.scss";

type ErrorAlertProps = {
  errorData: Error;
};

export function ErrorAlert({ errorData }: ErrorAlertProps) {
  return (
    <>
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/icons/alert-circle.svg`} alt="alert-circle" />
          <p className={styles.errorText}>{errorData.message}</p>
          <div className={styles.errorButtonContainer}>
            <button
              className={classNames(styles.errorButton, styles.errorText)}
            >
              Try again
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/icons/arrow-right.svg`} alt="arrow-right" />
          </div>
        </div>
      </div>
    </>
  );
}
