import Slider from "@/components/slider";
import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";
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
  const scopedT = await getScopedI18n("projectFitApp");
  const accordionItems = [
    {
      content: scopedT("accordion.items.item1.content"),
      iconLabel: "Next.js",
      website: "https://nextjs.org/docs",
    },
    {
      content: scopedT("accordion.items.item2.content"),
      iconLabel: "Supabase",
      website: "https://supabase.com/docs",
    },
    {
      content: scopedT("accordion.items.item3.content"),
      iconLabel: "Motion",
      website: "https://motion.dev/",
    },
    {
      content: scopedT("accordion.items.item4.content"),
      iconLabel: "Tailwind CSS",
      website: "https://tailwindcss.com/",
    },
    {
      content: scopedT("accordion.items.item5.content"),
      iconLabel: "TypeScript",
      website: "https://www.typescriptlang.org/",
    },
  ];

  return (
    <>
      <div className="bg-whitebg w-screen dark:bg-[#1A1A1A]">
        <div className="bg-background 3xl:h-[750px] relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:h-[650px] 2xl:rounded-b-[70px]">
          <Dots />
          <ProjectBanner
            variant="phone2"
            imageSrc="/images/fit-app-banner.webp"
            title="Fit App"
            bgColor="#1db954"
            website="https://fit-app-lilac.vercel.app/"
            github="https://github.com/TobiasRW/fit-app"
          />
        </div>
      </div>
      <ProjectDescription
        title={scopedT("about.heading")}
        badges={[
          scopedT("about.badges.badge1"),
          scopedT("about.badges.badge2"),
        ]}
        disclaimer={scopedT("about.text.disclaimer")}
        text={[
          {
            content: scopedT("about.text.paragraph1"),
          },
          {
            content: scopedT("about.text.paragraph2"),
            highlightWords: ["TypeScript", "Supabase", "Next.js"],
          },
          { content: scopedT("about.text.paragraph3") },
        ]}
        techStack={[
          "React",
          "Next.js",
          "Supabase",
          "Motion",
          "Tailwind CSS",
          "TypeScript",
        ]}
        testUser={{
          email: scopedT("about.text.testUser.email"),
          password: scopedT("about.text.testUser.password"),
        }}
      />
      <div className="mx-auto max-w-[1920px] xl:grid xl:w-10/12 xl:grid-cols-[1.5fr_1fr] xl:gap-14 xl:py-40">
        <Slider
          variant="background"
          bgColor="#1db954"
          images={[
            "/images/fit-app-pic1.png",
            "/images/fit-app-pic2.png",
            "/images/fit-app-pic3.png",
            "/images/fit-app-pic4.png",
            "/images/fit-app-pic5.png",
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
