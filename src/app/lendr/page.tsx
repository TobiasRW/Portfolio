import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";
import Slider from "@/components/slider";
import Dots from "@/components/dots";

export default function Page() {
  const accordionItems = [
    {
      content:
        "React bruges til at bygge interaktive brugergrænseflader med komponenter. Vi har brugt det til at opbygge hele strukturen og funktionaliteten af websitet, hvilket har gjort det nemt at genbruge kode og opnå en effektiv udviklingsproces. ",
      iconLabel: "React",
      website: "https://react.dev/",
    },
    {
      content:
        "Next.js er et moderne React-baseret framework, der gør det nemt at bygge hurtige og effektive webapplikationer. I denne opgave har vi brugt Next.js til at bygge brugerappen til Lendr, som er en platform, der forbinder lejere og udlejere af kufferter og tasker.",
      iconLabel: "Next.js",
      website: "https://nextjs.org/docs",
    },
    {
      content:
        "Remix er et moderne React-baseret framework, der ligesom Next.js gør det nemt at bygge hurtige og effektive webapplikationer. I denne opgave har vi brugt Remix til at bygge et admin dashboard til Lendr, som skal fungere som et kontrolpanel for supportmedarbejdere og administratorer.",
      iconLabel: "Remix",
      website: "https://remix.run/docs/en/main",
    },
    {
      content:
        "MySQL er et programmeringssprog, der bruges til at oprette og administrere databaser. I denne opgave har vi brugt MySQL til at oprette en database, der indeholder information om brugerne og de kufferter og tasker, der er tilgængelige for udlejning.",
      iconLabel: "MySQL",
      website: "https://dev.mysql.com/doc/",
    },
    {
      content:
        "PHP er i denne opgave brugt til at udvikle en API, som kan tilgås af forskellige frontends. API'en bruges til at hente og opdatere data i databasen, så brugere/admins kan se og administrere deres kufferter og tasker.",
      iconLabel: "PHP",
      website: "https://www.php.net/",
    },
    {
      content:
        "Shadcn er en samling af genanvendelige komponenter, der er designet til at gøre det nemt at opbygge en moderne og responsiv brugergrænseflade. Vi har i dette projekt flere af shadcn's komponenter, til at hurtugt og nemt at opbygge en flot og brugervenlig brugergrænseflade. Vi har redigeret og tilpasset komponenterne, så de passede til vores behov.",
      iconLabel: "Shadcn",
      website: "https://ui.shadcn.com/docs",
    },
    {
      content:
        "Tailwind er et CSS framework, der gør det nemt at opbygge en responsiv og moderne brugergrænseflade ved brug af utility classes. Vi har brugt det til at style websitet og opnå en ensartet og moderne design.",
      iconLabel: "Tailwind CSS",
      website: "https://tailwindcss.com/",
    },
    {
      content:
        "JavaScript er brugt gennem React til at tilføje interaktivitet og dynamik til websitet. Vi har anvendt det til at implementere funktioner og interaktioner, der gør brugeroplevelsen mere engagerende og intuitiv.",
      iconLabel: "JavaScript",
    },
  ];
  return (
    <>
      <div className="w-screen bg-whitebg dark:bg-[#1A1A1A]">
        <div className="relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] bg-background sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:h-[650px] 2xl:rounded-b-[70px] 3xl:h-[750px]">
          <Dots />
          <ProjectBanner
            variant="phone"
            imageSrc="/images/lendr-banner.webp"
            title="Lendr"
            website="https://lendr-nine.vercel.app/"
            github=""
            bgColor="#5BAD86"
          />
        </div>
      </div>
      <ProjectDescription
        text={`Lendr er udviklet i forbindelse med et skoleprojekt på webudvikling. Projektet skulle bestå af to forskellige frontends som begge skulle tilgå den samme backend. Vi har skabt en web app som har til formål at forbinde lejere og udlejere af kufferter og tasker. Brugere kan altså enten leje en kuffert eller tjene penge på at udleje en kuffert. \n 
        Vi har brugt Next.js til at bygge brugerappen og Remix til at bygge et admin dashboard til Lendr's medarbejdere. \n
        Vi har brugt MySQL til at oprette en database, der indeholder information om brugerne og de kufferter og tasker, der er tilgængelige for udlejning. Vi har yderligere udviklet en API i php, som begge frontends kan tilgå for at hente og opdatere data. \n 

          `}
        iconLabels={[
          "React",
          "Next.js",
          "Remix",
          "MySQL",
          "PHP",
          "Shadcn",
          "Tailwind CSS",
          "JavaScript",
        ]}
        highlightWords={[
          "React",
          "Next.js",
          "Remix",
          "MySQL",
          "PHP",
          "API",
          "backend",
        ]}
      />
      <div className="mx-auto xl:grid xl:w-10/12 xl:grid-cols-[1.5fr,1fr] xl:gap-14 xl:py-40">
        <Slider
          variant="background"
          bgColor="#5BAD86"
          images={[
            "/images/lendr-pic1.png",
            "/images/lendr-pic2.png",
            "/images/lendr-pic3.png",
          ]}
        />
        <Accordion items={accordionItems} />
      </div>
    </>
  );
}
