export default function About() {
  return (
    <section id="about">
      <div className="mx-auto flex w-10/12 flex-col gap-8">
        <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
          Hvem er jeg?
        </h2>
        <p className="font-body text-sm font-light lg:text-base 2xl:text-lg">
          Hejsa 👋🏻
          <br />
          <br />
          Jeg hedder Tobias og er en passioneret webudvikler med fokus på
          frontend-udvikling. Jeg er uddannet multimediedesigner og læser nu
          videre på webudvikling som en top-up-uddannelse.
          <br />
          <br />
          Jeg elsker at fordybe mig i ting - uanset om det er en ny fantasy
          verden, træning i fitnesscenteret, eller et spændende kodeprojekt! Jeg
          har altid været en problemløser af natur, lige fra matematikopgaver i
          folkeskolen til nu at finde løsninger som webudvikler.
          <br />
          <br />
          Med mit fokus inden for frontend-udvikling sætter jeg pris på detaljen
          - især når det kommer til interaktivitet og design. Jeg er altid
          nysgerrig efter at lære noget nyt og kaster mig gerne over nye
          teknologier og trends.
          <br />
          <br />
          Lige nu leder jeg efter et studiejob, hvor jeg kan få lov til at bygge
          videre på min erfaring, samtidig med at jeg lærer en masse nyt. Hvis
          det lyder som noget for jer, så tøv ikke med at kontakte mig – jeg
          glæder mig til at høre fra jer!
        </p>
        <div className="flex flex-col items-start gap-4 font-body text-sm font-light text-[#2A4B9A] lg:text-base 2xl:text-lg dark:text-white">
          <a
            href="mailto:tobiasrw98@gmail.com"
            target="_blank"
            className="underline"
          >
            tobiasrw98@gmail.com
          </a>
          <a href="tel:30305154" target="_blank" className="underline">
            Tlf: 30 30 51 54
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-wolmar-87991224a/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
