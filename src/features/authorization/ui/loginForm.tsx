import { Input, Button } from '@/shared/ui';

export function LoginForm() {
  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className='login__form form' action='#' method="post">
          <Input
            wrapperClassName="login__input-wrapper form__input-wrapper"
            labelClassName="visually-hidden"
            inputClassName="login__input form__input"
            labelText="E-mail"
            type="email"
            placeholder="Email"
            required
          />
          <Input
            wrapperClassName="login__input-wrapper form__input-wrapper"
            labelClassName="visually-hidden"
            inputClassName="login__input form__input"
            labelText="Password"
            type="password"
            placeholder="Password"
            required
          />
          <Button className="login__submit form__submit" type="submit">
            Sign in
          </Button>
        </form>
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </section>
    </div>
  );
}
