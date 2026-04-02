import { About, Hero, Projects, Skills } from '@/components/sections';
import { setStaticParamsLocale } from 'next-international/server';

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
