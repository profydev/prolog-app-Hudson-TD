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
              { param: "status", value: "open", text: "Unresolved" },
              { param: "status", value: "resolved", text: "Resolved" },
            ]}
            placeholderText="Status"
            handler={handleFilters}
          />
          <Select
            className={styles.selectEl}
            labelText=""
            optionsData={[
              { param: "level", value: "error", text: "Error" },
              { param: "level", value: "warning", text: "Warning" },
              { param: "level", value: "info", text: "Info" },
              { param: "level", value: "", text: "Remove Filter" },
            ]}
            placeholderText="Level"
            handler={handleFilters}
          />
          <Input
            className={styles.inputEl}
            type="text"
            labelText=""
            iconPath="../icons/search.svg"
            iconAlt="Search"
            placeholderText="Project Name"
          />
        </div>
      </div>
    </div>
  );
}
