import clsx from 'clsx';
import React from 'react';
import styles from './button.module.css';

type ButtonProps = {
  variant?: 'default' | 'slider';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'default', size = 'default', className, children, ...rest },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          styles.root,
          styles[`variant-${variant}`],
          styles[`size-${size}`],
          className,
        )}
        {...rest}
      >
        <span className={styles.content}>{children}</span>
      </button>
    );
  },
);
