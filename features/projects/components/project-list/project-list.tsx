import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import { ErrorAlert } from "@features/ui";
import { Spinner } from "@features/ui";
import styles from "./project-list.module.scss";
export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.error(error);
    return <ErrorAlert errorData={error} handleRefetch={() => refetch()} />;
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
