import { ProjectCard } from "@/components/project";
import { getScopedI18n } from "@/locales/server";
import { projects } from "../../../data/project-data";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { TransitionLink } from "../../utils/transition-link";
import { Button } from "@/components/ui";
import styles from "./projects.module.css";

export async function Projects() {
  const scopedT = await getScopedI18n("frontPage.projects");
  return (
    <section id="projects" className={styles.root}>
      <div className={styles.content}>
        <h2 className={styles.title}>{scopedT("title")}</h2>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            {projects.slice(0, 4).map((proj, index) => (
              <ProjectCard
                key={index}
                variant={proj.variant}
                imageSrc={proj.imageSrc}
                title={scopedT(proj.titleKey)}
                text={scopedT(proj.textKey)}
                link={proj.link}
                bgColor={proj.bgColor}
                tags={proj.tags}
                className={index > 2 ? styles.hide : undefined}
              />
            ))}
            <div className={styles.more}>
              <TransitionLink href="/projects">
                <Button variant="default" className={styles.button}>
                  <span>{scopedT("viewAll")}</span>
                  <ArrowRightIcon
                    size={32}
                    weight="bold"
                    className={styles.arrow}
                  />
                </Button>
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
