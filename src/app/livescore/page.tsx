import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";
import Slider from "@/components/slider";
import Dots from "@/components/dots";

export default function Page() {
  const accordionItems = [
    {
      content:
        "React bruges til at bygge interaktive brugergrænseflader med komponenter. Jeg har brugt det til at opbygge hele strukturen og funktionaliteten af websitet, hvilket har gjort det nemt at genbruge kode og opnå en effektiv udviklingsproces.",
      iconLabel: "React",
      website: "https://react.dev/",
    },
    {
      content:
        "Next.js er et moderne React-baseret framework, der gør det nemt at bygge hurtige og effektive webapplikationer. I dette projekt har jeg brugt Next.js til at bygge en fodbold livescore app, hvor man kan se live resultater og statistikker.",
      iconLabel: "Next.js",
      website: "https://nextjs.org/docs",
    },
    {
      content:
        "Tailwind er et CSS framework, der gør det nemt at opbygge en responsiv og moderne brugergrænseflade ved brug af utility classes. Jeg har brugt det til at style websitet og opnå et ensartet og moderne design.",
      iconLabel: "Tailwind CSS",
      website: "https://tailwindcss.com/",
    },
    {
      content:
        "TypeScript er et programmeringssprog, der bygger på JavaScript og tilføjer typekontrol. Jeg har brugt TypeScript til at skrive koden i dette projekt, hvilket har givet mig bedre kodekvalitet og færre fejl.",
      iconLabel: "TypeScript",
      website: "https://www.typescriptlang.org/",
    },
    {
      content:
        "API-Sports er en API der giver adgang til sportsdata fra forskellige sportsgrene, herunder fodbold. Jeg har brugt API-Sports til at hente live fodbold resultater til min livescore app.",
      iconLabel: "API Sports",
      website: "https://www.api-football.com/documentation-v3",
    },
    {
      content:
        "Football-data.org er en API der giver adgang til fodbolddata fra forskellige ligaer og turneringer. Jeg har brugt Football-data.org til at hente ligatabeller til min livescore app.",
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
            website="https://livescore-ashy.vercel.app/"
            github="https://github.com/TobiasRW/livescore"
            bgColor="#26437E"
          />
        </div>
      </div>
      <ProjectDescription
        text={`Live Scores er en fodbold-livescore-app, der viser livekampe fra de største ligaer i Europa. Appen er bygget med TypeScript i Next.js og bruger to forskellige fodbold API'er til at hente live resultater og ligatabeller. \n 
        'api-football.com' anvendes til at hente live resultater, men da jeg benytter deres gratis version, er appen begrænset til 100 API-kald om dagen. 'football-data.org' bruges til at hente ligatabeller. Ved at kombinere de to API'er kan jeg blande data fra begge API'ers gratis udgaver. \n
        Appen giver mulighed for at se live resultater, kampstatistikker, holdopstillinger og ligatabeller. \n 
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
        <Accordion items={accordionItems} />
      </div>
    </>
  );
}
