// locales/da.ts
export default {
  navigation: {
    back: "Forside",
    projects: "Projekter",
    about: "Om",
  },
  frontPage: {
    hero: {
      title: "Passioneret webudvikler med speciale i frontend-udvikling",
      location: "Aarhus",
      button: {
        projects: "Projekter",
        about: "Om Mig",
      },
    },
    skills: {
      link: "Læs mere",
    },
    projects: {
      title: "Projekter",
      titleAll: "Alle Projekter",
      viewAll: "Alle projekter",
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
        liveScores: {
          name: "Live Scores",
          brief: "En fodbold livescore app",
        },
        palette: {
          name: "Palette",
          brief: "En farvepalet generator med LLM integration",
        },
        bookSpace: {
          name: "Book Space",
          brief: "Eksamensprojekt i avanceret webudvikling",
        },
        candidate: {
          name: "Candidate",
          brief: "En kandidatportal med LLM integration",
        },
        fitApp: {
          name: "Fit App",
          brief: "En web app til fitness tracking og træningsplanlægning",
        },
      },
    },
    about: {
      title: "Hvem er jeg?",
      text: {
        intro: "Hejsa 👋🏻",
        paragraph1:
          "Jeg hedder Tobias og er en 27-årig webudvikler, med en passion for både frontend- og backend-udvikling. Jeg er uddannet multimediedesigner og læser nu videre på webudvikling som en top-up-uddannelse.",
        paragraph2:
          "Jeg elsker at fordybe mig i ting - uanset om det er en ny fantasy verden, træning i fitnesscenteret, eller et spændende kodeprojekt! Jeg har altid været en problemløser af natur, lige fra matematikopgaver i folkeskolen til nu at finde løsninger som webudvikler.",
        paragraph3:
          "Som webudvikler sætter jeg pris på detaljen - uanset om det interaktivitet og design eller optimeret kode. Jeg er altid nysgerrig efter at lære noget nyt og kaster mig gerne over nye teknologier og trends.",
        paragraph4:
          "Jeg starter i praktik til August 2025 hos Impact, hvor jeg skal arbejde med frontend-udvikling. Jeg glæder mig til at få mere erfaring og udvikle mine færdigheder yderligere.",
      },
    },
  },
  testUser: {
    heading: "Testbruger:",
    user: "Brugernavn: ",
    email: "Email: ",
    password: "Kodeord: ",
  },
  projectCoelm: {
    title: "Cølm",
    about: {
      heading: "Om Projektet",
      badges: {
        badge1: "Frontend",
      },
      text: {
        paragraph1:
          "Dette projekt fokuserer på udviklingen af en ny visuel identitet samt et proof-of-concept webshop-design for Nimo Skin’s kommende brand, cølm.",
        paragraph2:
          "Projektet er udarbejdet i React med Vite som værktøj, hvilket har givet et hurtigt og effektivt udviklingsmiljø. Målet har været at skabe en engagerende og interaktiv side, hvilket er opnået ved hjælp af animationsbibliotekerne Motion og GSAP.",
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
            "Jeg har brugt React til at bygge en struktureret og modulær frontend, hvor komponenter genbruges for at skabe en skalerbar kodebase. Det har gjort det lettere at udvikle og udvide projektet efter behov.",
        },
        item2: {
          content:
            "Jeg har brugt Vite som react framework til at udvikle websitet. Vite har gjort det nemt at starte et nyt projekt i et mere simpelt react miljø, hvilket har optimeret udviklingsprocessen.",
        },
        item3: {
          content:
            "Til styling har jeg anvendt Tailwind CSS, hvilket har givet mig mulighed for hurtigt at opbygge et responsivt og moderne design. Det har gjort det nemt at holde en ensartet stil og sikre, at sitet fungerer godt på alle enheder.",
        },
        item4: {
          content:
            "Motion har gjort det muligt at tilføje flydende animationer og interaktioner, der forbedrer brugeroplevelsen. Jeg har blandt andet brugt det til animerede knapper og sektioner, der giver websitet et mere dynamisk og engagerende udtryk.",
        },
        item5: {
          content:
            "JavaScript er brugt gennem React til at tilføje interaktivitet og dynamik til websitet. Jeg har anvendt det til at implementere funktioner og interaktioner, der gør brugeroplevelsen mere engagerende og intuitiv.",
        },
        item6: {
          content:
            "GSAP har været et kraftfuldt værktøj til at skabe mere komplekse animationer. Jeg har brugt det til at skabe engagerende effekter på blandt andet 'Om os'-siden og i webshoppen, hvor animationerne hjælper med at guide brugeren gennem indholdet.",
        },
      },
    },
  },
  projectBookBuddy: {
    title: "Book Buddy",
    about: {
      heading: "Om Projektet",
      badges: {
        badge1: "Frontend",
        badge2: "Backend",
        badge3: "API",
      },
      text: {
        paragraph1:
          "Dette projekt er en web app kaldet 'Book Buddy', som er udviklet som et fritidsprojekt. Da jeg selv nyder at læse og fordybe mig i bøger, var det oplagt for mig at udvikle en app hvor jeg kan gemme og holde styr på mine bøger.",
        paragraph2:
          "Appen er bygget med React med Next.js som framework, og bruger MySQL til at gemme data om brugerne og de bøger, de har gemt. Appen gør det muligt at oprette en profil som man kan bruge til at individuelt at gemme bøger og oprette hylder/lister til at organisere dem.",
        paragraph3:
          "For at kunne søge efter bøger og hente information om dem, bruger appen Google Books API, som har et kæmpe bibliotek af bøger, til at finde bøger og information om dem.",
        paragraph4:
          "Jeg har brugt Tailwind CSS til at style appen, og Motion til at tilføje animationer til knapper og modal vinduer, hvilket har gjort appen mere levende og interaktiv.",
        testUser: {
          user: "sylto",
          password: "hello",
        },
      },
    },
    accordion: {
      heading: "Teknologier",
      items: {
        item1: {
          content:
            "Jeg har brugt React til at bygge en struktureret og modulær frontend, hvor komponenter genbruges for at skabe en skalerbar kodebase. Det har gjort det lettere at udvikle og udvide projektet efter behov.",
        },
        item2: {
          content:
            "I dette projekt har jeg brugt Next.js til at bygge en hurtig og brugervenlig webapplikation, hvor brugere kan søge efter bøger og gemme dem til senere brug. Next.js har gjort det muligt at implementere server-side rendering (SSR).",
        },
        item3: {
          content:
            "Jeg har brugt mySQL til at oprette en database, der indeholder information omkring brugerne og de bøger, de har gemt. Databasen er designet til effektivt at håndtere dataen på en sikker og skalerbar måde, så der ikke opstår fejl eller tab af data.",
        },
        item4: {
          content:
            "Motion har gjort det muligt at tilføje flydende animationer og interaktioner, der forbedrer brugeroplevelsen. Jeg har blandt andet brugt det til animerede knapper og sektioner, der giver websitet et mere dynamisk og engagerende udtryk.",
        },
        item5: {
          content:
            "Til styling har jeg anvendt Tailwind CSS, hvilket har givet mig mulighed for hurtigt at opbygge et responsivt og moderne design. Det har gjort det nemt at holde en ensartet stil og sikre, at sitet fungerer godt på alle enheder.",
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
      badges: {
        badge1: "Frontend",
        badge2: "Backend",
        badge3: "API",
      },
      text: {
        paragraph1:
          "Lendr er udviklet i forbindelse med et skoleprojekt på webudvikling. Projektet skulle bestå af to forskellige frontends som begge skulle tilgå den samme backend. Vi har skabt en web app som har til formål at forbinde lejere og udlejere af kufferter og tasker. Brugere kan altså enten leje en kuffert eller tjene penge på at udleje en kuffert.",
        paragraph2:
          "Vi har brugt Next.js til at bygge brugerappen og Remix til at bygge et admin dashboard til Lendr's medarbejdere.",
        paragraph3:
          "Vi har brugt MySQL til at oprette en database, der indeholder information om brugerne og de kufferter og tasker, der er tilgængelige for udlejning. Vi har yderligere udviklet en API i php, som begge frontends kan tilgå for at hente og opdatere data.",
        testUser: {
          email: "sylto@gmail.com",
          password: "hello",
        },
      },
    },
    accordion: {
      heading: "Teknologier",
      items: {
        item1: {
          content:
            "Vi har brugt React til at skabe en dynamisk og interaktiv brugeroplevelse. Ved at opbygge vores website med genanvendelige komponenter, har vi optimeret udviklingsprocessen og sikret en ensartet brugergrænseflade.",
        },
        item2: {
          content:
            "For at levere en hurtig og effektiv brugerapp til Lendr, valgte vi Next.js. Dette framework har gjort det muligt for os at optimere ydeevnen og samtidig skabe en problemfri oplevelse for vores brugere.",
        },
        item3: {
          content:
            "I denne opgave har vi brugt Remix til at bygge et admin dashboard til Lendr, som skal fungere som et kontrolpanel for supportmedarbejdere og administratorer.",
        },
        item4: {
          content:
            "I denne opgave har vi brugt MySQL til at oprette en database, der indeholder information om brugerne og de kufferter og tasker, der er tilgængelige for udlejning.",
        },
        item5: {
          content:
            "Vores PHP-baserede API fungerer som bindeled mellem frontend og database. Dette har muliggjort en fleksibel og sikker dataudveksling, så brugere og administratorer kan interagere med platformen.",
        },
        item6: {
          content:
            "For at opnå et moderne og brugervenligt design, har vi integreret Shadcn komponenter. Dette har accelereret vores UI-udvikling og givet os mulighed for at tilpasse udseendet, så det passer perfekt til Lendr's visuelle identitet.",
        },
        item7: {
          content:
            "Med Tailwind CSS har vi skabt et responsivt og stilfuldt design. Dette framework har givet os mulighed for hurtigt at style vores website og sikre en ensartet visuel oplevelse på tværs af forskellige enheder.",
        },
        item8: {
          content:
            "JavaScript er brugt gennem React til at tilføje interaktivitet og dynamik til websitet. Vi har anvendt det til at implementere funktioner og interaktioner, der gør brugeroplevelsen mere engagerende og intuitiv.",
        },
      },
    },
  },
  projectLiveScores: {
    title: "Live Scores",
    about: {
      heading: "Om Projektet",
      badges: {
        badge1: "Frontend",
        badge2: "API",
      },
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
  projectPalette: {
    title: "Palette",
    about: {
      heading: "Om Projektet",
      badges: {
        badge1: "Frontend",
        badge2: "Backend",
        badge3: "LLM",
      },
      text: {
        paragraph1:
          "Palette er en farvepalet generator, som er udviklet som et fritidsprojekt. Appen kan generere tilfældige farvepaletter, som brugeren kan gemme i sin profil. Derudover har appen en AI chatbot, som kan hjælpe brugeren med at finde frem til paletter som passer til deres behov.",
        paragraph2:
          "Appen er bygget i Next.js med TypeScript, og bruger MongoDB til at gemme data om brugerne og de farvepaletter, de har gemt. Appen bruger også Mistral API som LLM til at kunne generere farvepaletter i chat vinduet.",
        paragraph3:
          "Jeg har lavet appen som en øvelse i at arbejde med AI og MongoDB. Jeg har genskabt designet fra den eksisterende app 'Coolors', som er en farvepalet generator.",
        testUser: {
          email: "sylto@gmail.com",
          password: "hello1234",
        },
      },
    },
    accordion: {
      heading: "Teknologier",
      items: {
        item1: {
          content:
            "Jeg har brugt React til at skabe en interaktiv og dynamisk brugergrænseflade for min farvepaletgenerator. Ved at opbygge siden med genanvendelige komponenter, har jeg sikret en effektiv udviklingsproces og en brugervenlig oplevelse.",
        },
        item2: {
          content:
            "Next.js har været fundamentet for at skabe en hurtig og effektiv webapplikation. Jeg har brugt det til at udvikle min farvepaletgenerator, hvor brugerne nemt kan generere og gemme deres egne farvepaletter.",
        },
        item3: {
          content:
            "For at håndtere brugerdata og gemte farvepaletter har jeg implementeret MongoDB. Denne NoSQL-database giver mig fleksibiliteten til at gemme og hente data effektivt, hvilket er afgørende for funktionaliteten af min applikation.",
        },
        item4: {
          content:
            "Mistral har været en central del af at tilføje intelligens til min applikation. Jeg har integreret Mistral i chatvinduet, så brugerne kan få hjælp til at generere farvepaletter, hvilket giver en mere intuitiv og assisteret oplevelse.",
        },
        item5: {
          content:
            "Med Tailwind CSS har jeg hurtigt og effektivt stylet min farvepaletgenerator. Det har gjort det muligt for mig at skabe et moderne og responsivt design, der fungerer godt på alle enheder.",
        },
        item6: {
          content:
            "TypeScript har hjulpet mig med at skrive mere robust og vedligeholdelig kode. Ved at tilføje typekontrol til JavaScript har jeg reduceret fejl og forbedret udviklingsprocessen.",
        },
        item7: {
          content:
            "Zustand er et state management library til React. Jeg har brugt det til at implementere, at brugere kan låse enkelte farver i paletterne uden at miste 'locked state' efter hver ny paletgenerering. Dette giver brugerne mere kontrol over deres farvevalg.",
        },
      },
    },
  },
  projectBookSpace: {
    title: "Book Space",
    about: {
      heading: "Om Projektet",
      badges: {
        badge1: "Frontend",
        badge2: "Backend",
      },
      text: {
        disclaimer:
          "Siden er hostet på en gratis version a Render, og kan derfor tage lidt tid at spinne op. Det vil typisk tage mellem 1-3 minutter.",
        paragraph1:
          "Book Space er et eksamensprojekt, som jeg har udviklet i forbindelse med min uddannelse på 2. semester. Projektet er en webapp, der giver brugerne mulighed for at oprette en profil og gemme deres yndlingsbøger, oprette lister, se anbefalinger og tracke deres læsevaner.",
        paragraph2:
          " Til dette projekt fik vi udleveret en Figma prototype, som vi kunne bruge som udgangspunkt for vores design, hvilket jeg har for det meste har fulgt.",
        paragraph3:
          "Appen er bygget i React Router v7 med TypeScript, og bruger MongoDB til at gemme data om brugerne og de bøger, de har gemt. Appen bruger et JSON dataset med bøger, som vi fik udleveret i forbindelse med projektet.",
        paragraph4:
          "Jeg har brugt Tailwind CSS til at style appen, og Motion til at tilføje animationer til filtre og modal vinduer, hvilket har gjort appen mere levende og interaktiv.",
        testUser: {
          email: "sylto@gmail.com",
          password: "hello",
        },
      },
    },
    accordion: {
      heading: "Teknologier",
      items: {
        item1: {
          content:
            "Jeg har brugt React til at skabe en interaktiv og dynamisk brugergrænseflade for mit eksamensprojekt. Brugen af React har gjort det nemt at opbygge en struktureret kodebase.",
        },
        item2: {
          content:
            "Jeg har brugt React Router v7 som react framework til at udvikle websitet. Ved hjælp af React Router's 'loader' og 'action' funktioner har jeg nemt kunne hente og opdatere data fra MongoDB direkte i komponenterne.",
        },
        item3: {
          content:
            "For at håndtere brugerdata og gemte bøger har jeg brugt MongoDB og Mongoose. Dette har gjort det muligt at gemme og hente data effektivt, hvilket er afgørende for funktionaliteten af appen.",
        },
        item4: {
          content:
            "Motion har gjort det muligt at tilføje flydende animationer og interaktioner, der forbedrer brugeroplevelsen. Jeg har blandt andet brugt det til filtre og modal vinduer, der giver appen et mere dynamisk og engagerende udtryk.",
        },
        item5: {
          content:
            "Med Tailwind CSS har jeg hurtigt og effektivt stylet websitet. Det har gjort det muligt for mig, hurtigt at style komponenter og sikre en ensartet visuel oplevelse på tværs af forskellige sider.",
        },
        item6: {
          content:
            "TypeScript har hjulpet mig med at skrive mere robust og vedligeholdelig kode. Ved at tilføje typekontrol til JavaScript har jeg reduceret fejl og forbedret udviklingsprocessen.",
        },
      },
    },
  },
  projectCandidate: {
    title: "Candidate",
    about: {
      heading: "Om Projektet",
      badges: {
        badge1: "Frontend",
        badge2: "Backend",
        badge3: "LLM",
      },
      text: {
        disclaimer:
          "Dette projekt linker til en staging-side, som ikke er i produktion. Profilerne kan derfor være forældede, og nogle funktioner kan være deaktiveret.",
        paragraph1:
          "Candidate er et projekt, som er udviklet i forbindelse med 2. semester på Webudvikling. Her skulle vi omskrive den eksisterende kandidatportal candidate.dk til React Router 7 og TypeScript. Projektet er et samarbejde mellem mig og mine klassekammerater.",
        paragraph2:
          "Siden er en kandidatportal, der forbinder studerende med virksomheder, der søger kandidater til praktikpladser og jobs. Som eksamensprojekt har jeg, i samarbejde med min eksamensgruppe, udviklet en AI-chatbot beregnet til at hjælpe virksomheder med at finde de rette kandidater til deres stillinger.",
        paragraph3:
          "Vi har gjort brug af Mistral's API som LLM til at kunne generere svar i chatvinduet. Da vi bruger MongoDB som database, har vi benyttet vektorbaseret søgning til at finde relevante profiler i databasen – her har vi brugt Mistral's embedding-model til at generere embeddings af profilerne.",
        testUser: {
          email: "twolmar@gmail.com",
          password: "hello",
        },
      },
    },
    accordion: {
      heading: "Teknologier",
      items: {
        item1: {
          content:
            "Vi har brugt React til at skabe en interaktiv og dynamisk brugergrænseflade til vores eksamensprojekt. Brugen af React har gjort det nemt at opbygge en struktureret kodebase.",
        },
        item2: {
          content:
            "Vi har brugt React Router v7 som React-framework til at udvikle websitet. Ved hjælp af React Routers 'loader'- og 'action'-funktioner har vi kunnet hente data og behandle forespørgsler.",
        },
        item3: {
          content:
            "Vi har brugt MongoDB som database og i forlængelse heraf brugt Mongoose til at behandle dataen i React. Dette har gjort det muligt at gemme og hente data effektivt.",
        },
        item4: {
          content:
            "Motion har gjort det muligt at tilføje flydende animationer og interaktioner, der forbedrer brugeroplevelsen. Vi har i dette projekt brugt det til at animere chatvinduet.",
        },
        item5: {
          content:
            "Vi har brugt Tailwind CSS til at style vores chatvindue. Da resten af siden også gør brug af Tailwind, har det gjort det nemt at holde en ensartet stil.",
        },
        item6: {
          content:
            "TypeScript har hjulpet os med at skrive mere robust og vedligeholdelig kode. Ved at tilføje typekontrol til JavaScript har vi reduceret fejl og forbedret udviklingsprocessen.",
        },
        item7: {
          content:
            "Mistral er et AI-API, der giver adgang til forskellige AI-modeller. Vi har brugt Mistral til at generere svar i chatvinduet samt til at generere embeddings af profilerne.",
        },
      },
    },
  },
  projectFitApp: {
    title: "Fit App",
    about: {
      heading: "Om Projektet",
      badges: {
        badge1: "Frontend",
        badge2: "Backend",
      },
      text: {
        disclaimer:
          "Funktionaliteten til at oprette nye brugere er slået fra. Brug derfor testbrugeren til at logge ind.",
        paragraph1:
          "Fit App er et personligt hobbyprojekt, som jeg har udviklet for at kunne tracke min træning og mine fremskridt. Appen giver mulighed for at oprette en profil, oprette træningsplaner, logge træning og se statestikker over tid.",
        paragraph2:
          "Appen er bygget i Next.js med TypeScript, og bruger Supabase til at håndtere bruger- og træningsdata. Der er tilføjet grundlæggende PWA-support, så appen kan installeres direkte på mobilen og bruges som en normal app.",
        paragraph3:
          "Jeg ønskede en nem og hurtig måde at logge min træning på og samtidig kunne følge mine fremskridt over tid. Derfor ville jeg samle de funktioner, jeg havde brug for, ét sted – med mulighed for at tilpasse dem til mine egne behov.",
        testUser: {
          email: "test@test.com",
          password: "hello123",
        },
      },
    },
    accordion: {
      heading: "Teknologier",
      items: {
        item1: {
          content:
            "Jeg har brugt Next.js som React-framework til at udvikle projektet, hvilket har gjort det muligt at opbygge en struktureret kodebase. Her har jeg gjort brug af server actions til at håndtere dataopdateringer.",
        },
        item2: {
          content:
            "Jeg har brugt Supabase som database, hvilket snakker godt sammen med Next.js. Supabase tilbyder en række funktioner, der gør det nemt at håndtere brugerdata og autentificering.",
        },
        item3: {
          content:
            "Motion har gjort det muligt at tilføje flydende animationer og interaktioner, der forbedrer brugeroplevelsen. Jeg har i dette projekt brugt det til at animere de forskellige modal vinduer og interaktive elementer.",
        },
        item4: {
          content:
            "Jeg har brugt Tailwind CSS til at style mine komponenter. Tailwind har gjort det nemt at implementere responsive design og sikre en ensartet stil på tværs af applikationen.",
        },
        item5: {
          content:
            "TypeScript har hjulpet mig med at skrive mere robust og vedligeholdelig kode. Ved at tilføje typekontrol til JavaScript har jeg reduceret fejl og forbedret udviklingsprocessen.",
        },
      },
    },
  },
} as const;
