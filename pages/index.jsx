import { useState, useEffect } from "react";
import { Routes } from "@config/routes";
import { Button } from "../features/ui/button/button";
import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames";

const LandingPage = () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileViewport, setMobileViewport] = useState(false);

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
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default LandingPage;
