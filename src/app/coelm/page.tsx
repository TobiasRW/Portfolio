import Slider from "@/components/slider";
import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";

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
        "Vite er et værktøj, der gør udviklingen hurtig og effektiv ved at levere øjeblikkelige opdateringer under kodning. Jeg har brugt det til at gøre udviklingsprocessen mere smidig og effektiv.",
      iconLabel: "Vite",
      website: "https://vitejs.dev/",
    },
    {
      content:
        "Tailwind er et CSS framework, der gør det nemt at opbygge en responsiv og moderne brugergrænseflade ved brug af utility classes. Jeg har brugt det til at style websitet og opnå en ensartet og moderne design.",
      iconLabel: "Tailwind CSS",
      website: "https://tailwindcss.com/",
    },
    {
      content:
        "Motion gør det supernemt at lave fede animationer i React. Jeg har brugt det til at skabe dynamiske elementer og animationer, der gør websitet mere levende og engagerende. Herunder bl.a. knapper og andre interaktive elementer.",
      iconLabel: "Motion",
      website: "https://motion.dev/",
    },
    {
      content:
        "JavaScript er brugt gennem React til at tilføje interaktivitet og dynamik til websitet. Jeg har anvendt det til at implementere funktioner og interaktioner, der gør brugeroplevelsen mere engagerende og intuitiv.",
      iconLabel: "JavaScript",
    },
    {
      content:
        "GSAP er et animationsbibliotek, der gør det nemt at lave avancerede og imponerende animationer. Jeg har brugt det til de mere komplekse animationer på websitet, som ses på 'om os'-siden og i webshoppen.",
      iconLabel: "GSAP",
      website: "https://gsap.com/",
    },
  ];

  return (
    <>
      <div className="w-screen bg-whitebg dark:bg-[#1A1A1A]">
        <div className="relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] bg-background sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:h-[650px] 2xl:rounded-b-[70px]">
          <div className="absolute z-0 h-full w-full bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
          <ProjectBanner
            variant="default"
            imageSrc="/images/coelm-banner.webp"
            title="Cølm"
            website="https://hovedopgave-v2.tobiaswolmar.dk/"
            github="https://github.com/TobiasRW/hovedopgave"
          />
        </div>
      </div>
      <ProjectDescription
        text={`Dette projekt fokuserer på udviklingen af en ny visuel identitet samt et proof-of-concept webshop-design for Nimo Skin’s kommende brand, cølm. \n 
        Projektet er udarbejdet i React med Vite som værktøj, hvilket har givet et hurtigt og effektivt udviklingsmiljø. Målet har været at skabe en engagerende og interaktiv side, hvilket er opnået ved hjælp af animationsbibliotekerne 'Motion' og 'GSAP'. \n
        Til styling af siden har jeg anvendt Tailwind CSS, hvilket har gjort det enkelt at skabe en responsiv og moderne brugeroplevelse. Alt indhold på siden, herunder billeder skabt i Blender, samt design og animationer, er udviklet fra bunden. \n
       Nimo Skin ønskede at udvikle en visuel identitet, der skiller sig ud fra deres eksisterende brand ved at fremstå mere minimalistisk, eksklusiv og moderne. Dette blev opnået gennem research af målgruppen, markedet samt Nimo Skin's værdier og visioner. Resultatet er et design og en webshop, der opnår netop dette. `}
        iconLabels={[
          "React",
          "Vite",
          "GSAP",
          "Motion",
          "Tailwind CSS",
          "JavaScript",
        ]}
        highlightWords={["React", "Vite", "GSAP", "Motion", "Tailwind", "CSS"]}
      />
      <div className="mx-auto xl:grid xl:w-10/12 xl:grid-cols-[1.5fr,1fr] xl:gap-14 xl:py-40">
        <Slider
          images={[
            "/images/coelm-pic1.png",
            "/images/coelm-pic2.png",
            "/images/coelm-pic3.png",
            "/images/coelm-pic4.png",
          ]}
        />
        <Accordion items={accordionItems} />
      </div>
    </>
  );
}
