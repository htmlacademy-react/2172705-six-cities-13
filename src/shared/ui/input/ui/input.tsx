interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName: string;
  labelClassName: string;
  inputClassName: string;
  labelText: string;
}

export function Input({
  wrapperClassName,
  labelClassName,
  inputClassName,
  labelText,
  ...args
}: InputProps) {
  return (
    <div className={wrapperClassName}>
      <label className={labelClassName}>
        {labelText}
      </label>

      <input className={inputClassName} {...args} />
    </div>
  );
}
