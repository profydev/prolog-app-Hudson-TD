import capitalize from "lodash/capitalize";
import {
  Badge,
  BadgeColor,
  BadgeSize,
  Checkbox,
  CheckboxSize,
} from "@features/ui";
import { ProjectLanguage } from "@api/projects.types";
import { IssueLevel } from "@api/issues.types";
import type { Issue } from "@api/issues.types";
import styles from "./issue-row.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";

type IssueRowProps = {
  projectLanguage: ProjectLanguage;
  issue: Issue;
};

const levelColors = {
  [IssueLevel.info]: BadgeColor.success,
  [IssueLevel.warning]: BadgeColor.warning,
  [IssueLevel.error]: BadgeColor.error,
};

export function IssueRow({ projectLanguage, issue }: IssueRowProps) {
  const { name, message, stack, level, numEvents, numUsers } = issue;
  const firstLineOfStackTrace = stack.split("\n")[1];
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleViewportUpdate = () => {
      const newViewport = window.innerWidth;
      setViewportWidth(newViewport);
    };
    // Set initial viewport width
    handleViewportUpdate();
    window.addEventListener("resize", handleViewportUpdate);
    // Cleanup eventlistener on unmount
    return () => window.removeEventListener("resize", handleViewportUpdate);
  });

  return (
    <div className={styles.row}>
      <div className={styles.issueCell}>
        <Checkbox size={CheckboxSize.md} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.languageIcon}
          src={`/icons/${projectLanguage}.svg`}
          alt={projectLanguage}
        />
        <div className={styles.issueDetails}>
          <div>
            <span className={styles.errorType}>{name}:&nbsp;</span>
            {message}
          </div>
          <div className={styles.stackTrace}>{firstLineOfStackTrace}</div>
        </div>
      </div>
      <div className={styles.chart}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            viewportWidth >= 1024
              ? `/icons/issue-chart-desktop.svg`
              : `/icons/issue-chart-mobile.svg`
          }
          alt="chart"
        />
      </div>
      {/* If mobile viewport apply wrapping div to avoid flex/table display clashing*/}
      {viewportWidth >= 1024 ? (
        <>
          <div className={styles.metricCell}>
            <div className={classNames(styles.cellText, styles.cellHeader)}>
              Status
            </div>
            <Badge color={levelColors[level]} size={BadgeSize.sm}>
              {capitalize(level)}
            </Badge>
          </div>
          <div className={styles.metricCell}>
            <div className={classNames(styles.cellText, styles.cellHeader)}>
              Events
            </div>
            <div className={styles.cellText}>{numEvents}</div>
          </div>
          <div className={styles.metricCell}>
            <div className={classNames(styles.cellText, styles.cellHeader)}>
              Users
            </div>
            <div className={styles.cellText}>{numUsers}</div>
          </div>
        </>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.metricCell}>
            <div className={classNames(styles.cellText, styles.cellHeader)}>
              Status
            </div>
            <Badge color={levelColors[level]} size={BadgeSize.sm}>
              {capitalize(level)}
            </Badge>
          </div>
          <div className={styles.metricCell}>
            <div className={classNames(styles.cellText, styles.cellHeader)}>
              Events
            </div>
            <div className={styles.cellText}>{numEvents}</div>
          </div>
          <div className={styles.metricCell}>
            <div className={classNames(styles.cellText, styles.cellHeader)}>
              Users
            </div>
            <div className={styles.cellText}>{numUsers}</div>
          </div>
        </div>
      )}
    </div>
  );
}
