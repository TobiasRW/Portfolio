import { Logo } from "../types/types";

export const logos: Logo[] = [
  {
    icon: "/icons/tailwind.svg",
    label: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  {
    icon: "/icons/typescript.svg",
    label: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: "/icons/next-js.svg",
    dark: "/icons/next-js-dark.svg",
    label: "Next.js",
    url: "https://nextjs.org/docs",
  },
  {
    icon: "/icons/remix.svg",
    dark: "/icons/remix-dark.svg",
    label: "Remix",
    url: "https://remix.run/docs/en/main",
  },
  {
    icon: "/icons/react.svg",
    label: "React",
    url: "https://react.dev/",
  },
  {
    icon: "/icons/mysql.svg",
    dark: "/icons/mysql-dark.svg",
    label: "MySQL",
    url: "https://dev.mysql.com/doc/",
  },
  { icon: "/icons/javascript.svg", label: "JavaScript" },
  {
    icon: "/icons/motion.svg",
    label: "Motion",
    url: "https://motion.dev/",
  },
  { icon: "/icons/php.svg", label: "PHP", url: "https://www.php.net/docs.php" },
  {
    icon: "/icons/shadcn.svg",
    dark: "/icons/shadcn-dark.svg",
    label: "Shadcn",
    url: "https://ui.shadcn.com/",
  },
  {
    icon: "/icons/vitejs.svg",
    label: "Vite",
    url: "https://vite.dev/",
  },
  {
    icon: "/icons/gsap.svg",
    label: "GSAP",
    url: "https://gsap.com/",
  },
  {
    icon: "/icons/html.svg",
    label: "HTML",
  },
  {
    icon: "/icons/css.svg",
    label: "CSS",
  },
  {
    icon: "/icons/mongodb.svg",
    label: "MongoDB",
    url: "https://www.mongodb.com/docs/",
  },
  {
    icon: "/icons/fborg.png",
    label: "Football Data API",
    url: "https://www.football-data.org/documentation/quickstart",
  },
  {
    icon: "/icons/api-sports.png",
    label: "API Sports",
    url: "https://www.api-football.com/documentation-v3",
  },
  {
    icon: "/icons/mistral.svg",
    label: "Mistral",
    url: "https://mistral.ai/",
  },
  {
    icon: "/icons/zustand.svg",
    label: "Zustand",
    url: "https://zustand.docs.pmnd.rs/getting-started/introduction",
  },
];

export const getLogo = (logo: Logo, isDarkMode: boolean): string => {
  return isDarkMode && logo.dark ? logo.dark : logo.icon;
};

export const getLogoByLabel = (
  label: string,
  isDarkMode: boolean,
): { icon: string; url?: string } => {
  const logo = logos.find((logo) => logo.label === label);
  return {
    icon: logo ? getLogo(logo, isDarkMode) : "",
    url: logo?.url,
  };
};
