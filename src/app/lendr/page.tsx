import ProjectBanner from "@/components/project-banner";
import ProjectDescription from "@/components/project-description";
import Accordion from "@/components/accordion-tech";
import Slider from "@/components/slider";

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
      title: "Remix",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, nibh sit amet dapibus consequat, nibh est cursus sapien, tincidunt bibendum lectus neque eu leo. ",
      icon: "/icons/remix.svg",
      website: "https://remix.run/docs/en/main",
    },
    {
      title: "MySQL",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, nibh sit amet dapibus consequat, nibh est cursus sapien, tincidunt bibendum lectus neque eu leo. ",
      icon: "/icons/mysql.svg",
      website: "",
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
            imageSrc="/images/lendr-banner.webp"
            title="Lendr"
            website="https://lendr-nine.vercel.app/"
            github=""
            bgColor="#5BAD86"
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
          "/icons/remix.svg",
          "/icons/mysql.svg",
          "/icons/tailwind.svg",
          "/icons/javascript.svg",
        ]}
      />
      <div className="mx-auto xl:grid xl:w-10/12 xl:grid-cols-[1.5fr,1fr] xl:gap-14 xl:py-40">
        <Slider
          variant="background"
          bgColor="#5BAD86"
          images={[
            "/images/lendr-pic1.png",
            "/images/lendr-pic2.png",
            "/images/lendr-pic3.png",
          ]}
        />
        <Accordion items={accordionItems} />
      </div>
    </>
  );
}
