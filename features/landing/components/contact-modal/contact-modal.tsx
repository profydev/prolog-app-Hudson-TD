import styles from "./contact-modal.module.scss";

export function ContactModal() {
  return (
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
  );
}
