import ProjectCard from "./project-card";
import { getScopedI18n } from "@/locales/server";
import { projects } from "../data/project-data";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { TransitionLink } from "./utils/transition-link";
import Button from "./ui/button";

export default async function Projects() {
  const scopedT = await getScopedI18n("frontPage.projects");
  return (
    <section id="projects">
      <div className="flex flex-col gap-8 pt-10 pb-20 md:pt-14 md:pb-24 lg:gap-14 lg:pb-28 xl:pt-20 xl:pb-32">
        <h2 className="font-heading text-center text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
          {scopedT("title")}
        </h2>
        <div className="md:mx-auto md:w-10/12 lg:w-11/12">
          <div className="grid gap-8 md:grid-cols-3 lg:gap-y-20 xl:gap-y-14">
            {projects.slice(0, 3).map((proj, index) => (
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
          <div className="xs:w-[350px] 3xl:mt-14 3xl:justify-center 3xl:pr-0 mx-auto mt-8 flex w-10/12 justify-end md:w-full lg:pr-3 xl:pr-5">
            <TransitionLink href="/projects">
              <Button variant="default" className="group">
                <span className="">{scopedT("viewAll")}</span>
                <ArrowRightIcon
                  size={32}
                  weight="bold"
                  className="transition-transform duration-500 ease-in-out group-hover:translate-x-[2px]"
                />
              </Button>
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
