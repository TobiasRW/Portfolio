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
  const scopedT = await getScopedI18n("projectBookBuddy");
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
      iconLabel: "MySQL",
      website: "https://dev.mysql.com/doc/",
    },
    {
      content: `${scopedT("accordion.items.item4.content")}`,
      iconLabel: "Motion",
      website: "https://motion.dev/",
    },
    {
      content: `${scopedT("accordion.items.item5.content")}`,
      iconLabel: "Tailwind CSS",
      website: "https://tailwindcss.com/",
    },
    {
      content: `${scopedT("accordion.items.item6.content")}`,
      iconLabel: "JavaScript",
      website: "",
    },
  ];

  return (
    <>
      <div className="w-screen bg-whitebg dark:bg-[#1A1A1A]">
        <div className="relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] bg-background sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:h-[650px] 2xl:rounded-b-[70px] 3xl:h-[750px]">
          <Dots />
          <ProjectBanner
            variant="phone"
            imageSrc="/images/bookapp-banner.webp"
            title="Book Buddy"
            website="https://book-app-gamma-rose.vercel.app/"
            github="https://github.com/TobiasRW/my-book-app"
          />
        </div>
      </div>
      <ProjectDescription
        title={scopedT("about.heading")}
        text={` ${scopedT("about.text.paragraph1")} \n
          ${scopedT("about.text.paragraph2")}\n
        ${scopedT("about.text.paragraph3")} \n 
        ${scopedT("about.text.paragraph4")} \n
         ${scopedT("about.text.testUser.heading")}
       ${scopedT("about.text.testUser.user")}
       ${scopedT("about.text.testUser.password")}
          `}
        iconLabels={[
          "React",
          "Next.js",
          "MySQL",
          "Motion",
          "Tailwind CSS",
          "JavaScript",
        ]}
        highlightWords={[
          "React",
          "Next.js",
          "MySQL",
          "Motion",
          "Tailwind",
          "CSS",
          "Google",
          "Books",
          "API",
          "Username:",
          "Brugernavn:",
          "Password:",
          "Kodeord:",
          "Test",
          "bruger:",
          "user:",
        ]}
      />
      <div className="mx-auto xl:grid xl:w-10/12 xl:grid-cols-[1.5fr,1fr] xl:gap-14 xl:py-40">
        <Slider
          variant="background"
          bgColor="#2c2c2c"
          images={[
            "/images/book-pic1.png",
            "/images/book-pic2.png",
            "/images/book-pic3.png",
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
