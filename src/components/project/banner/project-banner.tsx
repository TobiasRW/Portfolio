import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { ProjectBannerVariant } from "@/types/types";
import clsx from "clsx";
import styles from "./project-banner.module.css";

type ProjectBannerProps = {
  variant?: ProjectBannerVariant;
  imageSrc: string;
  title: string;
  website: string;
  github?: string;
  bgColor?: string;
};

export function ProjectBanner({
  variant = "default",
  imageSrc,
  title,
  website,
  github,
  bgColor = "#2C2C2C",
}: ProjectBannerProps) {
  const isPc = variant === "pc";
  const isPhone = variant === "phone";
  const isDefault = variant === "default";

  return (
    <div className={styles.root}>
      <div className={styles["image-container"]}>
        <div
          className={styles["image-wrapper"]}
          style={{
            backgroundColor: bgColor,
          }}
        >
          <Image
            src={imageSrc}
            alt={`${title} Banner`}
            fill
            priority={true}
            className={clsx({
              [styles["image-default"]]: isDefault,
              [styles["image-pc"]]: isPc,
              [styles["image-phone"]]: isPhone,
            })}
          />
          {/* Name and button - Laptop */}
          <div className={styles["desktop-overlay"]}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles["button-group"]}>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  aria-label="Github link"
                  className={styles["button"]}
                >
                  <Image
                    src="/icons/github.svg"
                    alt="Github logo"
                    width={16}
                    height={16}
                    className={styles["button-icon"]}
                  />
                </a>
              )}
              <a
                href={website}
                target="_blank"
                aria-label="Website link"
                className={styles["button"]}
              >
                <ArrowUpRightIcon className={styles["button-icon"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Name and buttons - Mobile */}
      <div className={styles["mobile-overlay"]}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles["button-group"]}>
          {github && (
            <a
              href={github}
              aria-label="Github link"
              target="_blank"
              className={styles["button"]}
            >
              <Image
                src="/icons/github.svg"
                alt="Github logo"
                width={16}
                height={16}
                className={styles["button-icon"]}
              />
            </a>
          )}
          <a
            href={website}
            aria-label="Website link"
            target="_blank"
            className={styles["button"]}
          >
            <ArrowUpRightIcon className={styles["button-icon"]} />
          </a>
        </div>
      </div>
    </div>
  );
}
