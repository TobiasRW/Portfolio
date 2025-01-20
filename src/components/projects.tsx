import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col gap-8 pb-20 pt-10 md:pb-24 md:pt-14 lg:gap-14 lg:pb-28 xl:pb-32 xl:pt-20">
        <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
          Projekter
        </h2>
        <div className="grid gap-8 md:mx-auto md:w-10/12 md:grid-cols-2 lg:gap-y-20 xl:w-11/12 xl:grid-cols-3 xl:gap-y-14">
          <ProjectCard
            variant="default"
            imageSrc="/images/coelm-banner.webp"
            title="Coelm"
            text="Hovedopgave som multimediedesigner"
            link="/coelm"
          />

          <ProjectCard
            variant="phone"
            imageSrc="/images/bookapp-banner.webp"
            title="Book App"
            text="En bog app til læsere til at organisere deres bøger."
            link="/book-buddy"
          />
          <ProjectCard
            variant="phone"
            imageSrc="/images/lendr-banner.webp"
            title="Lendr"
            text="En app til udlejning af kufferter og rejsetasker."
            link="/lendr"
            bgColor="#5BAD86"
          />

          <ProjectCard
            variant="computer"
            imageSrc="/images/glassfill-banner.webp"
            title="Glass fill"
            text="Interaktivt website med scroll-effekter."
            link="/glass-fill"
            bgColor="#6BB3ED"
          />
        </div>
      </div>
    </>
  );
}
