import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";
import Slider from "@/components/slider";
import Dots from "@/components/dots";
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const scopedT = await getScopedI18n("projectLiveScores");
  const accordionItems = [
    {
      content: `${scopedT("accordion.items.item1.content")}`,
      iconLabel: "React",
      website: "https://react.dev/",
    },
    {
      content: `${scopedT("accordion.items.item2.content")}`,
      iconLabel: "Next.js",
      website: "https://nextjs.org/docs",
    },
    {
      content: `${scopedT("accordion.items.item3.content")}`,
      iconLabel: "Tailwind CSS",
      website: "https://tailwindcss.com/",
    },
    {
      content: `${scopedT("accordion.items.item4.content")}`,
      iconLabel: "TypeScript",
      website: "https://www.typescriptlang.org/",
    },
    {
      content: `${scopedT("accordion.items.item5.content")}`,
      iconLabel: "API Sports",
      website: "https://www.api-football.com/documentation-v3",
    },
    {
      content: `${scopedT("accordion.items.item6.content")}`,
      iconLabel: "Football Data API",
      website: "https://www.football-data.org/documentation/quickstart",
    },
  ];
  return (
    <>
      <div className="w-screen bg-whitebg dark:bg-[#1A1A1A]">
        <div className="relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] bg-background sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:h-[650px] 2xl:rounded-b-[70px] 3xl:h-[750px]">
          <Dots />
          <ProjectBanner
            variant="phone"
            imageSrc="/images/livescore-banner.webp"
            title="Live Scores"
            website="https://livescore-eosin.vercel.app/"
            github="https://github.com/TobiasRW/livescore"
            bgColor="#26437E"
          />
        </div>
      </div>
      <ProjectDescription
        title={scopedT("about.heading")}
        text={`${scopedT("about.text.paragraph1")} \n 
       ${scopedT("about.text.paragraph2")}\n
       ${scopedT("about.text.paragraph3")} \n 
          `}
        iconLabels={[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "API Sports",
          "Football Data API",
        ]}
        highlightWords={["React", "Next.js", "TypeScript"]}
      />
      <div className="mx-auto xl:grid xl:w-10/12 xl:grid-cols-[1.5fr,1fr] xl:gap-14 xl:py-40">
        <Slider
          variant="background"
          bgColor="#26437E"
          images={[
            "/images/livescore-pic1.png",
            "/images/livescore-pic2.png",
            "/images/livescore-pic3.png",
            "/images/livescore-pic4.png",
          ]}
        />
        <Accordion
          items={accordionItems}
          title={scopedT("accordion.heading")}
        />
      </div>
    </>
  );
}
