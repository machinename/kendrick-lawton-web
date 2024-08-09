import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeading}>
        <p>
        © Copyright 2024 Kendrick Lawton.
        </p>
      </div>
    </footer>
  );
}