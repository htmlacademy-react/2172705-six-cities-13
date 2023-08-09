import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
}

export function Input({
  className,
  ...args
}: InputProps) {
  return <input className={clsx('input', className)} {...args} />;
}
