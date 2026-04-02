import {
  ProjectBanner,
  ProjectDescription,
  ProjectImageSlider,
} from "@/components/project";
import { Accordion } from "@/components/ui";
import { Dots } from "@/components/visuals";
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
  const scopedT = await getScopedI18n("projectLiveScores");
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
      iconLabel: "Tailwind CSS",
      website: "https://tailwindcss.com/",
    },
    {
      content: scopedT("accordion.items.item4.content"),
      iconLabel: "TypeScript",
      website: "https://www.typescriptlang.org/",
    },
    {
      content: scopedT("accordion.items.item5.content"),
      iconLabel: "API Sports",
      website: "https://www.api-football.com/documentation-v3",
    },
    {
      content: scopedT("accordion.items.item6.content"),
      iconLabel: "Football Data API",
      website: "https://www.football-data.org/documentation/quickstart",
    },
  ];
  return (
    <>
      <div className={styles.root}>
        <div className={styles.hero}>
          <Dots />
          <ProjectBanner
            variant="phone"
            imageSrc="/images/livescore-banner2.webp"
            title="Live Scores"
            website="https://livescore.tobiaswolmar.dk/"
            github="https://github.com/TobiasRW/livescore"
            bgColor="#26437E"
          />
        </div>
      </div>
      <ProjectDescription
        title={scopedT("about.heading")}
        badges={[
          scopedT("about.badges.badge1"),
          scopedT("about.badges.badge2"),
        ]}
        text={[
          {
            content: scopedT("about.text.paragraph1"),
            highlightWords: ["Next.js", "TypeScript"],
          },
          {
            content: scopedT("about.text.paragraph2"),
          },
          {
            content: scopedT("about.text.paragraph3"),
          },
        ]}
        techStack={[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "API Sports",
          "Football Data API",
        ]}
      />
      <div className={styles.content}>
        <ProjectImageSlider
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
