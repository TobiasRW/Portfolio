"use client";

import highlightText from "@/helpers/highlightText";
import type { TestUser, DescriptionText } from "@/types/types";
import { Badge, Icon } from "./ui";
import { useScopedI18n } from "@/locales/client";

type ProjectDescriptionProps = {
  title: string;
  disclaimer?: string;
  text: DescriptionText[];
  techStack: string[];
  badges?: string[];
  testUser?: TestUser;
};

export default function ProjectDescription({
  title,
  disclaimer,
  text,
  techStack,
  badges = [],
  testUser,
}: ProjectDescriptionProps) {
  const scopedT = useScopedI18n("testUser");

  return (
    <div className="bg-whitebg w-full rounded-b-[40px] pt-10 pb-10 md:pt-14 md:pb-24 lg:rounded-b-[50px] lg:pb-28 xl:pt-20 xl:pb-32 2xl:rounded-b-[70px] dark:bg-[#1a1a1a]">
      {/* Project Description Section */}
      <div className="mx-auto flex w-10/12 max-w-[1920px] flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
            {title}
          </h3>
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 xl:gap-3">
              {badges.map((badge, index) => (
                <Badge key={index} title={badge} />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-14 xl:justify-between 2xl:gap-20">
          <div className="">
            {disclaimer && (
              <p className="font-body mb-4 text-sm leading-normal font-light md:text-base">
                <span className="font-normal italic">Disclaimer:</span>{" "}
                {disclaimer}
              </p>
            )}

            {text.map((text, index) => (
              <p
                key={index}
                className="font-body mb-4 text-sm leading-normal font-light md:text-base"
              >
                {highlightText(text.content, text.highlightWords ?? [])}
              </p>
            ))}

            {testUser && (
              <div className="mt-4">
                <p className="font-body text-sm leading-normal font-normal italic md:text-base">
                  {scopedT("heading")}
                </p>
                {testUser.email && (
                  <p className="font-body text-sm leading-normal font-light md:text-base">
                    <span className="font-normal italic">
                      {scopedT("email")}
                    </span>{" "}
                    {testUser.email}
                  </p>
                )}
                {testUser.username && (
                  <p className="font-body text-sm leading-normal font-light md:text-base">
                    <span className="font-normal italic">
                      {scopedT("user")}
                    </span>{" "}
                    {testUser.username}
                  </p>
                )}
                <p className="font-body text-sm leading-normal font-light md:text-base">
                  <span className="font-normal italic">
                    {scopedT("password")}
                  </span>{" "}
                  {testUser.password}
                </p>
              </div>
            )}
          </div>

          <hr className="bg-foreground h-[1px] border-none lg:hidden" />

          {/* Icons Section */}
          <div className="3xl:w-2/6 flex flex-col gap-4 rounded-2xl lg:w-full lg:self-start xl:w-4/6">
            <p className="font-heading hidden text-2xl font-semibold lg:block">
              Techstack
            </p>
            <div className="flex flex-wrap gap-4">
              {techStack.map((item, index) => {
                return <Icon key={index} label={item} hasTooltip />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
