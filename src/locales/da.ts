// locales/da.ts
export default {
  navigation: {
    back: "Tilbage",
    projects: "Projekter",
    about: "Om",
  },
  frontPage: {
    hero: {
      title: "Passioneret webudvikler med speciale i frontend-udvikling",
      button: {
        projects: "Projekter",
        about: "Om Mig",
      },
    },
    projects: {
      title: "Projekter",
      project: {
        coelm: {
          name: "Cølm",
          brief: "Hovedopgave som multimediedesigner",
        },
        bookBuddy: {
          name: "Book Buddy",
          brief: "En bog app til læsere til at organisere deres bøger",
        },
        lendr: {
          name: "Lendr",
          brief: "En app til udlejning af kufferter og rejsetasker",
        },
        glassFill: {
          name: "Glass Fill",
          brief: "Interaktivt website med scroll-effekter",
        },
        liveScores: {
          name: "Live Scores",
          brief: "En fodbold livescore app",
        },
      },
    },
    about: {
      title: "Hvem er jeg?",
      text: {
        intro: "Hejsa 👋🏻",
        paragraph1:
          "Jeg hedder Tobias og er en passioneret webudvikler med fokus på frontend-udvikling. Jeg er uddannet multimediedesigner og læser nu videre på webudvikling som en top-up-uddannelse.",
        paragraph2:
          "Jeg elsker at fordybe mig i ting - uanset om det er en ny fantasy verden, træning i fitnesscenteret, eller et spændende kodeprojekt! Jeg har altid været en problemløser af natur, lige fra matematikopgaver i folkeskolen til nu at finde løsninger som webudvikler.",
        paragraph3:
          "Med mit fokus inden for frontend-udvikling sætter jeg pris på detaljen - især når det kommer til interaktivitet og design. Jeg er altid nysgerrig efter at lære noget nyt og kaster mig gerne over nye teknologier og trends.",
        paragraph4:
          "Lige nu leder jeg efter et studiejob, hvor jeg kan få lov til at bygge videre på min erfaring, samtidig med at jeg lærer en masse nyt. Hvis det lyder som noget for jer, så tøv ikke med at kontakte mig – jeg glæder mig til at høre fra jer!",
      },
    },
  },
  projectCoelm: {
    title: "Cølm",
    about: {
      heading: "Om Projektet",
      text: {
        paragraph1:
          "Dette projekt fokuserer på udviklingen af en ny visuel identitet samt et proof-of-concept webshop-design for Nimo Skin’s kommende brand, cølm.",
        paragraph2:
          "Projektet er udarbejdet i React med Vite som værktøj, hvilket har givet et hurtigt og effektivt udviklingsmiljø. Målet har været at skabe en engagerende og interaktiv side, hvilket er opnået ved hjælp af animationsbibliotekerne 'Motion' og 'GSAP'.",
        paragraph3:
          "Til styling af siden har jeg anvendt Tailwind CSS, hvilket har gjort det enkelt at skabe en responsiv og moderne brugeroplevelse. Alt indhold på siden, herunder billeder skabt i Blender, samt design og animationer, er udviklet fra bunden.",
        paragraph4:
          " Nimo Skin ønskede at udvikle en visuel identitet, der skiller sig ud fra deres eksisterende brand ved at fremstå mere minimalistisk, eksklusiv og moderne. Dette blev opnået gennem research af målgruppen, markedet samt Nimo Skin's værdier og visioner. Resultatet er et design og en webshop, der opnår netop dette.",
      },
    },
    accordion: {
      heading: "Teknologier",
      items: {
        item1: {
          content:
            "React bruges til at bygge interaktive brugergrænseflader med komponenter. Jeg har brugt det til at opbygge hele strukturen og funktionaliteten af websitet, hvilket har gjort det nemt at genbruge kode og opnå en effektiv udviklingsproces.",
        },
        item2: {
          content:
            "Vite er et værktøj, der gør udviklingen hurtig og effektiv ved at levere øjeblikkelige opdateringer under kodning. Jeg har brugt det til at gøre udviklingsprocessen mere smidig og effektiv.",
        },
        item3: {
          content:
            "Tailwind er et CSS framework, der gør det nemt at opbygge en responsiv og moderne brugergrænseflade ved brug af utility classes. Jeg har brugt det til at style websitet og opnå en ensartet og moderne design.",
        },
        item4: {
          content:
            "Motion gør det supernemt at lave fede animationer i React. Jeg har brugt det til at skabe dynamiske elementer og animationer, der gør websitet mere levende og engagerende. Herunder bl.a. knapper og andre interaktive elementer.",
        },
        item5: {
          content:
            "JavaScript er brugt gennem React til at tilføje interaktivitet og dynamik til websitet. Jeg har anvendt det til at implementere funktioner og interaktioner, der gør brugeroplevelsen mere engagerende og intuitiv.",
        },
        item6: {
          content:
            "GSAP er et animationsbibliotek, der gør det nemt at lave avancerede og imponerende animationer. Jeg har brugt det til de mere komplekse animationer på websitet, som ses på 'om os'-siden og i webshoppen.",
        },
      },
    },
  },
} as const;
