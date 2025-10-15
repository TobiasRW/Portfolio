import ProjectCard from "@/components/project-card";
import { projects } from "@/data/project-data";
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

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
      <div className="pt-20 md:mx-auto md:w-10/12 lg:w-11/12">
        <h2 className="font-heading pb-10 text-center text-2xl font-semibold sm:text-3xl md:text-4xl lg:pb-20 xl:pt-20 xl:text-5xl">
          {scopedT("titleAll")}
        </h2>
        <div className="3xl:grid-cols-4 mx-auto grid max-w-[1920px] gap-8 md:grid-cols-3 lg:gap-y-20 xl:gap-y-14">
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
