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
  projectBookBuddy: {
    title: "Book Buddy",
    about: {
      heading: "Om Projektet",
      text: {
        paragraph1:
          "Dette projekt er en web app kaldet 'Book Buddy', som er udviklet som et fritidsprojekt. Da jeg selv nyder at læse og fordybe mig i bøger, var det oplagt for mig at udvikle en app hvor jeg kan gemme og holde styr på mine bøger.",
        paragraph2:
          "Appen er bygget med React med Next.js som framework, og bruger MySQL til at gemme data om brugerne og de bøger, de har gemt. Appen gør det muligt at oprette en profil som man kan bruge til at individuelt at gemme bøger og oprette hylder/lister til at organisere dem.",
        paragraph3:
          "For at kunne søge efter bøger og hente information om dem, bruger appen Google Books API, som har et kæmpe bibliotek af bøger, til at finde bøger og information om dem.",
        paragraph4:
          "Jeg har brugt Tailwind CSS til at style appen, og Motion til at tilføje animationer til knapper og modal vinduer, hvilket har gjort appen mere levende og interaktiv.",
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
            "Next.js er et moderne React-baseret framework, der gør det nemt at bygge hurtige og effektive webapplikationer. Det understøtter server-side rendering (SSR), hvilket optimerer ydelsen og brugeroplevelsen. I dette projekt har jeg brugt Next.js til at skabe en applikation, hvor brugerne kan søge efter bøger og gemme dem til senere brug.",
        },
        item3: {
          content:
            "Jeg har brugt mySQL til at oprette en database, der indeholder information omkring brugerne og de bøger, de har gemt. Databasen er designet til effektivt at håndtere dataen på en sikker og skalerbar måde, så der ikke opstår fejl eller tab af data.",
        },
        item4: {
          content:
            "Motion er et animationsbibliotek til JavaScript og React, som gør det super nemt at skabe flotte og fængende animationer. I dette projekt har jeg brugt Motion til at tilføje animationer til kanpper og modal vinduer, hvilket har gjort websitet mere levende og interaktivt.",
        },
        item5: {
          content:
            "Tailwind er et CSS framework, der gør det nemt at opbygge en responsiv og moderne brugergrænseflade ved brug af utility classes. Jeg har brugt det til at style websitet og opnå en ensartet og moderne design.",
        },
        item6: {
          content:
            "JavaScript er brugt gennem React til at tilføje interaktivitet og dynamik til websitet. Jeg har anvendt det til at implementere funktioner og interaktioner, der gør brugeroplevelsen mere engagerende og intuitiv.",
        },
      },
    },
  },
  projectLendr: {
    title: "Lendr",
    about: {
      heading: "Om Projektet",
      text: {
        paragraph1:
          "Lendr er udviklet i forbindelse med et skoleprojekt på webudvikling. Projektet skulle bestå af to forskellige frontends som begge skulle tilgå den samme backend. Vi har skabt en web app som har til formål at forbinde lejere og udlejere af kufferter og tasker. Brugere kan altså enten leje en kuffert eller tjene penge på at udleje en kuffert.",
        paragraph2:
          "Vi har brugt Next.js til at bygge brugerappen og Remix til at bygge et admin dashboard til Lendr's medarbejdere.",
        paragraph3:
          "  Vi har brugt MySQL til at oprette en database, der indeholder information om brugerne og de kufferter og tasker, der er tilgængelige for udlejning. Vi har yderligere udviklet en API i php, som begge frontends kan tilgå for at hente og opdatere data.",
      },
    },
    accordion: {
      heading: "Teknologier",
      items: {
        item1: {
          content:
            "React bruges til at bygge interaktive brugergrænseflader med komponenter. Vi har brugt det til at opbygge hele strukturen og funktionaliteten af websitet, hvilket har gjort det nemt at genbruge kode og opnå en effektiv udviklingsproces. ",
        },
        item2: {
          content:
            "Next.js er et moderne React-baseret framework, der gør det nemt at bygge hurtige og effektive webapplikationer. I denne opgave har vi brugt Next.js til at bygge brugerappen til Lendr, som er en platform, der forbinder lejere og udlejere af kufferter og tasker.",
        },
        item3: {
          content:
            "Remix er et moderne React-baseret framework, der ligesom Next.js gør det nemt at bygge hurtige og effektive webapplikationer. I denne opgave har vi brugt Remix til at bygge et admin dashboard til Lendr, som skal fungere som et kontrolpanel for supportmedarbejdere og administratorer.",
        },
        item4: {
          content:
            "MySQL er et programmeringssprog, der bruges til at oprette og administrere databaser. I denne opgave har vi brugt MySQL til at oprette en database, der indeholder information om brugerne og de kufferter og tasker, der er tilgængelige for udlejning.",
        },
        item5: {
          content:
            "PHP er i denne opgave brugt til at udvikle en API, som kan tilgås af forskellige frontends. API'en bruges til at hente og opdatere data i databasen, så brugere/admins kan se og administrere deres kufferter og tasker.",
        },
        item6: {
          content:
            "Shadcn er en samling af genanvendelige komponenter, der er designet til at gøre det nemt at opbygge en moderne og responsiv brugergrænseflade. Vi har i dette projekt flere af shadcn's komponenter, til at hurtugt og nemt at opbygge en flot og brugervenlig brugergrænseflade. Vi har redigeret og tilpasset komponenterne, så de passede til vores behov.",
        },
        item7: {
          content:
            "Tailwind er et CSS framework, der gør det nemt at opbygge en responsiv og moderne brugergrænseflade ved brug af utility classes. Vi har brugt det til at style websitet og opnå en ensartet og moderne design.",
        },
        item8: {
          content:
            "JavaScript er brugt gennem React til at tilføje interaktivitet og dynamik til websitet. Vi har anvendt det til at implementere funktioner og interaktioner, der gør brugeroplevelsen mere engagerende og intuitiv.",
        },
      },
    },
  },
  projectGlassFill: {
    title: "Glass Fill",
    about: {
      heading: "Om Projektet",
      text: {
        paragraph1:
          "Dette Projekt er en hjemmeside, der er bugget med basis HTML, CSS og JavaScript. Hjemmesiden er en simpel side, der viser en animation af et glas, der gradvist fyldes med væske når man scroller ned på siden.",
        paragraph2:
          "Jeg har brugt HTML til at opbygge strukturen af siden, CSS til at style elementerne og JavaScript til at tilføje interaktivitet og animationer.",
        paragraph3:
          "Siden viser også den oprindelige After Effects animation som siden er baseret på.",
      },
    },
    accordion: {
      heading: "Teknologier",
      items: {
        item1: {
          content:
            "HTML er det primære sprog, der bruges til at opbygge websider og applikationer. Jeg har brugt det til at strukturere indholdet og opbygge layoutet af websitet.",
        },
        item2: {
          content:
            "CSS er et sprog, der bruges til at style og designe websider. Jeg har brugt det til at tilføje farver, skrifttyper, layout og animationer til websitet.",
        },
        item3: {
          content:
            "JavaScript er et programmeringssprog, der bruges til at tilføje interaktivitet og dynamik til websider. Jeg har brugt det til at implementere funktioner og interaktioner, der gør brugeroplevelsen mere engagerende.",
        },
      },
    },
  },
  projectLiveScores: {
    title: "Live Scores",
    about: {
      heading: "Om Projektet",
      text: {
        paragraph1:
          "Live Scores er en fodbold-livescore-app, der viser livekampe fra de største ligaer i Europa. Appen er bygget med TypeScript i Next.js og bruger to forskellige fodbold API'er til at hente live resultater og ligatabeller.",
        paragraph2:
          "'api-football.com' anvendes til at hente live resultater, men da jeg benytter deres gratis version, er appen begrænset til 100 API-kald om dagen. 'football-data.org' bruges til at hente ligatabeller. Ved at kombinere de to API'er kan jeg blande data fra begge API'ers gratis udgaver.",
        paragraph3:
          "Appen giver mulighed for at se live resultater, kampstatistikker, holdopstillinger og ligatabeller. ",
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
            "Next.js er et moderne React-baseret framework, der gør det nemt at bygge hurtige og effektive webapplikationer. I dette projekt har jeg brugt Next.js til at bygge en fodbold livescore app, hvor man kan se live resultater og statistikker.",
        },
        item3: {
          content:
            "Tailwind er et CSS framework, der gør det nemt at opbygge en responsiv og moderne brugergrænseflade ved brug af utility classes. Jeg har brugt det til at style websitet og opnå et ensartet og moderne design.",
        },
        item4: {
          content:
            "TypeScript er et programmeringssprog, der bygger på JavaScript og tilføjer typekontrol. Jeg har brugt TypeScript til at skrive koden i dette projekt, hvilket har givet mig bedre kodekvalitet og færre fejl.",
        },
        item5: {
          content:
            "API-Sports er en API der giver adgang til sportsdata fra forskellige sportsgrene, herunder fodbold. Jeg har brugt API-Sports til at hente live fodbold resultater til min livescore app.",
        },
        item6: {
          content:
            "Football-data.org er en API der giver adgang til fodbolddata fra forskellige ligaer og turneringer. Jeg har brugt Football-data.org til at hente ligatabeller til min livescore app.",
        },
      },
    },
  },
} as const;
