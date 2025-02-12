import { Project } from "../types/types";

export const projects: Project[] = [
  {
    variant: "default",
    imageSrc: "/images/coelm-banner.webp",
    titleKey: "project.coelm.name",
    textKey: "project.coelm.brief",
    link: "/coelm",
  },
  {
    variant: "phone",
    imageSrc: "/images/bookapp-banner.webp",
    titleKey: "project.bookBuddy.name",
    textKey: "project.bookBuddy.brief",
    link: "/book-buddy",
  },
  {
    variant: "phone",
    imageSrc: "/images/lendr-banner.webp",
    titleKey: "project.lendr.name",
    textKey: "project.lendr.brief",
    link: "/lendr",
    bgColor: "#5BAD86",
  },
  {
    variant: "computer",
    imageSrc: "/images/glassfill-banner.webp",
    titleKey: "project.glassFill.name",
    textKey: "project.glassFill.brief",
    link: "/glass-fill",
    bgColor: "#6BB3ED",
  },
  // {
  //   variant: "phone",
  //   imageSrc: "/images/livescore-banner.webp",
  //   titleKey: "project.liveScores.name",
  //   textKey: "project.liveScores.brief",
  //   link: "/livescore",
  //   bgColor: "#26437E",
  // },
];
