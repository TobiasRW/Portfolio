import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";
import Slider from "@/components/slider";
import Dots from "@/components/dots";
import { getScopedI18n } from "@/locales/server";

export default async function Page() {
  const scopedT = await getScopedI18n("projectGlassFill");
  const accordionItems = [
    {
      content: `${scopedT("accordion.items.item1.content")}`,
      iconLabel: "HTML",
    },
    {
      content: `${scopedT("accordion.items.item2.content")}`,
      iconLabel: "CSS",
    },
    {
      content: `${scopedT("accordion.items.item3.content")}`,
      iconLabel: "JavaScript",
    },
  ];
  return (
    <>
      <div className="w-screen bg-whitebg dark:bg-[#1A1A1A]">
        <div className="relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] bg-background sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:h-[650px] 2xl:rounded-b-[70px] 3xl:h-[750px]">
          <Dots />
          <ProjectBanner
            variant="pc"
            imageSrc="/images/glassfill-banner.webp"
            title="Glass Fill"
            website="https://glassfill.tobiaswolmar.dk/"
            github="https://github.com/TobiasRW/glass-fill"
            bgColor="#6BB3ED"
          />
        </div>
      </div>
      <ProjectDescription
        title={scopedT("about.heading")}
        text={` ${scopedT("about.text.paragraph1")} \n 
        ${scopedT("about.text.paragraph2")} \n 
        ${scopedT("about.text.paragraph3")}
        `}
        iconLabels={["HTML", "CSS", "JavaScript"]}
        highlightWords={["HTML", "CSS", "JavaScript", "After", "Effects"]}
      />
      <div className="mx-auto xl:grid xl:w-10/12 xl:grid-cols-[1.5fr,1fr] xl:gap-14 xl:py-40">
        <Slider
          bgColor="#2c2c2c"
          images={[
            "/images/glassfill-pic1.png",
            "/images/glassfill-pic2.png",
            "/images/glassfill-pic3.png",
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
