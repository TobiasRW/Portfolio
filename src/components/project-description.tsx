type ProjectDescriptionProps = {
  text: string;
  icons: string[];
};

export default function ProjectDescription({
  text,
  icons,
}: ProjectDescriptionProps) {
  return (
    <div className="w-full rounded-b-[40px] bg-whitebg pb-10 pt-10 md:pb-24 md:pt-14 lg:rounded-b-[50px] lg:pb-28 xl:pb-32 xl:pt-20 2xl:rounded-b-[70px] dark:bg-[#1a1a1a]">
      {/* Project Description Section */}
      <div className="mx-auto flex w-11/12 flex-col gap-6 md:w-10/12">
        <h3 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
          Om projektet
        </h3>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-14 xl:justify-between xl:gap-20">
          <p className="font-body text-sm font-light md:text-base">
            {text.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>

          <hr className="h-[1px] border-none bg-foreground lg:hidden" />

          {/* Icons Section */}
          <div className="flex flex-wrap gap-4 rounded-2xl lg:h-full lg:gap-6 lg:bg-[#EDECEC] lg:p-4 xl:p-6 lg:dark:bg-background">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 rounded-full bg-[#EDECEC] p-4 lg:bg-whitebg dark:bg-[#2C2C2C] lg:dark:bg-[#1A1A1A]"
              >
                <img
                  src={icon}
                  alt={`icon-${index}`}
                  className="h-6 w-6 xl:h-8 xl:w-8"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
