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
      },
    },
    about: {
      title: "Who am I?",
      text: {
        intro: "Hello There 👋🏻",
        paragraph1:
          "My name is Tobias, and I am a passionate web developer focusing on frontend development. I have a degree in multimedia design and am currently continuing my studies in web development as a top-up education.",
        paragraph2:
          "I love immersing myself in things—whether it's a new fantasy world, training at the gym, or an exciting coding project! I have always been a problem solver by nature, from math exercises in elementary school to now finding solutions as a web developer.",
        paragraph3:
          "With my focus on frontend development, I appreciate the details—especially when it comes to interactivity and design. I am always curious to learn something new and I am happy to dive into new technologies and trends.",
        paragraph4:
          "Right now, I am looking for a student job where I can build on my experience while learning a lot of new things. If that sounds interesting to you, don’t hesitate to contact me—I look forward to hearing from you!",
      },
    },
  },
  projectCoelm: {
    title: "Coelm",
    about: {
      heading: "About the Project",
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
            "React is used to build interactive user interfaces with components. I have used it to structure and develop the entire functionality of the website, making it easy to reuse code and achieve an efficient development process.",
        },
        item2: {
          content:
            "Vite is a tool that makes development fast and efficient by providing instant updates during coding. I have used it to make the development process smoother and more efficient.",
        },
        item3: {
          content:
            "Tailwind is a CSS framework that makes it easy to build a responsive and modern user interface using utility classes. I have used it to style the website and achieve a consistent and modern design.",
        },
        item4: {
          content:
            "Motion makes it super easy to create cool animations in React. I have used it to create dynamic elements and animations that make the website more lively and engaging. Including buttons and other interactive elements.",
        },
        item5: {
          content:
            "JavaScript is used through React to add interactivity to the website. I have used it to implement functions and interactions that make the user experience more engaging and intuitive.",
        },
        item6: {
          content:
            "GSAP is an animation library that makes it easy to create advanced and impressive animations. I have used it for the more complex animations on the website, as seen on the 'about us' (om os) page and in the webshop.",
        },
      },
    },
  },
} as const;
