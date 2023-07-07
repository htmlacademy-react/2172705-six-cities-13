type InputBlockProps = {
  wrapperClss: string;
  labelClss: string;
  inputClss: string;
  labelText: string;
  type: string;
  placeholder: string;
  isRequired: boolean;
}

export function InputBlock({
  wrapperClss,
  labelClss,
  inputClss,
  labelText,
  type,
  placeholder,
  isRequired
}: InputBlockProps) {
  return (
    <div className={wrapperClss}>
      <label
        className={labelClss}
      >
        {labelText}
      </label>

      <input
        className={inputClss}
        type={type}
        name={type}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
}
