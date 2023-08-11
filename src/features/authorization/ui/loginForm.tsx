import clsx from 'clsx';
import { useState, FormEvent, ChangeEvent } from 'react';
import {
  capitalizeWord,
  useAppDispatch,
  useAppSelector,
  getObjectKeys
} from '@/shared/lib';
import { Input, Button, RingLoader } from '@/shared/ui';
import { FieldData } from '../const';
import { login } from '../index';
import { FormState } from '../types';
import styles from './styles.module.css';

export function LoginForm() {
  const dispatch = useAppDispatch();
  const isAuthInProgressStatus = useAppSelector((state) => state.auth.isAuthInProgressStatus);

  const [formState, setFormState] = useState(() => getObjectKeys(FieldData).reduce<FormState>((acc, name) => ({
    ...acc,
    [name]: {
      value: '',
      isValid: true,
      regex: FieldData[name].regex,
      errorText: FieldData[name].errorText
    }
  }), {} as FormState));

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(login({
      login: formState.Email.value,
      password: formState.Password.value
    }));
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    const formattedName = capitalizeWord(name) as keyof typeof formState;
    const rule = formState[formattedName].regex;
    const isFieldValid = rule.test(value);

    setFormState((prev) => ({
      ...prev,
      [formattedName]: {
        ...prev[formattedName],
        value: value,
        isValid: isFieldValid
      }
    }));
  };

  const isFormValid = getObjectKeys(formState).every((name) => formState[name].isValid);

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form
          className="login__form form"
          action="#"
          method="post"
          onSubmit={handleFormSubmit}
        >
          {getObjectKeys(formState)
            .map((name) => (
              <div
                key={name}
                className={clsx(
                  'login__input-wrapper form__input-wrapper',
                  styles['input-wrapper'],
                  { [styles.invalid]: !formState[name].isValid },
                  { [styles.valid]: formState[name].isValid }
                )}
              >
                <label className="visually-hidden">{FieldData[name].labelText}</label>
                <Input
                  className="login__input form__input"
                  type={FieldData[name].type}
                  name={FieldData[name].name}
                  placeholder={FieldData[name].placeholder}
                  required={FieldData[name].required}
                  onChange={handleInputChange}
                />
                {!formState[name].isValid && (
                  <span className={styles['error-text']}>{formState[name].errorText}</span>
                )}
              </div>
            ))}
          <Button
            className="login__submit form__submit"
            type="submit"
            disabled={isAuthInProgressStatus || !isFormValid}
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
