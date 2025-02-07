import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";
import Slider from "@/components/slider";
import Dots from "@/components/dots";

export default function Page() {
  const accordionItems = [
    {
      content:
        "HTML er det primære sprog, der bruges til at opbygge websider og applikationer. Jeg har brugt det til at strukturere indholdet og opbygge layoutet af websitet.",
      iconLabel: "HTML",
    },
    {
      content:
        "CSS er et sprog, der bruges til at style og designe websider. Jeg har brugt det til at tilføje farver, skrifttyper, layout og animationer til websitet.",
      iconLabel: "CSS",
    },
    {
      content:
        "JavaScript er et programmeringssprog, der bruges til at tilføje interaktivitet og dynamik til websider. Jeg har brugt det til at implementere funktioner og interaktioner, der gør brugeroplevelsen mere engagerende.",
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
        text={`Dette Projekt er en hjemmeside, der er bugget med basis HTML, CSS og JavaScript. Hjemmesiden er en simpel side, der viser en animation af et glas, der gradvist fyldes med vand når man scroller ned på siden. \n 
        Jeg har brugt HTML til at opbygge strukturen af siden, CSS til at style elementerne og JavaScript til at tilføje interaktivitet og animationer. \n 
        Siden viser også den oprindelige After Effects animation som siden er baseret på.
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
        <Accordion items={accordionItems} />
      </div>
    </>
  );
}
