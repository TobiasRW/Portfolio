import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";
import Slider from "@/components/slider";

export default function Page() {
  const accordionItems = [
    {
      title: "HTML",
      content:
        "HTML er det primære sprog, der bruges til at opbygge websider og applikationer. Jeg har brugt det til at strukturere indholdet og opbygge layoutet af websitet.",
      icon: "/icons/html.svg",
    },
    {
      title: "CSS",
      content:
        "CSS er et sprog, der bruges til at style og designe websider. Jeg har brugt det til at tilføje farver, skrifttyper, layout og animationer til websitet.",
      icon: "/icons/css.svg",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript er et programmeringssprog, der bruges til at tilføje interaktivitet og dynamik til websider. Jeg har brugt det til at implementere funktioner og interaktioner, der gør brugeroplevelsen mere engagerende.",
      icon: "/icons/javascript.svg",
    },
  ];
  return (
    <>
      <div className="w-screen bg-whitebg dark:bg-[#1A1A1A]">
        <div className="relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] bg-background sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:h-[650px] 2xl:rounded-b-[70px]">
          <div className="absolute z-0 h-full w-full bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
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
        icons={["/icons/html.svg", "/icons/css.svg", "/icons/javascript.svg"]}
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
