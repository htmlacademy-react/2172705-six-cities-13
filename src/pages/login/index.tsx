import { LinkItem } from '../../shared/ui';
import { Login } from '../../widgets/login';
import { Header } from '../../widgets/header';


export function LoginPage() {
  return (
    <div className="page page--gray page--login">
      <Header
        isLoginPage
      />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <Login
            inputWrapperClss='login__input-wrapper form__input-wrapper'
            inputLabelClss='visually-hidden'
            inputClss='login__input form__input'

            firstInputLabelText='E-mail'
            firstInputType='email'
            firstInputIsRequired

            secondInputLabelText='Password'
            secondInputType='password'
            secondInputIsRequired

            buttonClss='login__submit form__submit'
            buttonType='submit'
            buttonText='Sign in'
          />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <LinkItem
                clss='locations__item-link'
                href='#'
                text='Amsterdam'
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
