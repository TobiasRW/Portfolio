import ProjectCard from "@/components/project-card";
import { projects } from "@/data/project-data";
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import styles from "../page.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const scopedT = await getScopedI18n("frontPage.projects");
  return (
    <>
      <div className={styles.projects}>
        <h2 className={styles["projects-title"]}>{scopedT("titleAll")}</h2>
        <div className={styles["projects-grid"]}>
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              variant={proj.variant}
              imageSrc={proj.imageSrc}
              title={scopedT(proj.titleKey)}
              text={scopedT(proj.textKey)}
              link={proj.link}
              bgColor={proj.bgColor}
              tags={proj.tags}
            />
          ))}
        </div>
      </div>
    </>
  );
}
