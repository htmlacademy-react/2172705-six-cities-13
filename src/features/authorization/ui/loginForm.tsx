import { useState, FormEvent, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Input, Button, RingLoader } from '@/shared/ui';
import { login } from '../index';

export function LoginForm() {
  const dispatch = useAppDispatch();
  const isAuthInProgressStatus = useAppSelector((state) => state.auth.isAuthInProgressStatus);
  const [authData, setAuthData] = useState({
    login: '',
    password: ''
  });

  const handleLoginSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(login(authData));
  };

  const handleLoginInputChange = (evt: ChangeEvent<HTMLInputElement>) => setAuthData({
    ...authData,
    [evt.target.name]: evt.target.value
  });

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form
          className="login__form form"
          action="#"
          method="post"
          onSubmit={handleLoginSubmit}
        >
          <Input
            wrapperClassName="login__input-wrapper form__input-wrapper"
            labelClassName="visually-hidden"
            inputClassName="login__input form__input"
            labelText="E-mail"
            type="email"
            name="login"
            placeholder="Email"
            required
            onChange={handleLoginInputChange}
          />
          <Input
            wrapperClassName="login__input-wrapper form__input-wrapper"
            labelClassName="visually-hidden"
            inputClassName="login__input form__input"
            labelText="Password"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleLoginInputChange}
          />
          <Button
            className="login__submit form__submit"
            type="submit"
            disabled={isAuthInProgressStatus}
          >
            {isAuthInProgressStatus ? <RingLoader /> : 'Sign in'}
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
