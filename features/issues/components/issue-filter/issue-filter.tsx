import { Select, Input, Button, ButtonSize, ButtonColor } from "@features/ui";
import styles from "./issue-filter.module.scss";
import { useFilters } from "./use-filters";

export function IssueFilter() {
  const { handleFilters } = useFilters();
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterContent}>
        <div className={styles.leftSideContent}>
          <Button
            size={ButtonSize.lg}
            color={ButtonColor.primary}
            onClick={() => null}
          >
            Resolve selected issues
          </Button>
        </div>
        <div className={styles.rightSideContent}>
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
