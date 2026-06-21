import type { Dictionary } from '@/i18n/config';

const dictionary = {
  navigation: {
    back: 'Home',
    projects: 'Projects',
    about: 'About',
  },
  frontPage: {
    hero: {
      title: 'Frontend Engineer',
      location: 'Aarhus, Denmark',
      workplace: '@ Whiteaway Group',
      button: {
        projects: 'Projects',
        about: 'About',
      },
    },
    skills: {
      link: 'Read more',
    },
    projects: {
      title: 'Projects',
      titleAll: 'All Projects',
      viewAll: 'All Projects',
    },
    about: {
      title: 'Who am I?',
      intro: 'Hi there 👋🏻',
      paragraphs: [
        'My name is Tobias, and I am a trained web developer with a passion for both frontend and full-stack development.',
        'I love diving deep into things - whether it’s a new fantasy world, working out at the gym, or an exciting coding project! I have always been a natural problem solver, from math assignments in school to today, where I find solutions as a web developer.',
        'As a frontend developer, I value attention to detail - whether it’s interactivity, design, or performance. I am always curious to learn something new and enjoy exploring new technologies and trends.',
        'If you are interested in learning more about me or have any questions, feel free to reach out.',
      ],
    },
  },
  testUser: {
    heading: 'Test User:',
    user: 'Username: ',
    email: 'Email: ',
    password: 'Password: ',
  },
  projects: {
    candidate: {
      brief: 'A candidate portal with LLM integration',
      about: {
        heading: 'About the Project',
        badges: ['Frontend', 'Backend', 'LLM'],
        disclaimer:
          'This project links to a staging site that is not in production. Profiles may therefore be outdated, and some features may be disabled.',
        paragraphs: [
          'Candidate is a project developed as part of the 2nd semester in Web Development. We were tasked with rewriting the existing candidate portal candidate.dk using React Router 7 and TypeScript. The project was a collaboration between me and my classmates.',
          'The site is a candidate portal that connects students with companies looking for candidates for internships and jobs. As an exam project, my exam group and I developed an AI chatbot designed to help companies find the right candidates for their positions.',
          "We used Mistral's API as the LLM to generate responses in the chat window. Since we're using MongoDB as the database, we implemented vector-based search to find relevant profiles – using Mistral’s embedding model to generate embeddings of the profiles.",
        ],
        testUser: {
          email: 'twolmar@gmail.com',
          password: 'hello',
        },
      },
      accordion: {
        heading: 'Technologies',
        items: [
          'We used React to create an interactive and dynamic user interface for our exam project. Using React made it easy to build a structured codebase.',
          "We used React Router v7 as our React framework to develop the website. With React Router’s 'loader' and 'action' functions, we were able to fetch data and handle requests.",
          'We used MongoDB as our database and Mongoose to handle the data in React. This allowed us to store and retrieve data efficiently.',
          'Motion allowed us to add smooth animations and interactions that enhance the user experience. In this project, we used it to animate the chat window.',
          'We used Tailwind CSS to style our chat window. Since the rest of the site also uses Tailwind, it was easy to maintain a consistent style.',
          'TypeScript helped us write more robust and maintainable code. By adding type checking to JavaScript, we reduced errors and improved the development process.',
          'Mistral is an AI API that provides access to various AI models. We used Mistral to generate chat responses and create embeddings of user profiles.',
        ],
      },
    },
    'fit-app': {
      brief: 'A web app for fitness tracking and workout planning',
      about: {
        heading: 'About the Project',
        badges: ['Frontend', 'Backend'],
        disclaimer:
          'The functionality to create new users has been disabled. Please use the test user to log in.',
        paragraphs: [
          'Fit App is a personal hobby project I developed to track my workouts and progress. The app allows you to create a profile, set up training plans, log workouts, and view statistics over time.',
          'The app is built with Next.js and TypeScript, and uses Supabase to manage user and workout data. Basic PWA support has been added, so the app can be installed directly on mobile and used like a regular app.',
          'I wanted a quick and easy way to log my workouts while also being able to track my progress over time. That’s why I wanted to gather all the features I needed in one place – with the ability to customize them to my needs.',
        ],
        testUser: {
          email: 'test@test.com',
          password: 'hello123',
        },
      },
      accordion: {
        heading: 'Technologies',
        items: [
          'I used Next.js as the React framework to develop the project, which made it possible to build a structured codebase. I have also made use of server actions to handle data updates.',
          'I used Supabase as the database, which integrates well with Next.js. Supabase provides a range of features that make it easy to manage user data and authentication.',
          'Framer Motion made it possible to add smooth animations and interactions that enhance the user experience. In this project, I used it to animate various modals and interactive elements.',
          'I used Tailwind CSS to style my components. Tailwind made it easy to implement responsive design and ensure a consistent style across the application.',
          'TypeScript helped me write more robust and maintainable code. By adding type checking to JavaScript, I reduced errors and improved the development process.',
        ],
      },
    },
    coelm: {
      brief: 'Final project as a multimedia design student',
      about: {
        heading: 'About the Project',
        badges: ['Frontend'],
        paragraphs: [
          'This project focuses on developing a new visual identity and a proof-of-concept webshop design for Nimo Skin’s upcoming brand, coelm.',
          'The project was built using React with Vite as a tool, providing a fast and efficient development environment. The goal was to create an engaging and interactive site, which was achieved using the animation libraries Motion and GSAP.',
          'For the styling of the site, I used Tailwind CSS, making it easy to create a responsive and modern user experience. All content on the site, including images created in Blender, as well as the design and animations, were developed from scratch.',
          'Nimo Skin aimed to develop a visual identity that stands out from their existing brand by appearing more minimalist, exclusive, and modern. This was achieved through research on the target audience, market, and Nimo Skin’s values and visions. The result is a design and webshop that accomplish exactly that.',
        ],
      },
      accordion: {
        heading: 'Technologies',
        items: [
          'I used React to build a structured and modular frontend, where components are reused to create a scalable codebase. This has made it easier to develop and expand the project as needed.',
          'I used Vite as a React framework to develop the website. Vite made it easy to start a new project in a simpler React environment, optimizing the development process.',
          'For styling, I used Tailwind CSS, which allowed me to quickly build a responsive and modern design. This made it easy to maintain a consistent style and ensure that the site works well on all devices.',
          'Motion enabled me to add smooth animations and interactions that enhance the user experience. I used it for animated buttons and sections, giving the website a more dynamic and engaging feel.',
          'JavaScript was used through React to add interactivity and dynamics to the website. I implemented functions and interactions that make the user experience more engaging and intuitive.',
          "GSAP has been a powerful tool for creating more complex animations. I used it to develop engaging effects on the 'About Us' page and in the webshop, where the animations help guide users through the content.",
        ],
      },
    },
    'book-space': {
      brief: 'Exam project for advanced web development',
      about: {
        heading: 'About the Project',
        badges: ['Frontend', 'Backend'],
        disclaimer:
          'The site is hosted on a free version of Render, so it may take a little time to spin up. It will typically take between 1-3 minutes',
        paragraphs: [
          'Book Space is an exam project that I developed as part of my education in the second semester. The project is a web app that allows users to create a profile and save their favorite books, create lists, view recommendations, and track their reading habits.',
          'For this project, we were provided with a Figma prototype that we could use as a foundation for our design, which I have mostly followed.',
          'The app is built with React Router v7 using TypeScript and uses MongoDB to store data about users and the books they have saved. The app utilizes a JSON dataset with books, which we were given as part of the project.',
          'I have used Tailwind CSS to style the app and Motion to add animations to filters and modal windows, making the app more lively and interactive.',
        ],
        testUser: {
          email: 'sylto@gmail.com',
          password: 'hello',
        },
      },
      accordion: {
        heading: 'Technologies',
        items: [
          'I have used React to create an interactive and dynamic user interface for my exam project. Using React has made it easy to build a structured codebase.',
          "I have used React Router v7 as the React framework to develop the website. With React Router's 'loader' and 'action' functions, I was able to easily fetch and update data from MongoDB directly within the components.",
          "To manage user data and saved books, I have used MongoDB and Mongoose. This has enabled efficient data storage and retrieval, which is crucial for the app's functionality.",
          'Motion has allowed me to add smooth animations and interactions that enhance the user experience. I have used it for filters and modal windows, giving the app a more dynamic and engaging feel.',
          'With Tailwind CSS, I have quickly and efficiently styled the website. It has allowed me to style components rapidly and ensure a consistent visual experience across different pages.',
          'TypeScript has helped me write more robust and maintainable code. By adding type control to JavaScript, I have reduced errors and improved the development process.',
        ],
      },
    },
    palette: {
      brief: 'A color palette generator with LLM integration',
      about: {
        heading: 'About the Project',
        badges: ['Frontend', 'Backend', 'LLM'],
        paragraphs: [
          'Palette is a color palette generator developed as a hobby project. The app can generate random color palettes that users can save to their profiles. Additionally, the app features an AI chatbot that helps users find palettes that match their needs.',
          'The app is built with Next.js using TypeScript and utilizes MongoDB to store data about users and the color palettes they have saved. It also integrates the Mistral API as an LLM to generate color palettes in the chat window.',
          "I created the app as an exercise in working with AI and MongoDB. I recreated the design from the existing app 'Coolors,' which is a color palette generator.",
        ],
        testUser: {
          email: 'sylto@gmail.com',
          password: 'hello1234',
        },
      },
      accordion: {
        heading: 'Technologies',
        items: [
          'I used React to create an interactive and dynamic user interface for my color palette generator. By building the site with reusable components, I ensured an efficient development process and a user-friendly experience.',
          'Next.js has been the foundation for creating a fast and efficient web application. I used it to develop my color palette generator, where users can easily generate and save their own color palettes.',
          'To manage user data and saved color palettes, I implemented MongoDB. This NoSQL database gives me the flexibility to store and retrieve data efficiently.',
          'Mistral has been a key part of adding intelligence to my application. I integrated Mistral into the chat window so users can get help generating color palettes, providing a more intuitive experience.',
          'With Tailwind CSS, I quickly and efficiently styled my color palette generator. This has enabled me to create a modern and responsive design that works well on all devices.',
          'TypeScript has helped me write more robust and maintainable code. By adding type safety to JavaScript, I have reduced errors and improved the development process.',
          'Zustand is a state management library for React. I used Zustand to manage the state in the app, allowing users to lock individual colors in palettes without losing the state when generating a new palette.',
        ],
      },
    },
    livescore: {
      brief: 'A football live score app',
      about: {
        heading: 'About the Project',
        badges: ['Frontend', 'API'],
        paragraphs: [
          'Live Scores is a football live score app that displays live matches from the biggest leagues in Europe. The app is built with TypeScript in Next.js and uses two different football APIs to fetch live scores and league tables.',
          "'api-football.com' is used to fetch live scores, but since I am using their free version, the app is limited to 100 API calls per day. 'football-data.org' is used to fetch league tables. By combining the two APIs, I can merge data from both free-tier APIs.",
          'The app allows users to view live scores, match statistics, team lineups, and league tables.',
        ],
      },
      accordion: {
        heading: 'Technologies',
        items: [
          'React is used to build interactive user interfaces with components. I have used it to structure and develop the entire functionality of the website, making it easy to reuse code and achieve an efficient development process.',
          'Next.js is a modern React-based framework that makes it easy to build fast and efficient web applications. In this project, I used Next.js to build a football live score app where users can view live scores and match statistics.',
          'Tailwind is a CSS framework that simplifies the creation of a responsive and modern user interface using utility classes. I used it to style the website and achieve a consistent and modern design.',
          'TypeScript is a programming language that builds on JavaScript by adding type checking. I used TypeScript to write the code in this project, which has improved code quality and reduced errors.',
          'API-Sports is an API that provides access to sports data from various sports, including football. I used API-Sports to fetch live football scores for my live score app.',
          'Football-data.org is an API that provides access to football data from various leagues and tournaments. I used Football-data.org to fetch league tables for my live score app.',
        ],
      },
    },
  },
} satisfies Dictionary;

export default dictionary;
