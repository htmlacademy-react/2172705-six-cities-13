import { InputBlock, Button } from '../../../../shared/ui';
import { capitalizeWord } from '../../../../shared/lib';
import { ButtonType } from '../../../../shared/types/types';

type LoginFormProps = {
  inputWrapperClss: string;
  inputLabelClss: string;
  inputClss: string;

  firstInputLabelText: string;
  firstInputType: string;
  firstInputIsRequired: boolean;

  secondInputLabelText: string;
  secondInputType: string;
  secondInputIsRequired: boolean;

  buttonClss: string;
  buttonType: ButtonType;
  buttonText: string;
}

export function LoginForm({
  inputWrapperClss,
  inputLabelClss,
  inputClss,
  firstInputLabelText,
  firstInputType,
  firstInputIsRequired,
  secondInputLabelText,
  secondInputType,
  secondInputIsRequired,
  buttonClss,
  buttonType,
  buttonText,
}: LoginFormProps) {
  return (
    <form
      className='login__form form'
      action='#'
      method="post"
    >
      <InputBlock
        wrapperClss={inputWrapperClss}
        labelClss={inputLabelClss}
        inputClss={inputClss}
        labelText={firstInputLabelText}
        type={firstInputType}
        placeholder={capitalizeWord(firstInputType)}
        isRequired={firstInputIsRequired}
      />
      <InputBlock
        wrapperClss={inputWrapperClss}
        labelClss={inputLabelClss}
        inputClss={inputClss}
        labelText={secondInputLabelText}
        type={secondInputType}
        placeholder={capitalizeWord(secondInputType)}
        isRequired={secondInputIsRequired}
      />
      <Button
        clss={buttonClss}
        type={buttonType}
        text={buttonText}
        isDisabled={false}
      />
    </form>
  );
}
