import ProjectCard from "./project-card";
import { getScopedI18n } from "@/locales/server";

export default async function Projects() {
  const scopedT = await getScopedI18n("frontPage.projects");
  return (
    <section id="projects">
      <div className="flex flex-col gap-8 pb-20 pt-10 md:pb-24 md:pt-14 lg:gap-14 lg:pb-28 xl:pb-32 xl:pt-20">
        <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
          {scopedT("title")}
        </h2>
        <div className="grid gap-8 md:mx-auto md:w-10/12 md:grid-cols-2 lg:gap-y-20 xl:w-11/12 xl:grid-cols-3 xl:gap-y-14">
          <ProjectCard
            variant="default"
            imageSrc="/images/coelm-banner.webp"
            title={scopedT("project.coelm.name")}
            text={scopedT("project.coelm.brief")}
            link="/coelm"
          />

          <ProjectCard
            variant="phone"
            imageSrc="/images/bookapp-banner.webp"
            title={scopedT("project.bookBuddy.name")}
            text={scopedT("project.bookBuddy.brief")}
            link="/book-buddy"
          />
          <ProjectCard
            variant="phone"
            imageSrc="/images/lendr-banner.webp"
            title={scopedT("project.lendr.name")}
            text={scopedT("project.lendr.brief")}
            link="/lendr"
            bgColor="#5BAD86"
          />

          <ProjectCard
            variant="computer"
            imageSrc="/images/glassfill-banner.webp"
            title={scopedT("project.glassFill.name")}
            text={scopedT("project.glassFill.brief")}
            link="/glass-fill"
            bgColor="#6BB3ED"
          />
          {/* <ProjectCard
            variant="phone"
            imageSrc="/images/livescore-banner.webp"
            title={scopedT("project.liveScores.name")}
            text={scopedT("project.liveScores.brief")}
            link="/livescore"
            bgColor="#26437E"
          /> */}
        </div>
      </div>
    </section>
  );
}
