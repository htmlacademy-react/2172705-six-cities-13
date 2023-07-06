import { ButtonType } from '../../types/types';

type ButtonProps = {
  clss: string;
  type: ButtonType;
  text: string;
}

export function Button({clss, type, text}: ButtonProps) {
  return (
    <button
      className={clss}
      type={type}
    >
      {text}
    </button>
  );
}
