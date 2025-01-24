type Logo = {
  icon: string;
  dark?: string;
  label: string;
  url?: string;
};

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
];

export const getLogo = (logo: Logo, isDarkMode: boolean): string => {
  return isDarkMode && logo.dark ? logo.dark : logo.icon;
};

export const getLogoByLabel = (label: string, isDarkMode: boolean): string => {
  const logo = logos.find((logo) => logo.label === label);
  return logo ? getLogo(logo, isDarkMode) : "";
};
