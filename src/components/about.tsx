import { getScopedI18n } from "@/locales/server";
export default async function About() {
  const scopedT = await getScopedI18n("frontPage.about");
  return (
    <section id="about">
      <div className="mx-auto flex w-10/12 flex-col gap-8">
        <h2 className="text-center font-heading text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
          {scopedT("title")}
        </h2>
        <p className="font-body text-sm font-light lg:text-base 2xl:text-lg">
          {scopedT("text.intro")}
          <br />
          <br />
          {scopedT("text.paragraph1")}
          <br />
          <br />
          {scopedT("text.paragraph2")}
          <br />
          <br />
          {scopedT("text.paragraph3")}
          <br />
          <br />
          {scopedT("text.paragraph4")}
        </p>
        <div className="flex flex-col items-start gap-4 font-body text-sm font-light text-[#2A4B9A] lg:text-base 2xl:text-lg dark:text-white">
          <a
            href="mailto:tobiasrw98@gmail.com"
            target="_blank"
            className="underline"
          >
            tobiasrw98@gmail.com
          </a>
          <a href="tel:30305154" target="_blank" className="underline">
            Tlf: 30 30 51 54
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-wolmar-87991224a/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
