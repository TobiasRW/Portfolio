export default function Footer() {
  return (
    <footer className="mt-20 flex h-32 items-end rounded-t-[40px] bg-whitebg lg:h-40 lg:rounded-t-[50px] 2xl:h-48 2xl:rounded-t-[70px] dark:bg-[#1a1a1a] dark:text-white">
      <div className="mx-auto flex w-11/12 items-center justify-between py-4 font-heading text-lg font-semibold md:text-2xl lg:w-10/12 lg:py-8 lg:text-3xl 2xl:text-4xl">
        <div className="flex gap-4 md:gap-8 lg:gap-10">
          <a href="https://github.com/TobiasRW" target="_blank">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-wolmar-87991224a/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="mailto:tobiasrw98@gmail.com" target="_blank">
            Email
          </a>
        </div>
        <div className="">
          <p>Tobias Wolmar</p>
        </div>
      </div>
    </footer>
  );
}
