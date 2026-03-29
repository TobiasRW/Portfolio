import About from "@/components/sections/about/about";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/projects";
import Skills from "@/components/sections/skills/skills";
import { setStaticParamsLocale } from "next-international/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <About />
    </>
  );
}
