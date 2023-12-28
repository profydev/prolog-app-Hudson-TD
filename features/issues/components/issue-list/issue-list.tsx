import { useRouter } from "next/router";
import { ProjectLanguage } from "@api/projects.types";
import { useGetProjects } from "@features/projects";
import { useGetIssues } from "../../api/use-get-issues";
import { IssueRow } from "./issue-row";
import styles from "./issue-list.module.scss";
import { IssueFilter } from "../issue-filter";
import { useFilters } from "../issue-filter/use-filters";
import { NotFound } from "../not-found";
import { Spinner } from "@features/ui";

export function IssueList() {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const { filters } = useFilters();
  const navigateToPage = (newPage: number) =>
    router.push({
      pathname: router.pathname,
      query: { page: newPage, ...filters },
    });

  const issuesPage = useGetIssues(page);
  const projects = useGetProjects();

  if (projects.isLoading || issuesPage.isLoading) {
    return <Spinner />;
  }

  if (projects.isError) {
    console.error(projects.error);
    return <div>Error loading projects: {projects.error.message}</div>;
  }

  if (issuesPage.isError) {
    console.error(issuesPage.error);
    return <div>Error loading issues: {issuesPage.error.message}</div>;
  }

  const projectIdToLanguage = (projects.data || []).reduce(
    (prev, project) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>,
  );
  const { items, meta } = issuesPage.data || {};

  return (
    <>
      <IssueFilter />

      {items.length > 0 ? (
        <>
          <div className={styles.container}>
            <div>
              <div className={styles.table} data-cy="table">
                <div className={styles.headerRow}>
                  <div className={styles.headerCell}>Issue</div>
                  <div className={styles.headerCell}>Graph: 14d</div>
                  <div className={styles.headerCell}>Level</div>
                  <div className={styles.headerCell}>Events</div>
                  <div className={styles.headerCell}>Users</div>
                </div>
                {(items || []).map((issue) => (
                  <IssueRow
                    key={issue.id}
                    issue={issue}
                    projectLanguage={projectIdToLanguage[issue.projectId]}
                  />
                ))}
              </div>
            </div>
            <div className={styles.paginationContainer}>
              <div>
                <button
                  className={styles.paginationButton}
                  onClick={() => navigateToPage(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </button>
                <button
                  className={styles.paginationButton}
                  onClick={() => navigateToPage(page + 1)}
                  disabled={page === meta?.totalPages}
                >
                  Next
                </button>
              </div>
              <div className={styles.pageInfo}>
                Page{" "}
                <span className={styles.pageNumber}>{meta?.currentPage}</span>{" "}
                of <span className={styles.pageNumber}>{meta?.totalPages}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
