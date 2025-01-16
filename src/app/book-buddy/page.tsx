import Slider from "@/components/slider";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";
import Footer from "@/components/footer";

export default function Page() {
  const accordionItems = [
    {
      title: "React",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, nibh sit amet dapibus consequat, nibh est cursus sapien, tincidunt bibendum lectus neque eu leo. ",
      icon: "/icons/react.svg",
      website: "https://react.dev/",
    },
    {
      title: "Next.js",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, nibh sit amet dapibus consequat, nibh est cursus sapien, tincidunt bibendum lectus neque eu leo. ",
      icon: "/icons/next-js.svg",
      website: "https://nextjs.org/docs",
    },
    {
      title: "MySQL",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, nibh sit amet dapibus consequat, nibh est cursus sapien, tincidunt bibendum lectus neque eu leo. ",
      icon: "/icons/mysql.svg",
      website: "",
    },
    {
      title: "Motion",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, nibh sit amet dapibus consequat, nibh est cursus sapien, tincidunt bibendum lectus neque eu leo. ",
      icon: "/icons/framer-motion.svg",
      website: "https://motion.dev/",
    },
    {
      title: "Tailwind CSS",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, nibh sit amet dapibus consequat, nibh est cursus sapien, tincidunt bibendum lectus neque eu leo. ",
      icon: "/icons/tailwind.svg",
      website: "https://tailwindcss.com/",
    },
    {
      title: "JavaScript",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, nibh sit amet dapibus consequat, nibh est cursus sapien, tincidunt bibendum lectus neque eu leo. ",
      icon: "/icons/javascript.svg",
      website: "",
    },
  ];

  return (
    <>
      <div className="w-screen bg-whitebg dark:bg-[#1A1A1A]">
        <div className="relative flex h-[420px] w-screen items-center justify-center rounded-b-[40px] bg-background sm:h-[450px] lg:h-[550px] lg:rounded-b-[50px] xl:h-[600px] 2xl:h-[650px] 2xl:rounded-b-[70px]">
          <div className="absolute z-0 h-full w-full bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
          <ProjectBanner
            variant="phone"
            imageSrc="/images/bookapp-banner.webp"
            title="Book Buddy"
            website="https://book-app-gamma-rose.vercel.app/"
            github="https://github.com/TobiasRW/my-book-app"
          />
        </div>
      </div>
      <ProjectDescription
        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, nibh sit amet dapibus consequat, nibh est cursus sapien, tincidunt bibendum lectus neque eu leo. \n 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, nibh sit amet dapibus consequat, nibh est cursus sapien, tincidunt bibendum lectus neque eu leo. \n
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, nibh sit amet dapibus consequat, nibh est cursus sapien, tincidunt bibendum lectus neque eu leo.`}
        icons={[
          "/icons/react.svg",
          "/icons/next-js.svg",
          "/icons/tailwind.svg",
          "/icons/framer-motion.svg",
          "/icons/javascript.svg",
          "/icons/mysql.svg",
        ]}
      />
      <div className="mx-auto xl:grid xl:w-10/12 xl:grid-cols-[1.5fr,1fr] xl:gap-14 xl:py-40">
        <Slider
          variant="background"
          bgColor="#2c2c2c"
          images={[
            "/images/book-pic1.png",
            "/images/book-pic2.png",
            "/images/book-pic3.png",
          ]}
        />
        <Accordion items={accordionItems} />
      </div>
      <Footer />
    </>
  );
}
