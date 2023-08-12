import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

export function Button({ className, children, ...args }: ButtonProps) {
  return (
    <button className={clsx('button', className)} {...args}>
      {children}
    </button>
  );
}
