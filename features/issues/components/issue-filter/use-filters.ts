import { useRouter } from "next/router";
import { IssueFilters } from "@api/issues.types";

export const useFilters = () => {
  const router = useRouter();

  const filters = {
    status: router.query.status,
    level: router.query.level,
    project: router.query.project,
  } as IssueFilters;

  const handleFilters = (newFilters: IssueFilters) => {
    const query = { ...router.query, ...newFilters };
    router.push({ query });
  };

  const clearFilters = () => {
    const emptyFilters = { status: "", level: "", project: "" };
    router.push({ query: emptyFilters });
  };

  return { filters, handleFilters, clearFilters };
};
