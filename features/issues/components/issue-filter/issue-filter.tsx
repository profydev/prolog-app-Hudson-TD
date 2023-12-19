import { Select, Input, Button, ButtonSize, ButtonColor } from "@features/ui";
import styles from "./issue-filter.module.scss";
import { useFilters } from "./use-filters";
import { useRouter } from "next/router";

export function IssueFilter() {
  const { handleFilters } = useFilters();
  const router = useRouter();

  function handleStatusText() {
    const displayValue = router.query.status;

    if (displayValue === "open") {
      return "Unresolved";
    } else if (displayValue === "resolved") {
      return "Resolved";
    } else {
      return "";
    }
  }

  function handleLevelText() {
    const displayValue = router.query.level;
    if (displayValue === "error") {
      return "Error";
    } else if (displayValue === "warning") {
      return "Warning";
    } else if (displayValue === "info") {
      return "Info";
    } else {
      return "";
    }
  }
  return (
    <div data-cy="issues-filter-container" className={styles.filterContainer}>
      <div className={styles.filterContent}>
        <div
          data-cy="issues-filter-left-content"
          className={styles.leftSideContent}
        >
          <Button
            size={ButtonSize.lg}
            color={ButtonColor.primary}
            onClick={() => alert("Feature not yet implemented...stay tuned!")}
            className={styles.resolveButton}
          >
            <span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="../icons/checkmark-white.svg"
                alt="Resolve selected issues"
              />
            </span>
            Resolve selected issues
          </Button>
        </div>
        <div
          data-cy="issues-filter-right-content"
          className={styles.rightSideContent}
        >
          <Select
            className={styles.selectEl}
            labelText=""
            optionsData={[
              { value: "open", text: "Unresolved" },
              { value: "resolved", text: "Resolved" },
            ]}
            placeholderText="Status"
            inputIdentifier={"status"}
            inputHandler={handleFilters}
            handleDisplayText={handleStatusText}
          />
          <Select
            className={styles.selectEl}
            labelText=""
            optionsData={[
              { value: "error", text: "Error" },
              { value: "warning", text: "Warning" },
              { value: "info", text: "Info" },
            ]}
            placeholderText="Level"
            inputIdentifier={"level"}
            inputHandler={handleFilters}
            handleDisplayText={handleLevelText}
          />
          <Input
            className={styles.inputEl}
            type="text"
            labelText=""
            iconPath="../icons/search.svg"
            iconAlt="Search"
            placeholderText="Project Name"
            inputIdentifier={"project"}
            inputHandler={handleFilters}
          />
        </div>
      </div>
    </div>
  );
}
