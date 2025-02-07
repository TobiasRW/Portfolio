import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { I18nProviderClient } from "@/locales/client";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <I18nProviderClient locale={locale}>
        <Hero />
      </I18nProviderClient>
      <Skills />
      <Projects />
      <About />
    </>
  );
}
