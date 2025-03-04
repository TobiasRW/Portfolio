// locales/en.ts
export default {
  navigation: {
    back: "Go Back",
    projects: "Projects",
    about: "About",
  },
  frontPage: {
    hero: {
      title: "Passionate web developer specializing in frontend development",
      button: {
        projects: "Projects",
        about: "About",
      },
    },
    projects: {
      title: "Projects",
      project: {
        coelm: {
          name: "Coelm",
          brief: "Final project as a multimedia design student",
        },
        bookBuddy: {
          name: "Book Buddy",
          brief: "A book app for readers to organize their books",
        },
        lendr: {
          name: "Lendr",
          brief: "An app for renting suitcases and travel bags",
        },
        glassFill: {
          name: "Glass Fill",
          brief: "Interactive website with scroll effects",
        },
        liveScores: {
          name: "Live Scores",
          brief: "A football live score app",
        },
        palette: {
          name: "Palette",
          brief: "A color palette generator with AI chatbot",
        },
      },
    },
    about: {
      title: "Who am I?",
      text: {
        intro: "Hello There 👋🏻",
        paragraph1:
          "My name is Tobias, and I’m a 26-year-old web developer with a passion for both frontend and backend development. I have a degree in multimedia design and am currently continuing my studies in web development with a bachelor’s degree in web development.",
        paragraph2:
          "I love immersing myself in things — whether it's exploring a new fantasy world, working out at the gym, or an exciting coding project! I have always been a problem solver by nature, from solving math problems in school to now finding solutions as a web developer.",
        paragraph3:
          "As a web developer, I appreciate the details — from interactivity and design to optimized code. I'm always curious to learn something new and eager to explore new technologies and trends.",
        paragraph4:
          "Right now, I’m looking for an internship where I can build on my experience while learning a lot along the way. If that sounds like something for you, don’t hesitate to reach out—I look forward to hearing from you!",
      },
    },
  },
  projectCoelm: {
    title: "Coelm",
    about: {
      heading: "About the Project",
      badges: {
        badge1: "Frontend",
      },
      text: {
        paragraph1:
          "This project focuses on developing a new visual identity and a proof-of-concept webshop design for Nimo Skin’s upcoming brand, coelm.",
        paragraph2:
          "The project was built using React with Vite as a tool, providing a fast and efficient development environment. The goal was to create an engaging and interactive site, which was achieved using the animation libraries 'Motion' and 'GSAP'.",
        paragraph3:
          "For the styling of the site, I used Tailwind CSS, making it easy to create a responsive and modern user experience. All content on the site, including images created in Blender, as well as the design and animations, were developed from scratch.",
        paragraph4:
          "Nimo Skin aimed to develop a visual identity that stands out from their existing brand by appearing more minimalist, exclusive, and modern. This was achieved through research on the target audience, market, and Nimo Skin’s values and visions. The result is a design and webshop that accomplish exactly that.",
      },
    },
    accordion: {
      heading: "Technologies",
      items: {
        item1: {
          content:
            "I used React to build a structured and modular frontend, where components are reused to create a scalable codebase. This has made it easier to develop and expand the project as needed.",
        },
        item2: {
          content:
            "I used Vite as a React framework to develop the website. Vite made it easy to start a new project in a simpler React environment, optimizing the development process.",
        },
        item3: {
          content:
            "For styling, I used Tailwind CSS, which allowed me to quickly build a responsive and modern design. This made it easy to maintain a consistent style and ensure that the site works well on all devices.",
        },
        item4: {
          content:
            "Motion enabled me to add smooth animations and interactions that enhance the user experience. I used it for animated buttons and sections, giving the website a more dynamic and engaging feel.",
        },
        item5: {
          content:
            "JavaScript was used through React to add interactivity and dynamics to the website. I implemented functions and interactions that make the user experience more engaging and intuitive.",
        },
        item6: {
          content:
            "GSAP has been a powerful tool for creating more complex animations. I used it to develop engaging effects on the 'About Us' page and in the webshop, where the animations help guide users through the content.",
        },
      },
    },
  },
  projectBookBuddy: {
    title: "Book Buddy",
    about: {
      heading: "About the Project",
      badges: {
        badge1: "Frontend",
        badge2: "Backend",
        badge3: "API",
      },
      text: {
        paragraph1:
          "This project is a web app called 'Book Buddy,' developed as a personal side project. Since I enjoy reading and immersing myself in books, it was a natural choice for me to develop an app where I can store and keep track of my books.",
        paragraph2:
          "The app is built with React using Next.js as the framework and utilizes MySQL to store data about users and their saved books. The app allows users to create a profile, which they can use to individually save books and create shelves/lists to organize them.",
        paragraph3:
          "To search for books and retrieve information about them, the app uses the Google Books API, which has a vast library of books, enabling users to find books and detailed information about them.",
        paragraph4:
          "I have used Tailwind CSS to style the app and Motion to add animations to buttons and modal windows, making the app feel more dynamic and interactive.",
        testUser: {
          heading: "Test User:",
          user: "Username: sylto",
          password: "Password: hello",
        },
      },
    },
    accordion: {
      heading: "Technologies",
      items: {
        item1: {
          content:
            "I used React to build a structured and modular frontend, where components are reused to create a scalable codebase. This has made it easier to develop and expand the project as needed.",
        },
        item2: {
          content:
            "In this project, I used Next.js to build a fast and user-friendly web application where users can search for books and save them for later. Next.js made it possible to implement server-side rendering (SSR).",
        },
        item3: {
          content:
            "I used MySQL to create a database that stores information about users and the books they have saved. The database is designed to efficiently handle data in a secure and scalable manner, preventing errors or data loss.",
        },
        item4: {
          content:
            "Motion enabled me to add smooth animations and interactions that enhance the user experience. I used it for animated buttons and sections, giving the website a more dynamic and engaging feel.",
        },
        item5: {
          content:
            "For styling, I used Tailwind CSS, which allowed me to quickly build a responsive and modern design. This made it easy to maintain a consistent style and ensure that the site works well on all devices.",
        },
        item6: {
          content:
            "JavaScript was used through React to add interactivity and dynamics to the website. I implemented functions and interactions that make the user experience more engaging and intuitive.",
        },
      },
    },
  },
  projectLendr: {
    title: "Lendr",
    about: {
      heading: "About the Project",
      badges: {
        badge1: "Frontend",
        badge2: "Backend",
        badge3: "API",
      },
      text: {
        paragraph1:
          "Lendr was developed as part of a school project in web development. The project was to consist of two different frontends, both of which should access the same backend. We created a web app designed to connect renters and lenders of suitcases and travel bags. Users can either rent a suitcase cheaply or earn money by renting out their own.",
        paragraph2:
          "We used Next.js to build the user app and Remix to develop an admin dashboard for Lendr's employees.",
        paragraph3:
          "We used MySQL to create a database that stores information about users and the products available for rent. Additionally, we developed an API in PHP, which both frontends can access to retrieve and update data.",
        testUser: {
          heading: "Test User:",
          email: "Email: sylto@gmail.com",
          password: "Password: hello",
        },
      },
    },
    accordion: {
      heading: "Technologies",
      items: {
        item1: {
          content:
            "We used React to create a dynamic and interactive user experience. By building our website with reusable components, we optimized the development process and ensured a consistent user interface.",
        },
        item2: {
          content:
            "To deliver a fast and efficient user app for Lendr, we chose Next.js. This framework has enabled us to optimize performance while creating a seamless experience for our users.",
        },
        item3: {
          content:
            "Remix is a modern React-based framework that, like Next.js, simplifies the development of fast and efficient web applications. In this project, we used Remix to build an admin dashboard for Lendr, serving as a control panel for support staff.",
        },
        item4: {
          content:
            "In this project, we used MySQL to create a database that stores information about users and the suitcases and bags available for rent.",
        },
        item5: {
          content:
            "Our PHP-based API serves as the link between the frontend and database. This has enabled flexible and secure data exchange, allowing users and administrators to interact with the Lendr platform.",
        },
        item6: {
          content:
            "To achieve a modern and user-friendly design, we integrated Shadcn components. This has accelerated our UI development and allowed us to customize the look to perfectly match Lendr's visual identity.",
        },
        item7: {
          content:
            "With Tailwind CSS, we created a responsive and stylish design. This framework has allowed us to quickly style our website and ensure a consistent visual experience across different devices.",
        },
        item8: {
          content:
            "JavaScript is used through React to add interactivity to the website. We implemented it to create functions and interactions that enhance the user experience, making it more engaging and intuitive.",
        },
      },
    },
  },
  projectGlassFill: {
    title: "Glass Fill",
    about: {
      heading: "About the Project",
      badges: {
        badge1: "Frontend",
      },
      text: {
        paragraph1:
          "This project is a website built with basic HTML, CSS, and JavaScript. The site is a simple page that shows an animation of a glass gradually filling with liquid as you scroll down the page.",
        paragraph2:
          "I used HTML to structure the content and build the layout of the site, CSS to style the elements, and JavaScript to add interactivity and animations.",
        paragraph3:
          "The site also displays the original After Effects animation that the site is based on.",
      },
    },
    accordion: {
      heading: "Technologies",
      items: {
        item1: {
          content:
            "HTML is the primary language used to build web pages and applications. I used it to structure the content and build the layout of the site.",
        },
        item2: {
          content:
            "CSS is a language used to style and design web pages. I used it to add colors, fonts, layout, and animations to the site.",
        },
        item3: {
          content:
            "JavaScript is a programming language used to add interactivity to web pages. I used it to implement functions and interactions that make the user experience more engaging.",
        },
      },
    },
  },
  projectLiveScores: {
    title: "Live Scores",
    about: {
      heading: "About the Project",
      badges: {
        badge1: "Frontend",
        badge2: "API",
      },
      text: {
        paragraph1:
          "Live Scores is a football live score app that displays live matches from the biggest leagues in Europe. The app is built with TypeScript in Next.js and uses two different football APIs to fetch live scores and league tables.",
        paragraph2:
          "'api-football.com' is used to fetch live scores, but since I am using their free version, the app is limited to 100 API calls per day. 'football-data.org' is used to fetch league tables. By combining the two APIs, I can merge data from both free-tier APIs.",
        paragraph3:
          "The app allows users to view live scores, match statistics, team lineups, and league tables.",
      },
    },
    accordion: {
      heading: "Technologies",
      items: {
        item1: {
          content:
            "React is used to build interactive user interfaces with components. I have used it to structure and develop the entire functionality of the website, making it easy to reuse code and achieve an efficient development process.",
        },
        item2: {
          content:
            "Next.js is a modern React-based framework that makes it easy to build fast and efficient web applications. In this project, I used Next.js to build a football live score app where users can view live scores and match statistics.",
        },
        item3: {
          content:
            "Tailwind is a CSS framework that simplifies the creation of a responsive and modern user interface using utility classes. I used it to style the website and achieve a consistent and modern design.",
        },
        item4: {
          content:
            "TypeScript is a programming language that builds on JavaScript by adding type checking. I used TypeScript to write the code in this project, which has improved code quality and reduced errors.",
        },
        item5: {
          content:
            "API-Sports is an API that provides access to sports data from various sports, including football. I used API-Sports to fetch live football scores for my live score app.",
        },
        item6: {
          content:
            "Football-data.org is an API that provides access to football data from various leagues and tournaments. I used Football-data.org to fetch league tables for my live score app.",
        },
      },
    },
  },
  projectPalette: {
    title: "Palette",
    about: {
      heading: "About the Project",
      badges: {
        badge1: "Frontend",
        badge2: "Backend",
        badge3: "AI Chatbot",
      },
      text: {
        paragraph1:
          "Palette is a color palette generator developed as a hobby project. The app can generate random color palettes that users can save to their profiles. Additionally, the app features an AI chatbot that helps users find palettes that match their needs.",
        paragraph2:
          "The app is built with Next.js using TypeScript and utilizes MongoDB to store data about users and the color palettes they have saved. It also integrates the Mistral API as an LLM to generate color palettes in the chat window.",
        paragraph3:
          "I created the app as an exercise in working with AI and MongoDB. I recreated the design from the existing app 'Coolors,' which is a color palette generator.",
        testUser: {
          heading: "Test User:",
          email: "Email: sylto@gmail.com",
          password: "Password: hello1234",
        },
      },
    },
    accordion: {
      heading: "Technologies",
      items: {
        item1: {
          content:
            "I used React to create an interactive and dynamic user interface for my color palette generator. By building the site with reusable components, I ensured an efficient development process and a user-friendly experience.",
        },
        item2: {
          content:
            "Next.js has been the foundation for creating a fast and efficient web application. I used it to develop my color palette generator, where users can easily generate and save their own color palettes.",
        },
        item3: {
          content:
            "To manage user data and saved color palettes, I implemented MongoDB. This NoSQL database gives me the flexibility to store and retrieve data efficiently.",
        },
        item4: {
          content:
            "Mistral has been a key part of adding intelligence to my application. I integrated Mistral into the chat window so users can get help generating color palettes, providing a more intuitive experience.",
        },
        item5: {
          content:
            "With Tailwind CSS, I quickly and efficiently styled my color palette generator. This has enabled me to create a modern and responsive design that works well on all devices.",
        },
        item6: {
          content:
            "TypeScript has helped me write more robust and maintainable code. By adding type safety to JavaScript, I have reduced errors and improved the development process.",
        },
        item7: {
          content:
            "Zustand is a state management library for React. I used Zustand to manage the state in the app, allowing users to lock individual colors in palettes without losing the state when generating a new palette.",
        },
      },
    },
  },
} as const;
