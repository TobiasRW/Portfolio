import Slider from "@/components/slider-component";
import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import { Accordion } from "@/components/ui";
import Dots from "@/components/visuals/dots/dots";
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import Scene from "@/components/scene";
import styles from "../page.module.css";

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
      content: scopedT("accordion.items.item1.content"),
      iconLabel: "React",
      website: "https://react.dev/",
    },
    {
      content: scopedT("accordion.items.item2.content"),
      iconLabel: "Vite",
      website: "https://vitejs.dev/",
    },
    {
      content: scopedT("accordion.items.item3.content"),
      iconLabel: "Tailwind CSS",
      website: "https://tailwindcss.com/",
    },
    {
      content: scopedT("accordion.items.item4.content"),
      iconLabel: "Motion",
      website: "https://motion.dev/",
    },
    {
      content: scopedT("accordion.items.item5.content"),
      iconLabel: "JavaScript",
    },
    {
      content: scopedT("accordion.items.item6.content"),
      iconLabel: "GSAP",
      website: "https://gsap.com/",
    },
  ];

  return (
    <>
      <div className={styles.root}>
        <div className={styles.hero}>
          <Dots />
          <ProjectBanner
            variant="default"
            imageSrc="/images/coelm-banner.webp"
            title={scopedT("title")}
            website="https://coelm.tobiaswolmar.dk/"
            github="https://github.com/TobiasRW/hovedopgave"
          />
        </div>
      </div>
      <ProjectDescription
        title={scopedT("about.heading")}
        badges={[scopedT("about.badges.badge1")]}
        text={[
          {
            content: scopedT("about.text.paragraph1"),
            highlightWords: ["React", "Vite"],
          },
          {
            content: scopedT("about.text.paragraph2"),
            highlightWords: ["GSAP", "Motion"],
          },
          {
            content: scopedT("about.text.paragraph3"),
            highlightWords: ["Tailwind", "CSS"],
          },
          { content: scopedT("about.text.paragraph4") },
        ]}
        techStack={[
          "React",
          "Vite",
          "GSAP",
          "Motion",
          "Tailwind CSS",
          "JavaScript",
        ]}
      />
      <div className={styles.content}>
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
      <div className={styles.model}>
        <h2 className={styles["model-title"]}>3D Model</h2>
        <div className={styles.scene}>
          <Scene />
        </div>
      </div>
    </>
  );
}
