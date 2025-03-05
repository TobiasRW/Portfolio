import Slider from "@/components/slider";
import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";
import Dots from "@/components/dots";
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import Scene from "@/components/scene";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const scopedT = await getScopedI18n("projectCoelm");

  const accordionItems = [
    {
      content: `${scopedT("accordion.items.item1.content")}`,
      iconLabel: "React",
      website: "https://react.dev/",
    },
    {
      content: `${scopedT("accordion.items.item2.content")}`,
      iconLabel: "Vite",
      website: "https://vitejs.dev/",
    },
    {
      content: `${scopedT("accordion.items.item3.content")}`,
      iconLabel: "Tailwind CSS",
      website: "https://tailwindcss.com/",
    },
    {
      content: `${scopedT("accordion.items.item4.content")}`,
      iconLabel: "Motion",
      website: "https://motion.dev/",
    },
    {
      content: `${scopedT("accordion.items.item5.content")}`,
      iconLabel: "JavaScript",
    },
    {
      content: `${scopedT("accordion.items.item6.content")}`,
      iconLabel: "GSAP",
      website: "https://gsap.com/",
    },
  ];

  return (
    <>
      <div className="w-screen bg-whitebg dark:bg-[#1A1A1A]">
        <div className="relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] bg-background sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:h-[650px] 2xl:rounded-b-[70px] 3xl:h-[750px]">
          <Dots />
          <ProjectBanner
            variant="default"
            imageSrc="/images/coelm-banner.webp"
            title={scopedT("title")}
            website="https://hovedopgave-v2.tobiaswolmar.dk/"
            github="https://github.com/TobiasRW/hovedopgave"
          />
        </div>
      </div>
      <ProjectDescription
        title={scopedT("about.heading")}
        badges={[scopedT("about.badges.badge1")]}
        text={` ${scopedT("about.text.paragraph1")} \n 
        ${scopedT("about.text.paragraph2")} \n
       ${scopedT("about.text.paragraph3")} \n
      ${scopedT("about.text.paragraph4")} `}
        iconLabels={[
          "React",
          "Vite",
          "GSAP",
          "Motion",
          "Tailwind CSS",
          "JavaScript",
        ]}
        highlightWords={["React", "Vite", "GSAP", "Motion", "Tailwind", "CSS"]}
      />
      <div className="mx-auto xl:grid xl:w-10/12 xl:grid-cols-[1.5fr,1fr] xl:gap-14 xl:pb-20 xl:pt-40">
        <Slider
          images={[
            "/images/coelm-pic1.png",
            "/images/coelm-pic2.png",
            "/images/coelm-pic3.png",
            "/images/coelm-pic4.png",
          ]}
        />
        <Accordion
          items={accordionItems}
          title={scopedT("accordion.heading")}
        />
      </div>
      <div className="mx-auto mt-20 w-9/12 sm:w-10/12 md:mt-28">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-start xl:text-5xl">
          3D Model
        </h2>
        <div className="mt-10 overflow-hidden rounded-2xl bg-whitebg dark:bg-[#1a1a1a]">
          <Scene />
        </div>
      </div>
    </>
  );
}
