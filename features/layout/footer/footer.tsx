import styles from "./footer.module.scss";
import { version } from "../../../package.json";
import Link from "next/link";

export function Footer() {
  const appBuild = version;
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentContainer} id="footerContent">
          <ul className={styles.directory}>
            <Link className={styles.directoryLink} href="#">
              Docs
            </Link>
            <Link className={styles.directoryLink} href="#">
              API
            </Link>
            <Link className={styles.directoryLink} href="#">
              Help
            </Link>
            <Link className={styles.directoryLink} href="#">
              Community
            </Link>
          </ul>
          <div className={styles.logoContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/logo-small.svg" alt="logo" id="footerLogo" />
          </div>
          <div className={styles.versionContainer}>
            <p className={styles.version} id="appBuild">
              Version: {appBuild}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
