import { useState, useEffect } from "react";
import { Routes } from "@config/routes";
import { Button } from "../features/ui/button/button";
import { ContactModal } from "@features/landing";
import axios from "axios";
import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames";
import { Spinner } from "@features/ui";

const LandingPage = () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileViewport, setMobileViewport] = useState(false);
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleViewportUpdate = () => {
      const newViewport = window.innerWidth;
      setViewportWidth(newViewport);
      viewportWidth < 1024 ? setMobileViewport(true) : setMobileViewport(false);
    };
    // Set initial viewport width
    handleViewportUpdate();
    window.addEventListener("resize", handleViewportUpdate);
    // Cleanup eventlistener on unmount
    return () => window.removeEventListener("resize", handleViewportUpdate);
  });

  useEffect(() => {
    axios
      .get("https://prolog-api.profy.dev/content-page/home")
      .then((response) => {
        setPageData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("error encountered: " + error);
      });
  }, []);

  if (isLoading) {
    return <Spinner />; // Show loading message while data is loading
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/logo-large.svg" alt="Prolog logo" />
          </div>
          <div
            className={classNames(
              styles.navContainer,
              isMobileMenuOpen && styles.show,
            )}
          >
            <Link className={styles.navLink} href={Routes.home}>
              Home
            </Link>
            <Link className={styles.navLink} href={Routes.products}>
              Products
            </Link>
            <Link className={styles.navLink} href={Routes.documentation}>
              Documentation
            </Link>
            <Link className={styles.navLink} href={Routes.pricing}>
              Pricing
            </Link>
          </div>
          <div className={styles.buttonContainer}>
            <>
              <Button
                size="lg"
                color="primary"
                className={classNames(
                  styles.dashboardButton,
                  isMobileViewport && styles.remove,
                )}
                onClick={() => (location.href = Routes.projects)}
              >
                Open Dashboard
              </Button>
              <Button
                className={classNames(
                  styles.dashboardButton,
                  !isMobileViewport && styles.remove,
                )}
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    isMobileMenuOpen
                      ? "/icons/landing-close.svg"
                      : "/icons/landing-menu.svg"
                  }
                  alt={isMobileMenuOpen ? "close menu" : "open menu"}
                  className={styles.menuIcon}
                />
              </Button>
            </>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.heroContainer}>
          <div className={styles.heroContentContainer}>
            <div className={styles.textContent}>
              <h1 className={styles.titleText}>{pageData.sections[0].title}</h1>
              <p className={styles.subtitleText}>
                {pageData.sections[0].subtitle}
              </p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.heroImg}
                src={`https://prolog-api.profy.dev${pageData.sections[0].image.src}`}
                alt="text"
              />
            </div>
          </div>
        </section>
      </main>
      <ContactModal />
    </div>
  );
};

export default LandingPage;
