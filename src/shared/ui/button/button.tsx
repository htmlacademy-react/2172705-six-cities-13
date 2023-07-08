import cn from 'classnames';

import { ButtonType } from '../../types/types';

type ButtonProps = {
  clss: string;
  type: ButtonType;
  text: string;
  isDisabled: boolean;
}

export function Button({clss, type, text, isDisabled}: ButtonProps) {
  return (
    <button
      className={cn('button', clss)}
      type={type}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
