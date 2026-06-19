import { About, Hero, Projects, Skills } from '@/components/sections';
import { hasLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { notFound } from 'next/navigation';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero />
      <Skills />
      <Projects dict={dict} />
      <About dict={dict} />
    </>
  );
}
