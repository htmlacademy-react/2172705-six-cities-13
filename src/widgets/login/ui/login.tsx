import { ButtonType } from '../../../shared/types/types';
import { LoginForm } from '../../../features/authorization/login';

type LoginProps = {
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

export function Login({
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
} : LoginProps) {
  return (
    <section
      className='login'
    >
      <h1
        className='login__title'
      >
        Sign in
      </h1>
      <LoginForm
        inputWrapperClss={inputWrapperClss}
        inputLabelClss={inputLabelClss}
        inputClss={inputClss}

        firstInputLabelText={firstInputLabelText}
        firstInputType={firstInputType}
        firstInputIsRequired={firstInputIsRequired}

        secondInputLabelText={secondInputLabelText}
        secondInputType={secondInputType}
        secondInputIsRequired={secondInputIsRequired}

        buttonClss={buttonClss}
        buttonType={buttonType}
        buttonText={buttonText}
      />
    </section>
  );
}
