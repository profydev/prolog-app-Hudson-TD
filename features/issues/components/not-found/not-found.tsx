import { Button, ButtonColor, ButtonSize } from "@features/ui";
import styles from "./not-found.module.scss";
import { useFilters } from "../issue-filter/use-filters";

export function NotFound() {
  const { clearFilters } = useFilters();

  return (
    <div className={styles.parentContainer}>
      <div className={styles.contentContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="../icons/illustration.svg" alt="No Issues found" />
        <h2 className={styles.headingText}>No Issues Found</h2>
        <p className={styles.subText}>
          Either the filters you selected are too restricive or there are no
          issues for your projects.
        </p>
        <Button
          className={styles.clearButton}
          size={ButtonSize.lg}
          color={ButtonColor.primary}
          onClick={() => clearFilters()}
        >
          Clear filters
        </Button>
      </div>
    </div>
  );
}
