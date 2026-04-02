import styles from './badge.module.css';

type BadgeProps = {
  title: string;
};

export function Badge({ title }: BadgeProps) {
  return (
    <>
      <div className={styles.root}>
        <p className={styles.title}>{title}</p>
      </div>
    </>
  );
}
