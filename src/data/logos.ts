import { Logo } from '../types/types';

export const logos: Logo[] = [
  {
    icon: '/icons/css.svg',
    label: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: '/icons/javascript.svg',
    label: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    icon: '/icons/typescript.svg',
    label: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    bgLight: 'rgba(0, 122, 204, .25)',
    tag: 'JavaScript superset',
  },
  {
    icon: '/icons/react.svg',
    label: 'React',
    url: 'https://react.dev/',
    bgLight: 'rgba(97, 200, 251, .20)',
    bgDark: 'rgba(97, 218, 251, .25)',
    tag: 'JavaScript library',
  },
  {
    icon: '/icons/next-js.svg',
    dark: '/icons/next-js-dark.svg',
    label: 'Next.js',
    url: 'https://nextjs.org/docs',
    tag: 'React framework',
  },
  {
    icon: '/icons/react-router.svg',
    dark: '/icons/react-router-dark.svg',
    label: 'React Router',
    url: 'https://reactrouter.com/home',
    tag: 'React framework',
  },
  {
    icon: '/icons/remix.svg',
    dark: '/icons/remix-dark.svg',
    label: 'Remix',
    url: 'https://remix.run/docs/en/main',
    tag: 'React framework',
  },
  {
    icon: '/icons/motion.svg',
    label: 'Motion',
    url: 'https://motion.dev/',
    bgLight: 'rgba(241, 199, 11, .25)',
    bgDark: 'rgba(244, 233, 29, .25)',
    tag: 'Animation library',
  },
  {
    icon: '/icons/gsap.svg',
    label: 'GSAP',
    url: 'https://gsap.com/',
    tag: 'Animation library',
  },
  {
    icon: '/icons/tailwind.svg',
    label: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    bgLight: 'rgba(56, 189, 248, .25)',
    bgDark: 'rgba(96, 165, 250, .25)',
    tag: 'CSS framework',
  },
  {
    icon: '/icons/git.svg',
    label: 'Git',
    url: 'https://git-scm.com/doc',
    bgLight: 'rgba(240, 80, 50, .25)',
    tag: 'Version control',
  },
  {
    icon: '/icons/mysql.svg',
    dark: '/icons/mysql-dark.svg',
    label: 'MySQL',
    url: 'https://dev.mysql.com/doc/',
  },
  {
    icon: '/icons/supabase.svg',
    label: 'Supabase',
    url: 'https://supabase.com/docs',
    bgLight: 'rgba(51, 199, 90, .25)',
    tag: 'PostgreSQL database',
  },
  {
    icon: '/icons/mongodb.svg',
    label: 'MongoDB',
    url: 'https://www.mongodb.com/docs/',
    bgLight: 'rgba(7, 160, 79, .25)',
    tag: 'NoSQL database',
  },
  {
    icon: '/icons/shadcn.svg',
    dark: '/icons/shadcn-dark.svg',
    label: 'Shadcn',
    url: 'https://ui.shadcn.com/',
  },
  {
    icon: '/icons/vitejs.svg',
    label: 'Vite',
    url: 'https://vite.dev/',
  },
  {
    icon: '/icons/zustand.svg',
    label: 'Zustand',
    url: 'https://zustand.docs.pmnd.rs/getting-started/introduction',
  },
  {
    icon: '/icons/fborg.png',
    label: 'Football Data API',
    url: 'https://www.football-data.org/documentation/quickstart',
  },
  {
    icon: '/icons/api-sports.png',
    label: 'API Sports',
    url: 'https://www.api-football.com/documentation-v3',
  },
  {
    icon: '/icons/mistral.svg',
    label: 'Mistral',
    url: 'https://docs.mistral.ai/',
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
    icon: logo ? getLogo(logo, isDarkMode) : '',
    url: logo?.url,
  };
};

export const skillLogos = logos.filter((logo) =>
  [
    'Tailwind CSS',
    'Motion',
    'TypeScript',
    'PHP',
    'React',
    'Next.js',
    'React Router',
    'Git',
    'Supabase',
    'MongoDB',
  ].includes(logo.label),
);
