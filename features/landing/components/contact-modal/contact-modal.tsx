import { useState } from "react";
import { Button, ButtonColor, ButtonSize } from "@features/ui";
import styles from "./contact-modal.module.scss";

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  function onModalOpen() {
    console.log("Clicked");
    setIsOpen(true);
  }

  return isOpen ? (
    <div id="overlay" className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <div className={styles.textContent}>
            <div className={styles.contactIcon}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="./icons/contact-modal-mail.svg" alt="Envelope Icon" />
            </div>
            <p className={styles.modalTitle}>Contact Us Via Email</p>
            <p className={styles.modalSubtitle}>
              Any questions? Send us an email at prolog@profy.dev. We usually
              answer within 24 hours.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              className={styles.button}
              size={ButtonSize.lg}
              color={ButtonColor.gray}
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className={styles.button}
              size={ButtonSize.lg}
              color={ButtonColor.primary}
              onClick={() =>
                (location.href =
                  "mailto:support@prolog-app.com?subject=Support%20Request:&body=")
              }
            >
              Open Email App
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <button className={styles.contactButton} onClick={() => onModalOpen()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </>
  );
}
