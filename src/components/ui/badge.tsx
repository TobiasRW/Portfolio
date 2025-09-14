type BadgeProps = {
  title: string;
};

export default function Badge({ title }: BadgeProps) {
  return (
    <>
      <div className="rounded-full bg-[#EDECEC] px-2 py-1 dark:bg-[#2C2C2C]">
        <p className="font-body text-foreground text-xs font-light">{title}</p>
      </div>
    </>
  );
}
