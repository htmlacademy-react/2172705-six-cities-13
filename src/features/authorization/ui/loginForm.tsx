import clsx from 'clsx';
import { useState, FormEvent, ChangeEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector, validate } from '@/shared/lib';
import { Input, Button, RingLoader } from '@/shared/ui';
import { inputs } from '../const';
import { login } from '../index';
import styles from './styles.module.css';

export function LoginForm() {
  const dispatch = useAppDispatch();
  const isAuthInProgressStatus = useAppSelector((state) => state.auth.isAuthInProgressStatus);

  const isSubmitButtonActive = useRef(false);

  const [authData, setAuthData] = useState(() => inputs.reduce((acc, input) => ({
    ...acc,
    [input.name]: ''
  }), {}));

  const [inputStatus, setInputStatus] = useState<{ [key: string]: 'unknown' | 'valid' | 'invalid' }>(() => inputs.reduce((acc, input) => ({
    ...acc,
    [input.name]: 'unknown'
  }), {}));

  const handleSignInSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(login(authData as AuthData));
  };

  const handleLoginInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setAuthData({
      ...authData,
      [evt.target.name]: evt.target.value
    });

    setInputStatus(() => ({
      ...inputStatus,
      [evt.target.name]: validate(evt.target.dataset.regExp ?? '', evt.target.value) ? 'valid' : 'invalid'
    }));
  };

  if (Object.values(inputStatus).includes('invalid')) {
    isSubmitButtonActive.current = false;
  } else {
    isSubmitButtonActive.current = true;
  }

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form
          className="login__form form"
          action="#"
          method="post"
          onSubmit={handleSignInSubmit}
        >
          {inputs.map((input) => (
            <div
              key={input.name}
              className={clsx(
                'login__input-wrapper form__input-wrapper',
                styles['input-wrapper'],
                { [styles['input-wrapper--invalid']]: inputStatus[input.name] === 'invalid' },
                { [styles['input-wrapper--valid']]: inputStatus[input.name] === 'valid' }
              )}
            >
              <label className="visually-hidden">{input.labelText}</label>
              <Input
                className="login__input form__input"
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                required={input.required}
                onInput={handleLoginInputChange}
                data-reg-exp={input.regExp}
              />
              <span className={styles['error-text']}>{input.errorText}</span>
            </div>
          ))}
          <Button
            className="login__submit form__submit"
            type="submit"
            disabled={isAuthInProgressStatus || !isSubmitButtonActive.current}
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
