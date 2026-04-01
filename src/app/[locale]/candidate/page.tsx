import Slider from "@/components/slider-component";
import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import { Accordion } from "@/components/ui";
import Dots from "@/components/visuals/dots/dots";
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
  const scopedT = await getScopedI18n("projectCandidate");
  const accordionItems = [
    {
      content: scopedT("accordion.items.item1.content"),
      iconLabel: "React",
      website: "https://react.dev/",
    },
    {
      content: scopedT("accordion.items.item2.content"),
      iconLabel: "React Router",
      website: "https://reactrouter.com/home",
    },
    {
      content: scopedT("accordion.items.item3.content"),
      iconLabel: "MongoDB",
      website: "https://www.mongodb.com/docs/",
    },
    {
      content: scopedT("accordion.items.item4.content"),
      iconLabel: "Motion",
      website: "https://motion.dev/",
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
      iconLabel: "Mistral",
      website: "https://docs.mistral.ai/",
    },
  ];

  return (
    <>
      <div className={styles.root}>
        <div className={styles.hero}>
          <Dots />
          <ProjectBanner
            variant="pc"
            imageSrc="/images/candidate-banner.webp"
            title="Candidate"
            website="https://candidate-dk-staging-phqud.ondigitalocean.app/"
            github=""
            bgColor="#1E2171"
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
        disclaimer={scopedT("about.text.disclaimer")}
        text={[
          {
            content: scopedT("about.text.paragraph1"),
            highlightWords: ["React", "Router", "7", "TypeScript."],
          },
          { content: scopedT("about.text.paragraph2") },
          {
            content: scopedT("about.text.paragraph3"),
            highlightWords: ["MongoDB", "Mistral's", "LLM", "API"],
          },
        ]}
        techStack={[
          "React",
          "React Router",
          "MongoDB",
          "Motion",
          "Tailwind CSS",
          "TypeScript",
          "Mistral",
        ]}
        testUser={{
          email: scopedT("about.text.testUser.email"),
          password: scopedT("about.text.testUser.password"),
        }}
      />
      <div className={styles.content}>
        <Slider
          variant="background"
          bgColor="#1E2171"
          images={[
            "/images/candidate-pic1.webp",
            "/images/candidate-pic2.webp",
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
