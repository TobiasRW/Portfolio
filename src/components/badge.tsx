type BadgeProps = {
  title: string;
};

export default function Badge({ title }: BadgeProps) {
  return (
    <>
      <div className="rounded-xl bg-[#EDECEC] px-2 py-1 dark:bg-[#2C2C2C]">
        <p className="font-body text-xs font-light text-foreground xl:text-sm">
          {title}
        </p>
      </div>
    </>
  );
}
