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
  const scopedT = await getScopedI18n("projectPalette");

  const accordionItems = [
    {
      content: scopedT("accordion.items.item1.content"),
      iconLabel: "React",
      website: "https://react.dev/",
    },
    {
      content: scopedT("accordion.items.item2.content"),
      iconLabel: "Next.js",
      website: "https://nextjs.org/docs",
    },
    {
      content: scopedT("accordion.items.item3.content"),
      iconLabel: "MongoDB",
      website: "https://www.mongodb.com/",
    },
    {
      content: scopedT("accordion.items.item4.content"),
      iconLabel: "Mistral",
      website: "https://mistral.ai/",
    },
    {
      content: scopedT("accordion.items.item5.content"),
      iconLabel: "Tailwind CSS",
      website: "https://tailwindcss.com/",
    },
    {
      content: scopedT("accordion.items.item6.content"),
      iconLabel: "TypeScript",
      website: "https://www.typescriptlang.org/",
    },
    {
      content: scopedT("accordion.items.item7.content"),
      iconLabel: "Zustand",
      website: "https://zustand.docs.pmnd.rs/getting-started/introduction",
    },
  ];
  return (
    <>
      <div className="bg-whitebg w-screen dark:bg-[#1A1A1A]">
        <div className="bg-background 3xl:h-[750px] relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:h-[650px] 2xl:rounded-b-[70px]">
          <Dots />
          <ProjectBanner
            variant="pc"
            imageSrc="/images/palette-banner.webp"
            title="Palette"
            website="https://palette.tobiaswolmar.dk/"
            github="https://github.com/TobiasRW/Color-Palette"
            bgColor="#FC7753"
          />
        </div>
      </div>
      <ProjectDescription
        title={scopedT("about.heading")}
        badges={[
          scopedT("about.badges.badge1"),
          scopedT("about.badges.badge2"),
          scopedT("about.badges.badge3"),
        ]}
        text={[
          {
            content: scopedT("about.text.paragraph1"),
          },
          {
            content: scopedT("about.text.paragraph2"),
            highlightWords: ["Next.js", "MongoDB", "Mistral", "TypeScript"],
          },
          {
            content: scopedT("about.text.paragraph3"),
            highlightWords: ["MongoDB"],
          },
        ]}
        techStack={[
          "React",
          "Next.js",
          "MongoDB",
          "Mistral",
          "Tailwind CSS",
          "TypeScript",
          "Zustand",
        ]}
        testUser={{
          email: scopedT("about.text.testUser.email"),
          password: scopedT("about.text.testUser.password"),
        }}
      />
      <div className="mx-auto max-w-[1920px] xl:grid xl:w-10/12 xl:grid-cols-[1.5fr_1fr] xl:gap-14 xl:py-40">
        <Slider
          variant="background"
          bgColor="#FC7753"
          images={[
            "/images/palette-pic1.webp",
            "/images/palette-pic2.webp",
            "/images/palette-pic3.png",
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
