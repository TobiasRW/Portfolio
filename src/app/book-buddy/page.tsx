import Slider from "@/components/slider";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";

export default function Page() {
  const accordionItems = [
    {
      title: "React",
      content:
        "React bruges til at bygge interaktive brugergrænseflader med komponenter. Jeg har brugt det til at opbygge hele strukturen og funktionaliteten af websitet, hvilket har gjort det nemt at genbruge kode og opnå en effektiv udviklingsproces.",
      icon: "/icons/react.svg",
      website: "https://react.dev/",
    },
    {
      title: "Next.js",
      content:
        "Next.js er et moderne React-baseret framework, der gør det nemt at bygge hurtige og effektive webapplikationer. Det understøtter server-side rendering (SSR), hvilket optimerer ydelsen og brugeroplevelsen. I dette projekt har jeg brugt Next.js til at skabe en applikation, hvor brugerne kan søge efter bøger og gemme dem til senere brug.",
      icon: "/icons/next-js.svg",
      website: "https://nextjs.org/docs",
    },
    {
      title: "MySQL",
      content:
        "Jeg har brugt mySQL til at oprette en database, der indeholder information omkring brugerne og de bøger, de har gemt. Databasen er designet til effektivt at håndtere dataen på en sikker og skalerbar måde, så der ikke opstår fejl eller tab af data.",
      icon: "/icons/mysql.svg",
      website: "https://dev.mysql.com/doc/",
    },
    {
      title: "Motion",
      content:
        "Motion er et animationsbibliotek til JavaScript og React, som gør det super nemt at skabe flotte og fængende animationer. I dette projekt har jeg brugt Motion til at tilføje animationer til kanpper og modal vinduer, hvilket har gjort websitet mere levende og interaktivt.",
      icon: "/icons/motion.svg",
      website: "https://motion.dev/",
    },
    {
      title: "Tailwind CSS",
      content:
        "Tailwind er et CSS framework, der gør det nemt at opbygge en responsiv og moderne brugergrænseflade ved brug af utility classes. Jeg har brugt det til at style websitet og opnå en ensartet og moderne design.",
      icon: "/icons/tailwind.svg",
      website: "https://tailwindcss.com/",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript er brugt gennem React til at tilføje interaktivitet og dynamik til websitet. Jeg har anvendt det til at implementere funktioner og interaktioner, der gør brugeroplevelsen mere engagerende og intuitiv.",
      icon: "/icons/javascript.svg",
      website: "",
    },
  ];

  return (
    <>
      <div className="w-screen bg-whitebg dark:bg-[#1A1A1A]">
        <div className="relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] bg-background sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:h-[650px] 2xl:rounded-b-[70px]">
          <div className="absolute z-0 h-full w-full bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
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
        text={`Dette projekt er en web app kaldet "Book Buddy", som er udviklet som et fritidsprojekt. Da jeg selv nyder at læse og fordybe mig i bøger, var det oplagt for mig at udvikle en app hvor jeg kan gemme og holde styr på mine bøger. \n
          Appen er bygget med React med Next.js som framework, og bruger MySQL til at gemme data om brugerne og de bøger, de har gemt. Appen gør det muligt at oprette en profil som man kan bruge til at individuelt at gemme bøger og oprette hylder/lister til at organisere dem. \n
          For at kunne søge efter bøger og hente information om dem, bruger appen Google Books API, som har et kæmpe bibliotek af bøger, til at finde bøger og information om dem. \n 
          Jeg har brugt Tailwind CSS til at style appen, og Motion til at tilføje animationer til knapper og modal vinduer, hvilket har gjort appen mere levende og interaktiv. 
          `}
        icons={[
          "/icons/react.svg",
          "/icons/next-js.svg",
          "/icons/tailwind.svg",
          "/icons/motion.svg",
          "/icons/javascript.svg",
          "/icons/mysql.svg",
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
        <Accordion items={accordionItems} />
      </div>
    </>
  );
}
