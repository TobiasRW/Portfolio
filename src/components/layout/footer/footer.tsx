import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="https://github.com/TobiasRW" target="_blank" className="">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-wolmar-87991224a/"
            target="_blank"
            className=""
          >
            LinkedIn
          </a>
          <a href="mailto:tobiasrw98@gmail.com" className="">
            Email
          </a>
        </div>
        <div className="">
          <p>Tobias Wolmar</p>
        </div>
      </div>
    </footer>
  );
}
