import ProjectCard from "./project-card";
import { getScopedI18n } from "@/locales/server";
import { projects } from "../data/project-data";

export default async function Projects() {
  const scopedT = await getScopedI18n("frontPage.projects");
  return (
    <section id="projects">
      <div className="flex flex-col gap-8 pb-20 pt-10 md:pb-24 md:pt-14 lg:gap-14 lg:pb-28 xl:pb-32 xl:pt-20">
        <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
          {scopedT("title")}
        </h2>
        <div className="grid gap-8 md:mx-auto md:w-10/12 md:grid-cols-2 lg:gap-y-20 xl:w-11/12 xl:grid-cols-3 xl:gap-y-14">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              variant={proj.variant}
              imageSrc={proj.imageSrc}
              title={scopedT(proj.titleKey)}
              text={scopedT(proj.textKey)}
              link={proj.link}
              bgColor={proj.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
