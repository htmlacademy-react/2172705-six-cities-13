import { useState, FormEvent, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Input, Button, RingLoader } from '@/shared/ui';
import { inputs } from '../const';
import { login } from '../index';

export function LoginForm() {
  const dispatch = useAppDispatch();
  const isAuthInProgressStatus = useAppSelector((state) => state.auth.isAuthInProgressStatus);
  const [authData, setAuthData] = useState(() => inputs.reduce((acc, input) => ({
    ...acc,
    [input.name]: ''
  }), {}));

  const handleLoginSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(login(authData as AuthData));
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
          {inputs.map((input) => (
            <div key={input.name} className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">{input.labelText}</label>
              <Input
                className='login__input form__input'
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                required={input.required}
                onChange={handleLoginInputChange}
              />
            </div>
          ))}
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
