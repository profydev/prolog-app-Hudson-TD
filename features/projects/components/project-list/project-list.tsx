import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import { ErrorAlert } from "../../../ui/error/error-alert";
import styles from "./project-list.module.scss";
export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return <ErrorAlert errorData={error} />;
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
