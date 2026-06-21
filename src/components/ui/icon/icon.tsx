import { getLogoByLabel } from '@/data/logos';
import { LogoImage } from '../logo-image/logo-image';
import styles from './icon.module.css';

type Props = {
  label: string;
};

export function Icon({ label }: Props) {
  const logo = getLogoByLabel(label);
  if (!logo) return null;

  const image = (
    <LogoImage
      logo={logo}
      alt={`icon-${label}`}
      width={24}
      height={24}
      className={styles.image}
    />
  );

  return (
    <div className={styles.root}>
      {logo.url ? (
        <a href={logo.url} target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
}
