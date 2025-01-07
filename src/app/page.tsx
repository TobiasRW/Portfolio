import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
    </>
  );
}
