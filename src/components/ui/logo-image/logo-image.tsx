import type { Logo } from '@/types/types';
import styles from './logo-image.module.css';

type LogoImageProps = {
  logo: Pick<Logo, 'icon' | 'dark' | 'label'>;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
};

export function LogoImage({
  logo,
  alt,
  width,
  height,
  className,
  loading,
}: LogoImageProps) {
  const img = (
    <img
      src={logo.icon}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
    />
  );

  if (!logo.dark) return img;

  return (
    <picture className={styles.picture}>
      <source srcSet={logo.dark} media="(prefers-color-scheme: dark)" />
      {img}
    </picture>
  );
}
