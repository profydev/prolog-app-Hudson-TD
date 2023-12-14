import { Select, Input, Button, ButtonSize, ButtonColor } from "@features/ui";
import styles from "./issue-filter.module.scss";

export function IssueFilter() {
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
              { value: "", text: "Unresolved" },
              { value: "", text: "Resolved" },
            ]}
            placeholderText="Status"
          />
          <Select
            className={styles.selectEl}
            labelText=""
            optionsData={[
              { value: "", text: "Error" },
              { value: "", text: "Warning" },
              { value: "", text: "Info" },
            ]}
            placeholderText="Level"
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
