import { ChangeEvent, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName: string;
  labelClassName: string;
  inputClassName: string;
  labelText: string;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  wrapperClassName,
  labelClassName,
  inputClassName,
  labelText,
  onChange,
  ...args
}: InputProps) {
  return (
    <div className={wrapperClassName}>
      <label className={labelClassName}>
        {labelText}
      </label>

      <input
        className={inputClassName}
        onChange={onChange}
        {...args}
      />
    </div>
  );
}
