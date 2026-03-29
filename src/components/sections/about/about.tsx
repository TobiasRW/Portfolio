import { getScopedI18n } from "@/locales/server";
import styles from "./about.module.css";

export async function About() {
  const scopedT = await getScopedI18n("frontPage.about");
  return (
    <section id="about" className={styles.root}>
      <div className={styles.content}>
        <h2 className={styles.title}>{scopedT("title")}</h2>
        <p className={styles.paragraph}>
          {scopedT("text.intro")}
          <br />
          <br />
          {scopedT("text.paragraph1")}
          <br />
          <br />
          {scopedT("text.paragraph2")}
          <br />
          <br />
          {scopedT("text.paragraph3")}
          <br />
          <br />
          {scopedT("text.paragraph4")}
        </p>
        <div className={styles.links}>
          <a
            href="mailto:tobiasrw98@gmail.com"
            target="_blank"
            className={styles.link}
          >
            tobiasrw98@gmail.com
          </a>
          <a href="tel:30305154" target="_blank" className={styles.link}>
            Tlf: 30 30 51 54
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-wolmar-87991224a/"
            target="_blank"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
