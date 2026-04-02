import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="https://github.com/TobiasRW" target="_blank">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-wolmar-87991224a/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="mailto:tobiasrw98@gmail.com">Email</a>
        </div>
        <div>
          <p className={styles.name}>Tobias Wolmar</p>
        </div>
      </div>
    </footer>
  );
}
